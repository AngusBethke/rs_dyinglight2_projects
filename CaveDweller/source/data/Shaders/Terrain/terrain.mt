import "EngineSetup.mth"
import "GBuffer.mth"
import "terrain.mth"

struct SParams
{
	runtime string tex_clr_b_0 = ""; ["display(Diffuse), editor(file), mask(*_dif.dds|*_dif.png), category(Material 0/Base Textures)"]
	runtime string tex_nrm_b_0 = ""; ["display(Normal), editor(file), mask(*_nrm.dds|*_nrm.png), category(Material 0/Base Textures)"]
	runtime string tex_spc_b_0 = ""; ["display(Specular), editor(file), mask(*_spc.dds|*_spc.png), category(Material 0/Base Textures)"]
	runtime string tex_rgh_b_0 = ""; ["display(Roughness), editor(file), mask(*_rgh.dds|*_rgh.png), category(Material 0/Base Textures)"]
	runtime string tex_clr_a_0 = ""; ["display(Diffuse), editor(file), mask(*_dif.dds|*_dif.png), category(Material 0/Detail Textures)"]
	runtime string tex_nrm_a_0 = ""; ["display(Normal), editor(file), mask(*_nrm.dds|*_nrm.png), category(Material 0/Detail Textures)"]
	runtime string tex_spc_a_0 = ""; ["display(Specular), editor(file), mask(*_spc.dds|*_spc.png), category(Material 0/Detail Textures)"]
	runtime string tex_rgh_a_0 = ""; ["display(Roughness), editor(file), mask(*_rgh.dds|*_rgh.png), category(Material 0/Detail Textures)"]
	runtime string tex_dpt_a_0 = ""; ["display(Depth), editor(file), mask(*_dpt.dds|*_dpt.png), category(Material 0/Detail Textures)"]
	runtime float f_mapping_0 = 0.0; ["display(Side/Top/Front mapping), category(Material 0)"] // -1 - side, 0 - top, 1 - front
	runtime float mapping_multiplier_0 = 16.0; ["display(Mapping multiplier), min(0.0), max(100.0), step(1.0), category(Material 0)"]
	runtime float blend_scale_0 = 1.0; ["display(Blend scale), slider, min(0.0), max(5.0), step(0.01), category(Material 0)"]
	runtime float relief_a_scale_0 = 1.0; ["display(Relief scale), slider, min(0.0), max(1.0), step(0.01), category(Material 0)"]
	
	bool relief_enabled_0 = true; ["display(Enable relief), category(Material 0)"]
	bool relief_low_quality_0 = true; ["display(Low quality relief), category(Material 0)"]

	runtime string tex_clr_b_1 = ""; ["display(Diffuse), editor(file), mask(*_dif.dds|*_dif.png), category(Material 1/Base Textures)"]
	runtime string tex_nrm_b_1 = ""; ["display(Normal), editor(file), mask(*_nrm.dds|*_nrm.png), category(Material 1/Base Textures)"]
	runtime string tex_spc_b_1 = ""; ["display(Specular), editor(file), mask(*_spc.dds|*_spc.png), category(Material 1/Base Textures)"]
	runtime string tex_rgh_b_1 = ""; ["display(Roughness), editor(file), mask(*_rgh.dds|*_rgh.png), category(Material 1/Base Textures)"]
	runtime string tex_clr_a_1 = ""; ["display(Diffuse), editor(file), mask(*_dif.dds|*_dif.png), category(Material 1/Detail Textures)"]
	runtime string tex_nrm_a_1 = ""; ["display(Normal), editor(file), mask(*_nrm.dds|*_nrm.png), category(Material 1/Detail Textures)"]
	runtime string tex_spc_a_1 = ""; ["display(Specular), editor(file), mask(*_spc.dds|*_spc.png), category(Material 1/Detail Textures)"]
	runtime string tex_rgh_a_1 = ""; ["display(Roughness), editor(file), mask(*_rgh.dds|*_rgh.png), category(Material 1/Detail Textures)"]
	runtime string tex_dpt_a_1 = ""; ["display(Depth), editor(file), mask(*_dpt.dds|*_dpt.png), category(Material 1/Detail Textures)"]
	runtime float f_mapping_1 = 1.0; ["display(Side/Top/Front mapping), category(Material 1)"] // -1 - side, 1 - top, 1 - front
	runtime float mapping_multiplier_1 = 16.0; ["display(Mapping multiplier), min(0.0), max(100.0), step(1.0), category(Material 1)"]
	runtime float blend_scale_1 = 1.0; ["display(Blend scale), slider, min(0.0), max(5.0), step(0.01), category(Material 1)"]
	runtime float relief_a_scale_1 = 1.0; ["display(Relief scale), slider, min(0.0), max(1.0), step(0.01), category(Material 1)"]
	
	bool relief_enabled_1 = true; ["display(Enable relief), category(Material 1)"]
	bool relief_low_quality_1 = true; ["display(Low quality relief), category(Material 1)"]

	runtime string tex_clr_b_2 = ""; ["display(Diffuse), editor(file), mask(*_dif.dds|*_dif.png), category(Material 2/Base Textures)"]
	runtime string tex_nrm_b_2 = ""; ["display(Normal), editor(file), mask(*_nrm.dds|*_nrm.png), category(Material 2/Base Textures)"]
	runtime string tex_spc_b_2 = ""; ["display(Specular), editor(file), mask(*_spc.dds|*_spc.png), category(Material 2/Base Textures)"]
	runtime string tex_rgh_b_2 = ""; ["display(Roughness), editor(file), mask(*_rgh.dds|*_rgh.png), category(Material 2/Base Textures)"]
	runtime string tex_clr_a_2 = ""; ["display(Diffuse), editor(file), mask(*_dif.dds|*_dif.png), category(Material 2/Detail Textures)"]
	runtime string tex_nrm_a_2 = ""; ["display(Normal), editor(file), mask(*_nrm.dds|*_nrm.png), category(Material 2/Detail Textures)"]
	runtime string tex_spc_a_2 = ""; ["display(Specular), editor(file), mask(*_spc.dds|*_spc.png), category(Material 2/Detail Textures)"]
	runtime string tex_rgh_a_2 = ""; ["display(Roughness), editor(file), mask(*_rgh.dds|*_rgh.png), category(Material 2/Detail Textures)"]
	runtime string tex_dpt_a_2 = ""; ["display(Depth), editor(file), mask(*_dpt.dds|*_dpt.png), category(Material 2/Detail Textures)"]
	runtime float f_mapping_2 = 1.0; ["display(Side/Top/Front mapping), category(Material 2)"] // -1 - side, 1 - top, 1 - front
	runtime float mapping_multiplier_2 = 16.0; ["display(Mapping multiplier), min(0.0), max(100.0), step(1.0), category(Material 2)"]
	runtime float blend_scale_2 = 1.0; ["display(Blend scale), slider, min(0.0), max(5.0), step(0.01), category(Material 2)"]
	runtime float relief_a_scale_2 = 1.0; ["display(Relief scale), slider, min(0.0), max(1.0), step(0.01), category(Material 2)"]
	
	bool relief_enabled_2 = true; ["display(Enable relief), category(Material 2)"]
	bool relief_low_quality_2 = true; ["display(Low quality relief), category(Material 2)"]

	bool debug_on = false; ["display(Debug mode), category(Options)"]
	runtime float f_msk_1 = 0.0; ["display(Mask ID), category(Material 1)"]
	runtime float f_msk_2 = 0.0; ["display(Mask ID), category(Material 2)"]
} export;

sub template(SParams IN)
{
	platform("*", "none; instancing");
	variant("dbg", "IN.debug_on");

	// Debug code uses geometry shaders which isn't supported on PS4 and PS5
	extern int SHADER_PATH;
	if (IN.debug_on && ((SHADER_PATH & SM_PLAYSTATION) == 0))
	{
		use debug_pass_terrain(satellite_mode = false);
	}

	tech("opq_last")
	{
		Cull(CW);
		DepthFunc(LEQUAL, TRUE);
		StencilMarker();
		RayTracing();
		use StencilWrite(ref = STENCIL_STATIC);

		use I_POS_0();
		use I_NRM_0();

		use GBuffer(
			out_mv_on = false,
			out_tng_on = false,
			out_spc2_offset_on = false
		);

		use Terrain();

		float2 TEXTURE_UV_SIZE = [512.0, 512.0];
		float2 COLOR_UV_SIZE_0 = [512.0 / IN.mapping_multiplier_0, 512.0 / IN.mapping_multiplier_0];
		float2 COLOR_UV_SIZE_1 = [512.0 / IN.mapping_multiplier_1, 512.0 / IN.mapping_multiplier_1];
		float2 COLOR_UV_SIZE_2 = [512.0 / IN.mapping_multiplier_2, 512.0 / IN.mapping_multiplier_2];
		float2 LAYER_UV_SCALE = [1.0, 1.0] / [50.0, 50.0];

		use SAMPLER_2D_ANISO_OPT_16_WRAP();
		use SAMPLER_2D_ANISO_OPT_8_WRAP();
		use SAMPLER_2D_ANISO_OPT_4_WRAP();
		use SAMPLER_2D_LIN_MIP_WRAP();

		InterpolatorF3("X_CAM_DIR_WS");

		InterpolatorF3("X_NRM_WS");
		InterpolatorF2("X_UV_0");
		InterpolatorF3("X_TNG_WS_0");
		InterpolatorF3("X_BTG_WS_0");

		Texture2D("T_DIF_A_0", IN.tex_clr_a_0, NO_SRGB);
		Texture2D("T_NRM_A_0", IN.tex_nrm_a_0, NO_SRGB);
		Texture2D("T_SPC_A_0", IN.tex_spc_a_0, NO_SRGB);
		Texture2D("T_RGH_A_0", IN.tex_rgh_a_0, NO_SRGB);
		Texture2D("T_DPT_A_0", IN.tex_dpt_a_0, NO_SRGB);
		extern float4 TEXDIM_Size_T_DPT_A_0;
		Const("C_DPT_A_0_TEX_SIZE", TEXDIM_Size_T_DPT_A_0.xy);

		Define("D_LAYER0_TEXTURE_LAYER");
		InterpolatorF2("X_TEXTURE_LAYER_0_UV");
		
		Texture2D("T_DIF_B_0", IN.tex_clr_b_0, NO_SRGB);
		Texture2D("T_NRM_B_0", IN.tex_nrm_b_0, NO_SRGB);
		Texture2D("T_SPC_B_0", IN.tex_spc_b_0, NO_SRGB);
		Texture2D("T_RGH_B_0", IN.tex_rgh_b_0, NO_SRGB);
	
		extern float4 TEXDIM_Size_T_SPC_B_0;
		Const("C_B_SPC_SIZE_0", min(TEXDIM_Size_T_SPC_B_0.y, TEXDIM_Size_T_SPC_B_0.x));
		InterpolatorF3("X_B_SPC_AVG_0");
		
		extern float4 TEXDIM_Size_T_RGH_B_0;
		Const("C_B_RGH_SIZE_0", min(TEXDIM_Size_T_RGH_B_0.y, TEXDIM_Size_T_RGH_B_0.x));
		InterpolatorF("X_B_RGH_AVG_0");
		
		extern float4 TEXDIM_Size_T_DIF_B_0;
		Const("C_UV_COLOR_SCALE_0", COLOR_UV_SIZE_0 / TEXDIM_Size_T_DIF_B_0.xy);
		InterpolatorF2("X_UV_COLOR_0");

		Const("C_TEXTURE_LAYER_UV_SCALE", LAYER_UV_SCALE);
		Const("C_POSNRM_SWIZZLE_0", IN.f_mapping_0);

		extern float4 TEXDIM_Size_T_DIF_A_0;
		Const("C_UV_SCALE_0", TEXTURE_UV_SIZE / TEXDIM_Size_T_DIF_A_0.xy);
		Const("C_A_TEX_SIZE_0", min(TEXDIM_Size_T_DIF_A_0.y, TEXDIM_Size_T_DIF_A_0.x));
		InterpolatorF3("X_A_TEX_AVG_0");

		extern float3 CAMERA_POS_PREV_WS;
		Const("C_CAMERA_POS_PREV_WS", CAMERA_POS_PREV_WS);

		Const("C_BLEND_SCALE_0", IN.blend_scale_0) ;
		Const("C_RELIEF_A_SCALE_0", IN.relief_a_scale_0);
		
		if (IN.relief_enabled_0)
		{
			Define("D_RELIEF_ENABLED_0");
		}
		if (IN.relief_low_quality_0)
		{
			Define("D_RELIEF_LOW_QUALITY_0", 1);
		}
		else
		{
			Define("D_RELIEF_LOW_QUALITY_0", 0);
		}

		bool layer = (IN.tex_clr_a_1 != "") || (IN.tex_clr_a_2 != "");
		bool layer2 = (IN.tex_clr_a_2 != "");

		Define("D_MSK_THRESHOLD", 0.2);

		if (layer || layer2)
		{
			InterpolatorF4("X_MSK");
			Const("C_MSK", [IN.f_msk_1, IN.f_msk_2]);
		}

		if (layer)
		{
			Define("D_LAYER1");
			InterpolatorF2("X_UV_1");
			InterpolatorF3("X_TNG_WS_1");
			InterpolatorF3("X_BTG_WS_1");

			Texture2D("T_DIF_A_1", IN.tex_clr_a_1, NO_SRGB);
			Texture2D("T_NRM_A_1", IN.tex_nrm_a_1, NO_SRGB);
			Texture2D("T_SPC_A_1", IN.tex_spc_a_1, NO_SRGB);
			Texture2D("T_RGH_A_1", IN.tex_rgh_a_1, NO_SRGB);
			Texture2D("T_DPT_A_1", IN.tex_dpt_a_1, NO_SRGB);
			extern float4 TEXDIM_Size_T_DPT_A_1;
			Const("C_DPT_A_1_TEX_SIZE", TEXDIM_Size_T_DPT_A_1.xy);

			InterpolatorF2("X_TEXTURE_LAYER_1_UV");
			Texture2D("T_DIF_B_1", IN.tex_clr_b_1, NO_SRGB);
			Texture2D("T_NRM_B_1", IN.tex_nrm_b_1, NO_SRGB);
			Texture2D("T_SPC_B_1", IN.tex_spc_b_1, NO_SRGB);
			Texture2D("T_RGH_B_1", IN.tex_rgh_b_1, NO_SRGB);
			
			extern float4 TEXDIM_Size_T_SPC_B_1;
			Const("C_B_SPC_SIZE_1", min(TEXDIM_Size_T_SPC_B_1.y, TEXDIM_Size_T_SPC_B_1.x));
			InterpolatorF3("X_B_SPC_AVG_1");
			
			extern float4 TEXDIM_Size_T_RGH_B_1;
			Const("C_B_RGH_SIZE_1", min(TEXDIM_Size_T_RGH_B_1.y, TEXDIM_Size_T_RGH_B_1.x));
			InterpolatorF("X_B_RGH_AVG_1");
		
			Const("C_POSNRM_SWIZZLE_1", IN.f_mapping_1);

			extern float4 TEXDIM_Size_T_DIF_A_1;
			Const("C_UV_SCALE_1", TEXTURE_UV_SIZE / TEXDIM_Size_T_DIF_A_1.xy);
			Const("C_A_TEX_SIZE_1", min(TEXDIM_Size_T_DIF_A_1.y, TEXDIM_Size_T_DIF_A_1.x));
			InterpolatorF3("X_A_TEX_AVG_1");

			Const("C_BLEND_SCALE_1", IN.blend_scale_1);
			Const("C_RELIEF_A_SCALE_1", IN.relief_a_scale_1);
			
			extern float4 TEXDIM_Size_T_DIF_B_1;
			Const("C_UV_COLOR_SCALE_1", COLOR_UV_SIZE_1 / TEXDIM_Size_T_DIF_B_1.xy);
			InterpolatorF2("X_UV_COLOR_1");
	
			if (IN.relief_enabled_1)
			{
				Define("D_RELIEF_ENABLED_1");
			}
			if (IN.relief_low_quality_1)
			{
				Define("D_RELIEF_LOW_QUALITY_1", 1);
			}
			else
			{
				Define("D_RELIEF_LOW_QUALITY_1", 0);
			}
		}

		if (layer2)
		{
			Define("D_LAYER2");
			InterpolatorF2("X_UV_2");
			InterpolatorF3("X_TNG_WS_2");
			InterpolatorF3("X_BTG_WS_2");

			Texture2D("T_DIF_A_2", IN.tex_clr_a_2, NO_SRGB);
			Texture2D("T_NRM_A_2", IN.tex_nrm_a_2, NO_SRGB);
			Texture2D("T_SPC_A_2", IN.tex_spc_a_2, NO_SRGB);
			Texture2D("T_RGH_A_2", IN.tex_rgh_a_2, NO_SRGB);
			Texture2D("T_DPT_A_2", IN.tex_dpt_a_2, NO_SRGB);
			extern float4 TEXDIM_Size_T_DPT_A_2;
			Const("C_DPT_A_2_TEX_SIZE", TEXDIM_Size_T_DPT_A_2.xy);
			InterpolatorF2("X_TEXTURE_LAYER_2_UV");
			
			Texture2D("T_DIF_B_2", IN.tex_clr_b_2, NO_SRGB);
			Texture2D("T_NRM_B_2", IN.tex_nrm_b_2, NO_SRGB);
			Texture2D("T_SPC_B_2", IN.tex_spc_b_2, NO_SRGB);
			Texture2D("T_RGH_B_2", IN.tex_rgh_b_2, NO_SRGB);
			Const("C_POSNRM_SWIZZLE_2", IN.f_mapping_2);
			extern float4 TEXDIM_Size_T_DIF_A_2;
			Const("C_UV_SCALE_2", TEXTURE_UV_SIZE / TEXDIM_Size_T_DIF_A_2.xy);
			Const("C_BLEND_SCALE_2", IN.blend_scale_2);
			Const("C_RELIEF_A_SCALE_2", IN.relief_a_scale_2);
			extern float4 TEXDIM_Size_T_DIF_B_2;
			Const("C_UV_COLOR_SCALE_2", COLOR_UV_SIZE_2 / TEXDIM_Size_T_DIF_B_2.xy);
			Const("C_A_TEX_SIZE_2", min(TEXDIM_Size_T_DIF_A_2.y, TEXDIM_Size_T_DIF_A_2.x));
			InterpolatorF3("X_A_TEX_AVG_2");
			
			extern float4 TEXDIM_Size_T_SPC_B_2;
			Const("C_B_SPC_SIZE_2", min(TEXDIM_Size_T_SPC_B_2.y, TEXDIM_Size_T_SPC_B_2.x));
			InterpolatorF3("X_B_SPC_AVG_2");
			
			extern float4 TEXDIM_Size_T_RGH_B_2;
			Const("C_B_RGH_SIZE_2", min(TEXDIM_Size_T_RGH_B_2.y, TEXDIM_Size_T_RGH_B_2.x));
			InterpolatorF("X_B_RGH_AVG_2");
		
			InterpolatorF2("X_UV_COLOR_2");
		
			if (IN.relief_enabled_2)
			{
				Define("D_RELIEF_ENABLED_2");
			}
			if (IN.relief_low_quality_2)
			{
				Define("D_RELIEF_LOW_QUALITY_2", 1);
			}
			else
			{
				Define("D_RELIEF_LOW_QUALITY_2", 0);
			}
		}

		VertexShader()=`
			#include <common.hlsl>

			void main(MAIN_PARAMS)
			{
				#include <VSProlog.hlsl>

				// POS
				float4 pos_ms = Decode_Pos(IN(I_POS_0));
				pos_ms.xyz *= TERRAIN_POSITION_UNPACK;

				const float4 pos_ws = Mul_Pos(pos_ms, MODEL_XFORM_4x3);

				OUT(X_CAM_DIR_WS) = pos_ws.xyz - CAMERA_POS_WS.xyz;

				OUT_POS = Pos_Out_WS(pos_ws);

				// NRM
				float3 nrm_ms = IN(I_NRM_0);
				nrm_ms.y = NrmZ(nrm_ms.xz);
				const float3 nrm_ws = Mul33(nrm_ms, MODEL_XFORM_4x3);
				const float3 nrm_n_ws = normalize(nrm_ws);
				OUT(X_NRM_WS) = nrm_n_ws.xyz;

				// Tangent / Bitangent
				const float3 tng_ws_n_0 = TerrainNrmTangent(C_POSNRM_SWIZZLE_0);
				const float3 btg_ws_n_0 = cross(nrm_n_ws, tng_ws_n_0);
				OUT(X_TNG_WS_0) = tng_ws_n_0.xyz;
				OUT(X_BTG_WS_0) = btg_ws_n_0.xyz;

				#if defined(D_LAYER1)
					const float3 tng_ws_n_1 = TerrainNrmTangent(C_POSNRM_SWIZZLE_1);
					const float3 btg_ws_n_1 = cross(nrm_n_ws, tng_ws_n_1);
					OUT(X_TNG_WS_1) = tng_ws_n_1.xyz;
					OUT(X_BTG_WS_1) = btg_ws_n_1.xyz;
				#endif
				#if defined(D_LAYER2)
					const float3 tng_ws_n_2 = TerrainNrmTangent(C_POSNRM_SWIZZLE_2);
					const float3 btg_ws_n_2 = cross(nrm_n_ws, tng_ws_n_2);
					OUT(X_TNG_WS_2) = tng_ws_n_2.xyz;
					OUT(X_BTG_WS_2) = btg_ws_n_2.xyz;
				#endif

				// UVs
				const float3 uv3_ws = pos_ws.xyz * float3(1.0, -1.0, 1.0);
				const float2 uv_0 = TerrainUVSwizzle(uv3_ws, C_POSNRM_SWIZZLE_0);
				OUT(X_UV_0) = (uv_0.xy * C_UV_SCALE_0).xy;
				OUT(X_UV_COLOR_0) = uv_0 * C_UV_COLOR_SCALE_0;

				OUT(X_TEXTURE_LAYER_0_UV) = (uv_0 * C_TEXTURE_LAYER_UV_SCALE).xy;

				#if defined(D_LAYER1)
					const float2 uv_1 = TerrainUVSwizzle(uv3_ws, C_POSNRM_SWIZZLE_1);
					OUT(X_UV_1) = (uv_1.xy * C_UV_SCALE_1).xy;
					OUT(X_UV_COLOR_1) = uv_1 * C_UV_COLOR_SCALE_1;
					OUT(X_TEXTURE_LAYER_1_UV) = (uv_1 * C_TEXTURE_LAYER_UV_SCALE).xy;
					
				#endif
				#if defined(D_LAYER2)
					const float2 uv_2 = TerrainUVSwizzle(uv3_ws, C_POSNRM_SWIZZLE_2);
					OUT(X_UV_2) = uv_2 * C_UV_SCALE_2;
					OUT(X_UV_COLOR_2) = uv_2 * C_UV_COLOR_SCALE_2;
					OUT(X_TEXTURE_LAYER_2_UV) = uv_2 * C_TEXTURE_LAYER_UV_SCALE;
				#endif

				// MSK
				#if defined(D_LAYER1) || defined(D_LAYER2)
					float mask = IN(I_NRM_0).y * TERRAIN_MATERIAL_ID_UNPACK;
					OUT(X_MSK).xy = float2(lessThan(abs(mask.xx - C_MSK), 0.5.xx));
					OUT(X_MSK).zw = 1.0.xx - OUT(X_MSK).xy;
				#endif
				
				#if defined(X_A_TEX_AVG_0)
					OUT(X_A_TEX_AVG_0) = Sample(T_DIF_A_0, S_2D_LIN_MIP_WRAP, float2(0.5,0.5), log2(C_A_TEX_SIZE_0)).xyz;
				#endif
				#if defined(X_A_TEX_AVG_1)
					OUT(X_A_TEX_AVG_1) = Sample(T_DIF_A_1, S_2D_LIN_MIP_WRAP, float2(0.5,0.5), log2(C_A_TEX_SIZE_1)).xyz;
				#endif
				#if defined(X_A_TEX_AVG_2)
					OUT(X_A_TEX_AVG_2) = Sample(T_DIF_A_2, S_2D_LIN_MIP_WRAP, float2(0.5,0.5), log2(C_A_TEX_SIZE_2)).xyz;
				#endif
					
				#if defined(X_B_SPC_AVG_0)
					OUT(X_B_SPC_AVG_0) = Sample(T_SPC_B_0, S_2D_LIN_MIP_WRAP, float2(0.5,0.5), log2(C_B_SPC_SIZE_0)).xyz;
				#endif
				#if defined(X_B_SPC_AVG_1)
					OUT(X_B_SPC_AVG_1) = Sample(T_SPC_B_1, S_2D_LIN_MIP_WRAP, float2(0.5,0.5), log2(C_B_SPC_SIZE_1)).xyz;
				#endif
				#if defined(X_B_SPC_AVG_2)
					OUT(X_B_SPC_AVG_2) = Sample(T_SPC_B_2, S_2D_LIN_MIP_WRAP, float2(0.5,0.5), log2(C_B_SPC_SIZE_2)).xyz;
				#endif
				
				#if defined(X_B_RGH_AVG_0)
					OUT(X_B_RGH_AVG_0) = Sample(T_RGH_B_0, S_2D_LIN_MIP_WRAP, float2(0.5,0.5), log2(C_B_RGH_SIZE_0)).x;
				#endif
				#if defined(X_B_RGH_AVG_1)
					OUT(X_B_RGH_AVG_1) = Sample(T_RGH_B_1, S_2D_LIN_MIP_WRAP, float2(0.5,0.5), log2(C_B_RGH_SIZE_1)).x;
				#endif
				#if defined(X_B_RGH_AVG_2)
					OUT(X_B_RGH_AVG_2) = Sample(T_RGH_B_2, S_2D_LIN_MIP_WRAP, float2(0.5,0.5), log2(C_B_RGH_SIZE_2)).x;
				#endif
			}
		`

		PixelShader()=`
			#include <common.hlsl>
			#include <colorops.hlsl>
			#include <gamma.hlsl>

			float3 SampleTerrainNormals(Texture2D tex, float2 uv, float pos_nrm_swizzle)
			{
				float3 nrm = 0.0.xxx;
				nrm.xy = SampleH2(tex, S_2D_ANISO_OPT_16_WRAP, uv, 1.0);
				nrm.y = pos_nrm_swizzle != 0 ? -nrm.y : nrm.y;
				nrm = TerrainNrmSwizzle(nrm, pos_nrm_swizzle);
				return nrm;
			}
			
struct BlendedChannelsDet
{
	float3 dif;
	float3 avg;
	float3 clr;
	float3 nrm;
	float3 spc;
	float  rgh;
	float  hgt;
};

struct BlendChannelsDet
{
	float3 dif_a;
	float3 avg_a;
	float3 clr_a;
	float3 nrm_a;
	float3 spc_a;
	float  rgh_a;
	float  hgt_a;
	
	float3 dif_b;
	float3 avg_b;
	float3 clr_b;
	float3 nrm_b;
	float3 spc_b;
	float  rgh_b;
	float  hgt_b;
};

BlendedChannelsDet SampleBlendChannelsDet(Texture2D dif_a,
									 Texture2D nrm_a,
								     Texture2D spc_a,
								     Texture2D rgh_a,
								     Texture2D dpt_a,
								     Texture2D dif_b,
								     Texture2D nrm_b,
								     Texture2D spc_b,
								     Texture2D rgh_b,
									 const float3 dif_avg,
									 const float3 spc_avg,
									 const float rgh_avg,
								     const float2 uv_0,
								     const float2 uv_1,
								     const float nrm_swizzle)
{
	BlendedChannelsDet textures;
	textures.dif = SampleH3(dif_a, S_2D_ANISO_OPT_16_WRAP, uv_0, 1.0, 0.0);
	textures.clr = SampleH3(dif_b, S_2D_ANISO_OPT_16_WRAP, uv_1, 1.0, 0.0);
	textures.avg = dif_avg;
	textures.hgt = 1.0 - SampleH1(dpt_a, S_2D_ANISO_OPT_4_WRAP, uv_0, 1.0, 0.0);
	
	textures.nrm = SampleTerrainNormals(nrm_a, uv_0, nrm_swizzle);
	textures.nrm += SampleTerrainNormals(nrm_b, uv_1, nrm_swizzle);
	
	textures.spc = SampleH3(spc_a, S_2D_ANISO_OPT_8_WRAP, uv_0, 1.0, 0.0);
	textures.spc += SampleH3(spc_b, S_2D_ANISO_OPT_8_WRAP, uv_1, 1.0, 0.0) - spc_avg;
	
	textures.rgh = SampleH1(rgh_a, S_2D_ANISO_OPT_8_WRAP, uv_0, 1.0, 0.0);
	textures.rgh += SampleH1(rgh_b, S_2D_ANISO_OPT_8_WRAP, uv_1, 1.0, 0.0) - rgh_avg;
	
	return textures;	
}

			BlendedChannelsDet Blend(const BlendChannelsDet i, const float mask, const float2 blend_scale = 1.0.xx )
			{
				BlendedChannelsDet o;
				o.dif = i.dif_a;
				o.avg = i.avg_a;
				o.clr = i.clr_a;
				o.nrm = i.nrm_a;
				o.spc = i.spc_a;
				o.rgh = i.rgh_a;
				o.hgt = i.hgt_a;

				if (mask > D_MSK_THRESHOLD)
				{
					const float2 blend_factors = TerrainBlendFactors(i.hgt_a * blend_scale.x,
					                                                 i.hgt_b * blend_scale.y,
																	 mask);

					o.dif = TerrainBlend(i.dif_a, i.dif_b, blend_factors);
					o.avg = TerrainBlend(i.avg_a, i.avg_b, blend_factors);
					o.clr = TerrainBlend(i.clr_a, i.clr_b, blend_factors);
					o.spc = TerrainBlend(i.spc_a, i.spc_b, blend_factors);
					o.rgh = TerrainBlend1(i.rgh_a, i.rgh_b, blend_factors);
					o.nrm = TerrainBlend(i.nrm_a, i.nrm_b, blend_factors);
					o.hgt = TerrainBlend1(i.hgt_a, i.hgt_b, blend_factors);
				}

				return o;
			}

			BlendedChannelsDet Blend(const BlendedChannelsDet i_a, const BlendedChannelsDet i_b, const float mask, const float2 blend_scale)
			{
				BlendChannelsDet merged;
				merged.dif_a = i_a.dif;
				merged.avg_a = i_a.avg;
				merged.clr_a = i_a.clr;
				merged.nrm_a = i_a.nrm;
				merged.spc_a = i_a.spc;
				merged.rgh_a = i_a.rgh;
				merged.hgt_a = i_a.hgt;

				merged.dif_b = i_b.dif;
				merged.avg_b = i_b.avg;
				merged.clr_b = i_b.clr;
				merged.nrm_b = i_b.nrm;
				merged.spc_b = i_b.spc;
				merged.rgh_b = i_b.rgh;
				merged.hgt_b = i_b.hgt;

				return Blend(merged, mask, blend_scale);
			}

			#define TERRAIN_RELIEF(num) TerrainRelief(T_DPT_A_##num, C_RELIEF_A_SCALE_##num, IN(X_UV_##num), cam_dir_n_ws, C_POSNRM_SWIZZLE_##num, IN(X_NRM_WS), IN(X_TNG_WS_##num), IN(X_BTG_WS_##num), C_DPT_A_##num##_TEX_SIZE, D_RELIEF_LOW_QUALITY_##num)
			#define SAMPLE_BLEND_CHANNELS_DET(num) SampleBlendChannelsDet(T_DIF_A_##num, T_NRM_A_##num, T_SPC_A_##num, T_RGH_A_##num, T_DPT_A_##num, T_DIF_B_##num, T_NRM_B_##num, T_SPC_B_##num, T_RGH_B_##num, dif_avg_##num, spc_avg_##num, rgh_avg_##num, uv_0_##num, uv_1_##num, C_POSNRM_SWIZZLE_##num)

			void main(MAIN_PARAMS)
			{
				GBuffer G = GBufferInit();

				const float3 cam_dir_n_ws = normalize(IN(X_CAM_DIR_WS));
				#if defined(D_RELIEF_ENABLED_0)
					const float2 uv_0_0 = TERRAIN_RELIEF(0);
				#else
					const float2 uv_0_0 = IN(X_UV_0);
				#endif
				const float2 uv_1_0 = IN(X_UV_COLOR_0);

				float mip_0 = 0;
				#if defined(X_A_TEX_SIZE_0)
					mip_0 = IN(X_A_TEX_SIZE_0);
				#endif
				float mip_rgh_0 = 0;
				#if defined(X_B_RGH_SIZE_0)
					mip_rgh_0 = IN(X_B_RGH_SIZE_0);
				#endif
				
				float3 spc_avg_0 = IN(X_B_SPC_AVG_0);
				float3 dif_avg_0 = IN(X_A_TEX_AVG_0);
				float rgh_avg_0 = IN(X_B_RGH_AVG_0);
				
				const BlendedChannelsDet channels_0 = SAMPLE_BLEND_CHANNELS_DET(0);
				BlendedChannelsDet channels_out = channels_0;

				#if defined(D_LAYER1)
				
					#if defined(D_RELIEF_ENABLED_1)
						const float2 uv_0_1 = TERRAIN_RELIEF(1);
					#else
						const float2 uv_0_1 = IN(X_UV_1);
					#endif
					const float2 uv_1_1 = IN(X_UV_COLOR_1);
					
					float mip_1 = 0;

					#if defined(X_A_TEX_SIZE_1)
						mip_1 = IN(X_A_TEX_SIZE_1);
					#endif
					
					float mip_rgh_1 = 0;
					#if defined(X_B_RGH_SIZE_1)
						mip_rgh_1 = IN(X_B_RGH_SIZE_1);
					#endif
					
					float3 spc_avg_1 = IN(X_B_SPC_AVG_1);
					float3 dif_avg_1 = IN(X_A_TEX_AVG_1);
					float rgh_avg_1 = IN(X_B_RGH_AVG_1);
					
					const BlendedChannelsDet channels_1 = SAMPLE_BLEND_CHANNELS_DET(1);
				#endif

				#if defined(D_LAYER2)
					
					#if defined(D_RELIEF_ENABLED_2)
						const float2 uv_0_2 = TERRAIN_RELIEF(2);
					#else
						const float2 uv_0_2 = IN(X_UV_2);
					#endif
					const float2 uv_1_2 = IN(X_UV_COLOR_2);
					
					float mip_2 = 0;

					#if defined(X_A_TEX_SIZE_2)
						mip_2 = IN(X_A_TEX_SIZE_2);
					#endif
					
					float mip_rgh_2 = 0;
					#if defined(X_B_RGH_SIZE_2)
						mip_rgh_2 = IN(X_B_RGH_SIZE_2);
					#endif
					
					float3 spc_avg_2 = IN(X_B_SPC_AVG_2);
					float3 dif_avg_2 = IN(X_A_TEX_AVG_2);
					float rgh_avg_2 = IN(X_B_RGH_AVG_2);
				
					const BlendedChannelsDet channels_2 = SAMPLE_BLEND_CHANNELS_DET(2);
				#endif

				// Create mask

				#if defined(D_LAYER1) || defined(D_LAYER2)
					const float4 msks = (1.0.xxxx - IN(X_MSK) * IN(X_MSK)) - IN(X_MSK).zwxy;
					float4 msk_factors;
					msk_factors.xy = min(msks.xy, msks.zw);
					msk_factors.zw = IN(X_MSK).xy;
					// msk_factors = saturate(msk_factors * 2.0);
					msk_factors = saturate(msk_factors);

					#if defined(D_LAYER2)
						float2 msk = float2(channels_1.hgt, channels_2.hgt);
					#else
						float2 msk = float2(channels_1.hgt, 0.5);
					#endif

					msk = msk * 2.0 - 1.0;
					msk = saturate(msk * msk_factors.xy + msk_factors.zw);
				#endif

				#if defined(D_LAYER1)
					channels_out = Blend(channels_out, channels_1, msk.x, float2(C_BLEND_SCALE_0, C_BLEND_SCALE_1));
				#endif

				#if defined(D_LAYER2)
					channels_out = Blend(channels_out, channels_2, msk.y, float2(C_BLEND_SCALE_1, C_BLEND_SCALE_2));
				#endif
				
				float3 DifHSB = RGB2HSB(channels_out.clr);
				float3 detHSB = RGB2HSB(channels_out.dif);
				float3 avgHSB = RGB2HSB(channels_out.avg);

				float3 difHSBN = saturate(DifHSB * float3(0.002777777777778, 0.01, 0.01) );
				float3 detHSBN = saturate(detHSB * float3(0.002777777777778, 0.01, 0.01) );
				float3 avgHSBN = saturate(avgHSB * float3(0.002777777777778, 0.01, 0.01) );

				float3 finalHSBN = detHSBN;
				float3 detdifHSBN = detHSBN - avgHSBN;

				detdifHSBN.y *= 1.0 - abs(detdifHSBN.z * 2.0);
				detdifHSBN.x *= abs(detdifHSBN.y);

				finalHSBN.x = frac(difHSBN.x + detdifHSBN.x);
				finalHSBN.y = saturate(difHSBN.y + detdifHSBN.y);
				finalHSBN.z = saturate(difHSBN.z + detdifHSBN.z );

				G.dif = HSB2RGB(finalHSBN * float3(360.0, 100.0, 100.0)); 
				G.spc = channels_out.spc;
				G.rgh = channels_out.rgh;
				G.nrm = normalize(IN(X_NRM_WS));
				G.nrm.xz += channels_out.nrm.xz;
				G.nrm.y = NrmZ(G.nrm.xz);
				// G.nrm = normalize(G.nrm);

				GBufferEncode(G PS_OUTPUT_STRUCT_PASS);
				
			}
		`
	}

	use depth_pass_terrain(); //shadow caster
}
