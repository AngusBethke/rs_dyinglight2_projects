set sourceDirectory=%1
set masterDirectory=%2

rd /s /q %sourceDirectory%
mklink /d %sourceDirectory% %masterDirectory%