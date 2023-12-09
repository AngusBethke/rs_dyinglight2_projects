!BackupDirectory( s )
!LogFile( s )
!Action( s )
!ActionSpecData()
!attrib( s, s )
!attrib_custom( s, s )
!member()
!member_name( s )
!member_enum( i )
!member_enum_string( i, s )
!member_value()
//only first char of string is taken
!char_member_value( s )
//valid values: [0, 255]
!byte_member_value( n )
!int_member_value( n )
//values have context meaning - be careful
!objectref_member_value( n )
!float_member_value( f )
!string_member_value( s )
!bool_member_value( n )
!objectreflist_member_value( s )

BackupDirectory( "joblist/backups" )
$LOG_FILE(s, "joblists/logs/joblist_rs_cave.log")
LogFile( LOG_FILE )

//
// Map file
//
$MAP_FILE (s, "maps/rs_cave/rs_cave.map")

//
// Gather resources
//
$PACK_FILE (s, "maps/rs_cave/rs_cave.rscr")
$RLOG0 (s, "common.rlog")
$RLOG1 (s, "rs_cave_resources.scr")
$RLOG2 (s, "")
$RLOG3 (s, "")
$RLOG4 (s, "")
$RLOGEXCL0 (s, "weapons.rscr")
$RLOGEXCL1 (s, "common_meshes.rscr")
$RLOGEXCL2 (s, "engine.rscr")
$RLOGEXCL3 (s, "common_exclude.rscr")
$RLOGEXCL4 (s, "common_anims.rscr")
$RLOGEXCL5 (s, "")
$RLOGEXCL6 (s, "")
$RLOGEXCL7 (s, "")
$OVERRIDE_SCRIPT (s, "rs_cave_ovr.scr")

//auto-generated - DO NOT REMOVE THIS LINE

!include("jl_options.jlt")
!include("jl_configs.jlt")
!include("level.jlt")
