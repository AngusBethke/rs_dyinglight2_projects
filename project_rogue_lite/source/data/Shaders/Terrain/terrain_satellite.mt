import "EngineSetup.mth"
import "GBuffer.mth"
import "terrain.mth"

struct SParams
{
    runtime string tex_clr_0 = ""; ["display(Diffuse), editor(file)"]
    runtime string tex_nrm_0 = ""; ["display(Normal), editor(file), mask(*_nrm.dds)"]
    runtime string tex_spc_0 = ""; ["display(Specular), editor(file), mask(*_spc.dds)"]
	runtime string tex_rgh_0 = ""; ["display(Roughness), editor(file), mask(*_rgh.dds)"]
	runtime string tex_det_0 = ""; ["display(Detail), editor(file), mask(*_msk.png|*_msk.dds)"]
    runtime float uv_det  = 1.0; ["display(UV prop)"]

    runtime float2 v2_uv_origin  = [0.0, 0.0];
    runtime float2 v2_world_size_inv = [1.0, 1.0];

	bool debug_on = false;
} export;

sub template(SParams IN)
{
    platform("*", "none; instancing");

	variant("dbg", "IN.debug_on;");

	// Debug code uses geometry shaders which isn't supported on PS4 and PS5
	extern int SHADER_PATH;
	if (IN.debug_on && ((SHADER_PATH & SM_PLAYSTATION) == 0))
	{
		use debug_pass_terrain(satellite_mode = true);
	}

	tech("opq_last")
    {
        use StencilWrite(ref = STENCIL_STATIC);
		Cull(CW);
        DepthFunc(LEQUAL, TRUE);

        use I_POS_0();
        use I_NRM_0();

        use GBuffer(
            out_mv_on = false,
            out_tng_on = false,
            out_spc2_offset_on = false
        );

		use SAMPLER_2D_ANISO_OPT_16_WRAP();
		use SAMPLER_2D_ANISO_OPT_16_CLAMP();
		use SAMPLER_2D_ANISO_OPT_8_CLAMP();

        InterpolatorF2("X_UV_0");

        Texture2D("T_DIF_0", IN.tex_clr_0, NO_SRGB);
        Texture2D("T_NRM_0", IN.tex_nrm_0, NO_SRGB);
        Texture2D("T_SPC_0", IN.tex_spc_0, NO_SRGB);
		Texture2D("T_RGH_0", IN.tex_rgh_0, NO_SRGB);

        Const("C_TERRAIN_UV_ORIGIN", IN.v2_uv_origin);
        Const("C_TERRAIN_WORLD_SIZE_INV",   IN.v2_world_size_inv);

		extern float3 CAMERA_POS_PREV_WS;
		Const("C_CAMERA_POS_PREV_WS", CAMERA_POS_PREV_WS);

		if(IN.tex_det_0 !="")
		{
			Texture2D("T_DET_0", IN.tex_det_0, NO_SRGB);
			InterpolatorF2("X_UV_D");
			Const("C_UV_D",  IN.uv_det);
		}

        VertexShader()=`
			#include <common.hlsl>

			void main(MAIN_PARAMS)
			{
				#include <VSProlog.hlsl>

				float4 pos_ms = Decode_Pos(IN(I_POS_0));
				pos_ms.xyz *= TERRAIN_POSITION_UNPACK;

				float4 pos_ws = Mul_Pos(pos_ms, MODEL_XFORM_4x3);
				OUT_POS = Pos_Out_WS(pos_ws);
                
				float2 uv2_ws = pos_ws.xz;
				OUT(X_UV_0) = (uv2_ws * C_TERRAIN_WORLD_SIZE_INV + C_TERRAIN_UV_ORIGIN).xy;
				#if defined(X_UV_D)
					OUT(X_UV_D) = pos_ws.xz / C_UV_D;
				#endif					
			}
        `

		PixelShader()=`
			#include <common.hlsl>
			#include <gamma.hlsl>

			void main(MAIN_PARAMS)
			{
				GBuffer G = GBufferInit();
				//G.dif = float3( IN(X_UV_0).x, IN(X_UV_0).y,0);
				float3 dif = SampleH3(T_DIF_0, S_2D_ANISO_OPT_16_CLAMP, IN(X_UV_0), 1.0, 0.0);
				#if defined(X_UV_D)
					dif *= SampleH1(T_DET_0, S_2D_ANISO_OPT_16_WRAP, IN(X_UV_D), 1.0, 0.0) + 0.5;
					dif = saturate(dif);
				#endif
				G.dif = dif;
				G.nrm.xz = SampleH2(T_NRM_0, S_2D_ANISO_OPT_16_CLAMP, IN(X_UV_0), 1.0);
				G.nrm.y = NrmZ(G.nrm.xz);
				G.spc = SampleH3(T_SPC_0, S_2D_ANISO_OPT_8_CLAMP, IN(X_UV_0), 1.0, 0.0);
				G.rgh = SampleH1(T_RGH_0, S_2D_ANISO_OPT_8_CLAMP, IN(X_UV_0), 1.0, 0.0);

				GBufferEncode(G PS_OUTPUT_STRUCT_PASS);
			}
		`
	}

	use depth_pass_terrain(); //shadow caster
}
