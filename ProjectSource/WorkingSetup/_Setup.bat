set sourceDirectory=%1
set masterDirectory=%2

:: Prefab directory
set masterPrefabDirectory=%masterDirectory%\Prefabs
set sourcePrefabDirectory=%sourceDirectory%\Prefabs

rd /s /q %sourcePrefabDirectory%
mklink /d %sourcePrefabDirectory% %masterPrefabDirectory%

:: Brushes directory
set masterBrushesDirectory=%masterDirectory%\Brushes
set sourceBrushesDirectory=%sourceDirectory%\Brushes

rd /s /q %sourceBrushesDirectory%
mklink /d %sourceBrushesDirectory% %masterBrushesDirectory%

:: Terrain directory
set masterTerrainsDirectory=%masterDirectory%\Textures
set sourceTerrainsDirectory=%sourceDirectory%\Textures

rd /s /q %sourceTerrainsDirectory%
mklink /d %sourceTerrainsDirectory% %masterTerrainsDirectory%