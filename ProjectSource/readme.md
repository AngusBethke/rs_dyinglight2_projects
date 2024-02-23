# How to use, setup and teardown
## Before you start
Please, for the love of all that is good, BACKUP YOUR GD FILES!! before you use this.

Also to note: This process is still in a very raw form at the moment, and has basically no safety net... use at your own peril.

## Overview
There are two root files in the Working Setup, a "_Setup.bat" and a "_Teardown.bat". These files manage the setting up and tearing down of your working setup.

In essence, they facilitate the file system operations that allow you to use a shared prefabs folder. You will need to do the manual work of consolidating your files in a shared directory, mine is currently: "D:\SteamLibrary\steamapps\common\Dying Light 2\DevTools\projects\local\ProjectSource\Prefabs". This will be the "master" directory for your prefabs, and will essentially be the true data source.

## Setup
The setup process will remove the prefab directory in your project (this will delete files, so please refer to the "Before you start" section of this readme). Once this directory has been removed, the process will create a symbolic link between your master directory and your project directory. You will then be able to work in your project utilizing and saving prefabs as normal, and they will be saved to the master directory instead of locally.

In order to invoke this setup, you will need to create a .bat file that invokes the "_Setup.bat" file with the argument as the directory of your project. (See Intersection.Setup.bat as an example).

## Teardown
The teardown process will remove the symbolic link to the master prefab directory and then perform a full copy of that directory into your project folder. You will then be able to upload your project to mod.io with all of your latest prefabs.

In order to invoke this teardown, you will need to create a .bat file that invokes the "_Teardown.bat" file with the argument as the directory of your project. (See Intersection.Teardown.bat as an example).