set sourceDirectory=%1
set masterDirectory=%2

:: Prefab directory
set masterPrefabDirectory = %masterDirectory% + "\Prefabs"
set sourcePrefabDirectory = %sourceDirectory% + "\Prefabs"

rd /s /q %sourcePrefabDirectory%
robocopy %masterPrefabDirectory% %sourcePrefabDirectory% /e

:: Brushes directory
set masterBrushesDirectory = %masterDirectory% + "\Brushes"
set sourceBrushesDirectory = %sourceDirectory% + "\Brushes"

rd /s /q %sourceBrushesDirectory%
robocopy %masterBrushesDirectory% %sourceBrushesDirectory% /e

:: Terrain directory
set masterTerrainsDirectory = %masterDirectory% + "\Textures\terrains"
set sourceTerrainsDirectory = %sourceDirectory% + "\Textures\terrains"

rd /s /q %sourceTerrainsDirectory%
robocopy %masterTerrainsDirectory% %sourceTerrainsDirectory% /e