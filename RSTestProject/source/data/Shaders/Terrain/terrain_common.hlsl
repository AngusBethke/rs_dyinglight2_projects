#if !defined(TERRAIN_INCLUDED)
#define TERRAIN_INCLUDED 1

#include <relief.hlsl>

float2 TerrainUVSwizzle(const float3 vec, const float swizzle)
{
    return swizzle < 0 ? vec.zy : swizzle > 0 ? vec.xy : vec.xz;
}

float3 TerrainNrmSwizzle(float3 vec, const float swizzle)
{	
	if(swizzle < 0)
	{	
		vec.xyz = -vec.xzy;
	}
	else if(swizzle > 0)
	{	
		vec.z = -vec.y;
	}
	else
	{	
		vec = vec.xzy;
	}
	return vec;  
}

float3 TerrainNrmTangent(const float swizzle)
{	
    return swizzle < 0 ? float3(0.0, 0.0, 1.0) : float3(1.0, 0.0, 0.0);
}

float3 TerrainReliefDirSwizzle(float3 dir, const float3 nrm, const float swizzle)
{
	if (swizzle < 0.0)
	{
		if ((nrm).x < 0.0)
		{
			dir.y *= -1.0;
		}
	}
	else if (swizzle > 0.0)
	{
		if ((nrm).z > 0.0)
		{
			dir.y *= -1.0;
		}
	}
	else
	{
		dir.y *= -1.0;
		if ((nrm).y < 0.0)
		{
			dir.z *= -1.0;
		}
	}
	return dir;
}

float2 TerrainRelief(Texture2D depth_texture_a,
					 const float depth_texture_a_scale,
					 const float2 uv,
					 const float3 cam_dir_ws,
					 const float swizzle,
					 const float3 normal,
					 const float3 tangent,
					 const float3 bitangent,
					 const float2 tex_size,
					 const bool low_quality = false)
{
	if (MipLodLevel(uv, tex_size) <= D_RELIEF_LOD_THRESHOLD)
	{
		const float3 w2t_xform[3] = {tangent, bitangent, normal};
		const float3 dir_ts = normalize(Mul33(cam_dir_ws, w2t_xform));
		const float3 dir = TerrainReliefDirSwizzle(dir_ts, normal, swizzle);
		if (low_quality)
		{
			return Relief(depth_texture_a,
			              uv,
						  dir,
						  depth_texture_a_scale,
						  D_RELIEF_LINEAR_STEPS - 7,
						  D_RELIEF_BINARY_STEPS);
		}
		else
		{
			return Relief(depth_texture_a,
			              uv,
						  dir,
						  depth_texture_a_scale);
		}
	}
	else
	{
		return uv;
	}
}

// Based on https://www.gamasutra.com/blogs/AndreyMishkinis/20130716/196339/Advanced_Terrain_Texture_Splatting.php
#define D_NORMALIZE_DEPTH 0.2
float2 TerrainBlendFactors(float a_height, float b_height, float blend)
{
	const float a_blend = 1.0 - blend;
	const float b_blend = blend;

	const float max_height = max(a_height + a_blend, b_height + b_blend) - D_NORMALIZE_DEPTH;

	const float blend_amount_a = max(a_height + a_blend - max_height, 0.0);
	const float blend_amount_b = max(b_height + b_blend - max_height, 0.0);

	const float blend_sum = 1.0 / (blend_amount_a + blend_amount_b);
	const float blend_factor_a = blend_amount_a * blend_sum;
	const float blend_factor_b = blend_amount_b * blend_sum;

	return float2(blend_factor_a, blend_factor_b);
}

float3 TerrainBlend(float3 a, float3 b, float2 blend_factors)
{
    return a * blend_factors.x + b * blend_factors.y;
}

float TerrainBlend1(float a, float b, float2 blend_factors)
{
    return a * blend_factors.x + b * blend_factors.y;
}

#endif // include guard
