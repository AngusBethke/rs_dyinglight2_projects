import "EngineSetup.mth"
import "GBuffer.mth"
import "terrain.mth"

struct SParams
{
	bool debug_on = false;
} export;

sub template(SParams IN)
{
	platform("*", "none; instancing");

	variant("dbg", "IN.debug_on");

	tech("opq_last")
	{
		Cull(CCW);
		DepthFunc(LEQUAL, TRUE); // DepthFunc(EQUAL, FALSE);
		use GBuffer(
			lerp_on = TRUE,
			out_mv_on = false
		);
		use StencilWrite(ref = STENCIL_STATIC);
		use Terrain();

		InputPosition("I_POS");
		InputNormal("I_NRM_MS_REMOVED");
		InputTexCoord0("I_XZ");
		InputTexCoord1("I_MAT_ID");

		InterpolatorF3("X_NRM_WS");
		InterpolatorF3("X_TNG_WS");
		InterpolatorF3("X_BTG_WS");
		InterpolatorF2("X_UV_0");
		// InterpolatorF2("X_UV_LAYER");
		InterpolatorF("X_MSK");
		InterpolatorF("X_NRM_DIR");
		use SAMPLER_2D_ANISO_OPT_16_WRAP();
		use SAMPLER_2D_ANISO_OPT_8_WRAP();

		Texture2D("T_DIF_0", 0, NO_SRGB);
		Texture2D("T_NRM_0", 1, NO_SRGB);
		Texture2D("T_SPC_0", 2, NO_SRGB);
		Texture2D("T_RGH_0", 3, NO_SRGB);
		Texture2D("T_DPT_0", 4, NO_SRGB);
		Texture2D("T_DIF_1", 5, NO_SRGB);
		Texture2D("T_NRM_1", 6, NO_SRGB);
		Texture2D("T_SPC_1", 7, NO_SRGB);
		Texture2D("T_RGH_1", 8, NO_SRGB);
		
		extern float4 TEXDIM_Size_T_DIF_0;
		Const("C_DIF_SIZE", min(TEXDIM_Size_T_DIF_0.y, TEXDIM_Size_T_DIF_0.x));
		InterpolatorF("X_DIF_MIP");

		extern float4 TEXDIM_Size_T_SPC_1;
		Const("C_SPC_SIZE_1", min(TEXDIM_Size_T_SPC_1.y, TEXDIM_Size_T_SPC_1.x));
		InterpolatorF("X_SPC_SIZE_1");

		extern float4 TEXDIM_Size_T_RGH_1;
		Const("C_RGH_SIZE_1", min(TEXDIM_Size_T_RGH_1.y, TEXDIM_Size_T_RGH_1.x));
		InterpolatorF("X_RGH_SIZE_1");

		extern float4 const_5 = CONST 5;
		float uv_multipler = const_5.x;

		float2 TEXTURE_UV_SIZE = [512.0, 512.0];
		float2 COLOR_UV_SIZE = [512.0 / uv_multipler, 512.0 / uv_multipler];
		float2 LAYER_UV_SCALE = [1.0, 1.0] / [50.0, 50.0];

		Const("C_TEXTURE_LAYER_UV_SCALE", LAYER_UV_SCALE);

		extern float4 TEXDIM_Size_T_DIF_1;
		Const("C_UV_COLOR_SCALE", COLOR_UV_SIZE / TEXDIM_Size_T_DIF_1.xy);			

		InterpolatorF2("X_UV_COLOR");

		extern float4 TEXDIM_Size_T_DPT_0;
		Const("C_DPT_0_TEX_SIZE", TEXDIM_Size_T_DPT_0.xy);

		extern float4 const_1 = CONST 1;
		Const("C_USERDATA_UVSCALE", const_1);

		extern float4 const_15 = CONST 15;
		Const("C_DPT_SCALE", const_15);

		Const("C_UV_SCALE", TEXTURE_UV_SIZE / TEXDIM_Size_T_DIF_0.xy);

		extern float4 const_8 = CONST 8;
		Const("C_MAPDIR_TEXLAYER_MATID", const_8); //CONST_8 [x-kierunek, y-0, z-texture_layer_enabled, w-mat_id]


		InterpolatorF4("X_POS_WS");

		VertexShader()=`
			#include <common.hlsl>

			void main(MAIN_PARAMS)
			{
				#include <VSProlog.hlsl>
			
				const float4 pos_ws = float4(IN(I_POS).xyz, 1.0);

				OUT(X_POS_WS) = pos_ws.xyzw;

				OUT_POS = Mul44(pos_ws, VIEWPROJ_XFORM);

				const float3 uv3_ws = pos_ws.xyz * float3(1.0, -1.0, 1.0);
				const float2 uv_ws = TerrainUVSwizzle(uv3_ws, C_MAPDIR_TEXLAYER_MATID.x);

				const float3 cam_dir_ws = pos_ws.xyz - CAMERA_POS_WS.xyz;

				OUT(X_UV_0) = uv_ws.xy * C_UV_SCALE.xy;
				// OUT(X_UV_LAYER) = uv_ws.xy * C_TEXTURE_LAYER_UV_SCALE.xy;
				const float3 nrm_ws = IN(I_NRM_MS_REMOVED);
				const float3 tng_ws = TerrainNrmTangent(C_MAPDIR_TEXLAYER_MATID.x);
				const float3 btg_ws = cross(nrm_ws, tng_ws);
				OUT(X_NRM_WS) = nrm_ws.xyz;
				OUT(X_TNG_WS) = tng_ws.xyz;
				OUT(X_BTG_WS) = btg_ws.xyz;
				OUT(X_MSK) = float(abs(IN(I_MAT_ID).x - C_USERDATA_UVSCALE.x) < 0.5);
				OUT(X_NRM_DIR) = C_MAPDIR_TEXLAYER_MATID.x;
				OUT(X_DIF_MIP) = log2(C_DIF_SIZE);
				OUT(X_UV_COLOR) = uv_ws.xy * C_UV_COLOR_SCALE;

				#if defined(X_RGH_SIZE_1)
					OUT(X_RGH_SIZE_1) = log2(C_RGH_SIZE_1);
				#endif
				#if defined(X_SPC_SIZE_1)
					OUT(X_SPC_SIZE_1) = log2(C_SPC_SIZE_1);
				#endif
				
			}
		`

		PixelShader()=`
			#include <common.hlsl>
			#include <colorops.hlsl>

			void main(MAIN_PARAMS)
			{
				GBuffer G = GBufferInit();

				const float3 cam_dir_n_ws = normalize(IN(X_POS_WS).xyz - CAMERA_POS_WS.xyz);

				const float2 uv = TerrainRelief(T_DPT_0, C_DPT_SCALE.x, IN(X_UV_0), cam_dir_n_ws, C_MAPDIR_TEXLAYER_MATID.x, IN(X_NRM_WS), IN(X_TNG_WS), IN(X_BTG_WS), C_DPT_0_TEX_SIZE);

				//const float hgt_0 = 1.0 - SampleH1(T_DPT_0, S_2D_ANISO_OPT_16_WRAP, uv, 1.0, 0.0);
				const float3 dif_0 = SampleH3(T_DIF_0, S_2D_ANISO_OPT_16_WRAP, uv, 1.0, 0.0);
				const float3 spc_0 = SampleH3(T_SPC_0, S_2D_ANISO_OPT_8_WRAP, uv, 1.0, 0.0);
				const float rgh_0 = SampleH1(T_RGH_0, S_2D_ANISO_OPT_8_WRAP, uv, 1.0, 0.0);
				const float3 nrm_0 = SampleH3(T_NRM_0, S_2D_ANISO_OPT_16_WRAP, uv, 1.0, 0.0);

				//TODO: T_LAYER_MSK i T_DPT_1 wylecialy
				//const float hgt_1 = 1.0 - SampleH1(T_DPT_1, S_2D_ANISO_OPT_16_WRAP, uv, 1.0, 0.0);
				const float3 dif_1 = SampleH3(T_DIF_1, S_2D_ANISO_OPT_16_WRAP, IN(X_UV_COLOR), 1.0, 0.0);
				const float3 dif_0_avg = Sample(T_DIF_0, S_2D_ANISO_OPT_16_WRAP, uv, IN(X_DIF_MIP)).xyz;
				const float3 spc_1 = Sample(T_SPC_1, S_2D_ANISO_OPT_8_WRAP, IN(X_UV_COLOR)).xyz - Sample(T_SPC_1, S_2D_ANISO_OPT_16_WRAP, IN(X_UV_COLOR), IN(X_SPC_SIZE_1)).xyz;
				const float rgh_1 = Sample(T_RGH_1, S_2D_ANISO_OPT_8_WRAP, IN(X_UV_COLOR)).x - Sample(T_RGH_1, S_2D_ANISO_OPT_16_WRAP, IN(X_UV_COLOR), IN(X_RGH_SIZE_1)).x ;
				const float3 nrm_1 = SampleH3(T_NRM_1, S_2D_ANISO_OPT_16_WRAP, IN(X_UV_COLOR), 1.0, 0.0);
				
				// const float layer_msk = SampleH1(T_LAYER_MSK, S_2D_ANISO_OPT_16_WRAP, IN(X_UV_LAYER), 1.0, 0.0);
				//const float2 blend_factors = TerrainBlendFactors(hgt_0, hgt_1, layer_msk);

				//const float3 dif = TerrainBlend(dif_0, dif_1, blend_factors);
				//const float3 spc = TerrainBlend(spc_0, spc_1, blend_factors);
				//const float rgh =  TerrainBlend(rgh_0, rgh_1, blend_factors);
				//const float3 nrm = TerrainBlend(nrm_0, nrm_1, blend_factors);
				//const float hgt =  TerrainBlend(hgt_0, hgt_1, blend_factors);
				
				float3 DifHSB = RGB2HSB(dif_1);
				float3 detHSB = RGB2HSB(dif_0);
				float3 avgHSB = RGB2HSB(dif_0_avg);

				float3 difHSBN = saturate(DifHSB * float3(0.002777777777778, 0.01, 0.01) );
				float3 detHSBN = saturate(detHSB * float3(0.002777777777778, 0.01, 0.01) );
				float3 avgHSBN = saturate(avgHSB * float3(0.002777777777778, 0.01, 0.01) );

				float3 finalHSBN = detHSBN;
				float3 detdifHSBN = detHSBN - avgHSBN;
				
				detdifHSBN.y *= 1.0 - abs(detdifHSBN.z * 2.0);
				detdifHSBN.x *= abs(detdifHSBN.y);
				
				finalHSBN.x = frac(difHSBN.x + detdifHSBN.x);
				finalHSBN.y = saturate(difHSBN.y + detdifHSBN.y);
				finalHSBN.z = saturate(difHSBN.z + detdifHSBN.z);

				// G.dif = HSB2RGB(finalHSBN * float3(360.0, 100.0, 100.0)); 

				const float3 dif = HSB2RGB(finalHSBN * float3(360.0, 100.0, 100.0)); 
				const float3 spc = spc_0 ;
				const float rgh =  rgh_0 ;
				float3 nrm = nrm_0;
				nrm += nrm_1;
				// nrm.y = NrmZ(G.nrm.xz);
				
				nrm = normalize(nrm);

				float3 nrm_ts = nrm;
				float3 nrm_ws = (IN(X_NRM_DIR) < 0.0) ? nrm_ts.zyx * float3(1.0, 1.0, 1.0) : nrm_ts.xzy;
				nrm_ws =		(IN(X_NRM_DIR) > 0.0) ? nrm_ts.xyz * float3(1.0, 1.0, 1.0) : nrm_ws;
				
				nrm_ws *= 0.25;
				nrm_ws += normalize(IN(X_NRM_WS));

				G.dif = dif ;
				G.spc = spc + spc_1;
				G.rgh = rgh + rgh_1;
				G.nrm = nrm_ws;
				G.msk = IN(X_MSK);
				GBufferEncode(G PS_OUTPUT_STRUCT_PASS);
			}
		`
	}

	tech("std")
	{
		Cull(CCW);
		DepthFunc(LEQUAL, TRUE);
		BlendFunc(SRC_ALPHA, INV_SRC_ALPHA, ZERO, ONE);

		Texture2D("T_GRID", "terrain_grid_org.dds", SRGB);
		Sampler2D("S_GRID", ANISOTROPIC, MIRROR, MIRROR, ANISO_16);
		
		Texture2D("T_BRUSH", 9, SRGB);
		Sampler2D("S_BRUSH",LINEAR_NO_MIP, CLAMP, CLAMP);

		Texture2D("T_MAP", 10, NO_SRGB);
		Sampler2D("S_MAP", NO_FILTERING, CLAMP, CLAMP);

		Texture2D("T_GRD", "terrain_index_org.png", SRGB);
		Sampler2D("S_GRD", NO_FILTERING, CLAMP, CLAMP);

		// Debug code uses geometry shaders which isn't supported on PS4 and PS5
		extern int SHADER_PATH;
		if (IN.debug_on && ((SHADER_PATH & SM_PLAYSTATION) == 0))
		{
			Define("DEBUG_ON", 1);
			InterpolatorF4("X_POS");
			InterpolatorF3("X_BC_COORD");
		}
		
		InterpolatorF2("X_UV_GRID");
		InterpolatorF2("X_UV_BRUSH");
		InterpolatorF2("X_UV_IDX");
		InterpolatorF("X_MASK");
		InterpolatorF3("X_REMOVED_CLR");
		InterpolatorF("X_DENSITY");

		InputPosition("I_POS");
		// InputNormal("I_NRM_MS_REMOVED");
		Input("I_NRM_MS_REMOVED", IS_NORMAL, _FLOAT4);
		InputTexCoord0("I_XZ");
		InputColor("I_CLR");
		
		use O_RT0();

		extern float4 const_2 = CONST 2;
		Const("C_BRUSH_POS", const_2);

		extern float4 const_3 = CONST 3;
		Const("C_DENSITYMAP_POS", const_3);

		extern float4 const_4 = CONST 4;
		Const("C_BRUSH_SIZE", const_4);

		extern float4 const_7 = CONST 7;
		Const("C_HIGHLIGHT", const_7);

		extern float4 const_9 = CONST 9;
		Const("C_REMOVED_COLOR", const_9);

		extern float4 const_10 = CONST 10;
		Const("C_BRUSH_FORWARD", const_10);

		extern float4 const_11 = CONST 11;
		Const("C_INDEXMAP", const_11);
		
		extern float4 const_12 = CONST 12;
		Const("C_DENSITYMAP_SIZE", const_12);
		
		extern float4 const_13 = CONST 13;
		Const("C_DENSITY_PARAMS", const_13);

		extern float4 const_14 = CONST 14;
		Const("C_EDIT_OVERLAY_ALPHA", const_14);
	
		VertexShader()=`
			#include <common.hlsl>

			void main(MAIN_PARAMS)
			{
				#include <VSProlog.hlsl>
				float4 pos_ws = IN(I_POS);
				pos_ws += float4(0.0, 0.15, 0.0, 0.0);
				#if defined(DEBUG_ON)
					OUT(X_POS) = Mul44(pos_ws, VIEWPROJ_XFORM);
					OUT(X_BC_COORD) = float3(0, 0, 0);
				#else
					OUT_POS = Mul44(pos_ws, VIEWPROJ_XFORM);
				#endif

				OUT(X_DENSITY) = IN(I_CLR).w;

				OUT(X_UV_GRID) = pos_ws.xz;

				float2 brush_uv = (C_BRUSH_POS.xz - pos_ws.xz);
				float3 brush_xform;
				brush_xform.xy = normalize(C_BRUSH_FORWARD.xz);
				brush_xform.z = -brush_xform.x;
				OUT(X_UV_BRUSH).x = dot(brush_uv, brush_xform.yx);
				OUT(X_UV_BRUSH).y = dot(brush_uv, brush_xform.zy);
				OUT(X_UV_BRUSH) /= C_BRUSH_SIZE.xy;
				OUT(X_UV_BRUSH) += float2(0.5, 0.5);

				float2 idx_uv = (C_DENSITYMAP_POS.xz - pos_ws.xz);
				float3 idx_xform;
				idx_xform.xy = normalize(C_INDEXMAP.xz);
				idx_xform.z = -idx_xform.x;
				OUT(X_UV_IDX).x = dot(idx_uv, idx_xform.yx);
				OUT(X_UV_IDX).y = dot(idx_uv, idx_xform.zy);
				OUT(X_UV_IDX) /= C_DENSITYMAP_SIZE.xy;
				OUT(X_UV_IDX) += float2(0.5, 0.5);

				OUT(X_MASK) = IN(I_NRM_MS_REMOVED).w;
				OUT(X_REMOVED_CLR) = C_REMOVED_COLOR.xyz;
			}
		`

		if (IN.debug_on && ((SHADER_PATH & SM_PLAYSTATION) == 0))
		{
			GeometryShader() = `
				#include <common.hlsl>

				GEOMETRYSHADER_MAIN_BEGIN(3)
				{
					GS_PASS_THROUGH(0);                    
					OUT(X_BC_COORD) = float3(1, 0, 0);
					OUT_POS = IN(X_POS, 0);
					GS_EMIT_VERTEX;

					GS_PASS_THROUGH(1);
					OUT(X_BC_COORD) = float3(0, 1, 0);
					OUT_POS = IN(X_POS, 1);
					GS_EMIT_VERTEX;

					GS_PASS_THROUGH(2);                    
					OUT(X_BC_COORD) = float3(0, 0, 1);
					OUT_POS = IN(X_POS, 2);
					GS_EMIT_VERTEX;
					
					GS_END_PRIMITIVE;
				}
				GEOMETRYSHADER_MAIN_END
			`
		}

		PixelShader()=`
			#include <common.hlsl>
			#include <colorops.hlsl>

			float4 TerrainAlphaBlend(float4 src, float4 dst)
			{
				float4 out_col;
				out_col.a = src.a + (1.0 - src.a) * dst.a;
				if (out_col.a > 0.0)
				{
					out_col.rgb = (src.a * src.rgb + (1.0 - src.a) * dst.a * dst.rgb) / out_col.a;
				}
				else
				{
					out_col.rgb = float3(0.0, 0.0, 0.0);
				}

				return out_col;
			}

			void main(MAIN_PARAMS)
			{
				// Highlight
				OUT(O_RT0) = C_HIGHLIGHT;

				if (C_EDIT_OVERLAY_ALPHA.x > 0.0)
				{
					// Deleted vertices
					float del_value = IN(X_MASK);

					if (del_value > 0.0)
					{
					if (del_value > 0.9)
						del_value = 0.8;
					else
						del_value = 0.4;

						float4 removed_color = float4(IN(X_REMOVED_CLR), del_value);
						OUT(O_RT0) = TerrainAlphaBlend(removed_color, OUT(O_RT0));
					}

					// Brush setup
					float4 brush_color;
					brush_color.rgb = float3(0.0, 0.0, 0.0);	
					brush_color.a = Sample(T_BRUSH, S_BRUSH, IN(X_UV_BRUSH), 0.0).x;				

					// Density map
					const float use_dmap = C_DENSITY_PARAMS.x;
					if (use_dmap > 0.0)
					{
						const float use_index_map        = C_DENSITY_PARAMS.y;
						const float dmap_brush_intensity = C_DENSITY_PARAMS.z;
						const float dmap_opacity         = C_DENSITY_PARAMS.w;

						float dmap_idx = Sample(T_MAP, S_MAP, IN(X_UV_IDX), 0.0).z;
						float4 dmap_color = float4(0.0, 0.0, 0.0, dmap_opacity);

						if (use_index_map > 0.0)
						{
							dmap_color.rgb = Sample(T_GRD, S_GRD, float2(dmap_idx, 0.5), 0.0).bgr;
							brush_color.rgb = Sample(T_GRD, S_GRD, float2(dmap_brush_intensity, 0.5), 0.0).bgr;
						}
						else
						{
							dmap_color.rgb = float3(dmap_idx, dmap_idx, dmap_idx);
							brush_color.rgb = float3(dmap_brush_intensity, dmap_brush_intensity, dmap_brush_intensity);
						}
						
						OUT(O_RT0) = TerrainAlphaBlend(dmap_color, OUT(O_RT0));
					}

					// Density value
					float4 density_color = float4(0.0, 0.3, 1.0, IN(X_DENSITY));
					OUT(O_RT0) = TerrainAlphaBlend(density_color, OUT(O_RT0));

					// Brush painitng
					OUT(O_RT0) = TerrainAlphaBlend(brush_color, OUT(O_RT0));

					// Wireframe
					#if defined(DEBUG_ON)
						// Debug wireframe
						float3 bc_coords = IN(X_BC_COORD);
						float3 bc_deltas = fwidth(bc_coords);
						bc_coords = smoothstep(0.0, bc_deltas * 0.8, bc_coords);
						float min_bc = 1.0 - min(bc_coords.x, min(bc_coords.y, bc_coords.z));

						float4 wire_color = float4(1.0, 1.0, 1.0, min_bc * 0.5);

						OUT(O_RT0) = TerrainAlphaBlend(wire_color, OUT(O_RT0));
					#else
						// Preview wireframe
						float4 grid_color = Sample(T_GRID, S_GRID, IN(X_UV_GRID));
						grid_color.w *= grid_color.w;
						grid_color.xyz *= grid_color.w;

						OUT(O_RT0) = TerrainAlphaBlend(grid_color, OUT(O_RT0));
					#endif
				}
				else
				{
					discard;
				}

			}
		`
	}
	use depth_pass_terrain(culling = CCW); //shadow caster
}
