var default_lookats =
{
    listen_peak: "(eyes|random)",
    speak_silence: "head",
    tracking_off: "tracking_off",
    tracking_on: "tracking_on",
    speaker_changed: "speaker_changed",
    //random: "head",
};

generator.config =
{
    player_gestures:
    {
        disapproval: [
            { name: "m_fpp_dialogue_disagree_normal_01", },
            { name: "m_fpp_dialogue_disagree_normal_02", strength: 0.3 },
            { name: "m_fpp_dialogue_disagree_normal_03", strength: 0.15 },
            { name: "m_fpp_dialogue_disagree_normal_04", strength: 0.2 },
            ],
        imperative: [
            { name: "m_fpp_dialogue_stand_pointing_short_n_01", strength: 0.2 },
            ],
        exclamatory: [
            { name: "m_fpp_dialogue_stand_greeting_short_01", strength: 0.4 },
            { name: "m_fpp_dialogue_agree_normal_03", strength: 0.15 },
            { name: "m_fpp_dialogue_agree_normal_04", strength: 0.2 },
            { name: "m_fpp_dialogue_agree_normal_05", strength: 0.15 },
            { name: "m_fpp_dialogue_stand_asking_medium_01", strength: 0.35 },
            { name: "m_fpp_dialogue_stand_disapproval_medium_01", strength: 0.6 },
            { name: "m_fpp_dialogue_stand_greeting_short_01", strength: 0.4 },
            { name: "m_fpp_dialogue_stand_pointing_short_n_01", strength: 0.1 },
            ],
        asking: [
            { name: "m_fpp_dialogue_ask_01", strength: 0.07 },
            { name: "m_fpp_dialogue_agree_normal_03", strength: 0.2 },
            { name: "m_fpp_dialogue_agree_normal_04", strength: 0.2 },
            { name: "m_fpp_dialogue_agree_normal_05", strength: 0.3 },
            { name: "m_fpp_dialogue_stand_asking_medium_01", strength: 0.35 },
            { name: "m_fpp_dialogue_stand_disapproval_medium_01", strength: 0.6 },
            { name: "m_fpp_dialogue_stand_greeting_short_01", strength: 0.4 },
            { name: "m_fpp_dialogue_stand_pointing_short_n_01", strength: 0.1 },
            ],
        normal: [
            { name: "m_fpp_dialogue_agree_normal_03", strength: 0.2 },
            { name: "m_fpp_dialogue_agree_normal_04", strength: 0.2 },
            { name: "m_fpp_dialogue_agree_normal_05", strength: 0.3 },
            { name: "m_fpp_dialogue_stand_asking_medium_01", strength: 0.35 },
            { name: "m_fpp_dialogue_stand_disapproval_medium_01", strength: 0.6 },
            { name: "m_fpp_dialogue_stand_greeting_short_01", strength: 0.4 },
            { name: "m_fpp_dialogue_stand_pointing_short_n_01", strength: 0.1 },
            ],
    },
    
    glances:
    [
        {
            name: "test",
            actions: [
                { time: 0.0, track: "Procedural", mode:"Direction", dir_x: 50, dir_y: 0 },
                { time: 0.1, track: "Eyes", mode:"Disabled" },
                { time: 0.1, track: "EyesBlink", mode:"Camera" },
                
                { time: 1.5, track: "Procedural", mode:"Disabled" },
                { time: 1.6, track: "Eyes", mode:"Disabled" },
            ]
        },
        {
            name: "tracking_off",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Disabled' },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Disabled', blend_time: 1.1, body_only_head: 1 },
            ]
        },
        {
            name: "tracking_on",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },
            ]
        },
        {
            name: "speaker_changed",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },
            ]
        },
        {
            name: "head 1",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 17, dir_y: 0 },
                { start: 0.20, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 25, dir_y: 0 },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Direction', dir_x: 12, dir_y: 0, blend_time: 1.1, body_only_head: 1 },
                { start: 1.15, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 1.24, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 1.30, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },

            ]
        },
        {
            name: "head 2",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 17, dir_y: 5 },
                { start: 0.20, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 25, dir_y: 10 },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Direction', dir_x: 12, dir_y: 0, blend_time: 1.1, body_only_head: 1 },
                { start: 1.15, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 1.24, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 1.30, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },
            ]
        },
        {
            name: "head 3",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 17, dir_y: -5 },
                { start: 0.20, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 25, dir_y: -10 },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Direction', dir_x: 12, dir_y: 0, blend_time: 1.1, body_only_head: 1 },
                { start: 1.15, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 1.24, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 1.30, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },
            ]
        },
        {
            name: "head 4",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -17, dir_y: 0 },
                { start: 0.20, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -25, dir_y: -6 },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Direction', dir_x: -8, dir_y: 0, blend_time: 1.1, body_only_head: 1 },
                { start: 1.15, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 1.24, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 1.30, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },

            ]
        },
        {
            name: "head 5",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -17, dir_y: 6 },
                { start: 0.20, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -25, dir_y: 10 },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Direction', dir_x: -8, dir_y: 2, blend_time: 1.1, body_only_head: 1 },
                { start: 1.15, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 1.24, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 1.30, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },
            ]
        },
        {
            name: "head 6",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -17, dir_y: -6 },
                { start: 0.20, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -25, dir_y: -10 },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Direction', dir_x: -8, dir_y: -2, blend_time: 1.1, body_only_head: 1 },
                { start: 1.15, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 1.24, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 1.30, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },
            ]
        },
        {
            name: "head 7",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 16 },
                { start: 0.20, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 19 },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Direction', dir_x: 0, dir_y: 2, blend_time: 1.1, body_only_head: 1 },
                { start: 1.15, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 1.24, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 1.30, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },

            ]
        },
        {
            name: "head 8",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 0.15, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: -10 },
                { start: 0.20, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: -15 },
                { start: 0.25, track_type: 'Procedural', lookat_mode: 'Direction', dir_x: 0, dir_y: -2, blend_time: 1.1, body_only_head: 1 },
                { start: 1.15, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
                { start: 1.24, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 1.30, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },
            ]
        },
        {
            name: "simple random lookat 1",
            actions: [
                { start: 0.00, track_type: 'Eyes', lookat_mode: 'Object', target_name: 'random' },
                { start: 0.10, track_type: 'Procedural', lookat_mode: 'Object', target_name: 'random', blend_time: 1.1, body_only_head: 1 },
                { start: 1.00, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 1.10, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },
            ]
        },
        {
            name: "simple random lookat 2",
            actions: [
                { start: 0.00, track_type: 'Eyes', lookat_mode: 'Object', target_name: 'random' },
                { start: 0.10, track_type: 'Procedural', lookat_mode: 'Object', target_name: 'random', blend_time: 1.1, body_only_head: 1 },
                { start: 2.00, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
                { start: 2.1, track_type: 'Procedural', lookat_mode: 'Object', target_name: '', blend_time: 1.1, body_only_head: 1 },
            ]
        },
        {
            name: "eyes 1",
            actions: [
                { start: 0.00, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 12, dir_y: 0 },
                { start: 0.28, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 17, dir_y: 0 },
         //       { start: 0.57, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 0 },
                { start: 0.57, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
            ]
        },
        {
            name: "eyes 2",
            actions: [
                { start: 0.00, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 12, dir_y: 5 },
                { start: 0.28, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 17, dir_y: 10 },
         //       { start: 0.57, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 0 },
                { start: 0.57, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
            ]
        },
        {
            name: "eyes 3",
            actions: [
                { start: 0.00, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 12, dir_y: -5 },
                { start: 0.28, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 17, dir_y: -10 },
         //       { start: 0.57, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 0 },
                { start: 0.57, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
            ]
        },
        {
            name: "eyes 4",
            actions: [
                { start: 0.00, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -12, dir_y: 0 },
                { start: 0.28, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -17, dir_y: 0 },
           //     { start: 0.57, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 0 },
                { start: 0.57, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
            ]
        },
        {
            name: "eyes 5",
            actions: [
                { start: 0.00, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -12, dir_y: 5 },
                { start: 0.28, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -17, dir_y: 10 },
        //        { start: 0.57, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 0 },
                { start: 0.57, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
            ]
        },
        {
            name: "eyes 6",
            actions: [
                { start: 0.00, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -12, dir_y: -5 },
                { start: 0.28, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: -17, dir_y: -10 },
         //       { start: 0.57, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 0 },
                { start: 0.57, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
            ]
        },
        {
            name: "eyes 7",
            actions: [
                { start: 0.00, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 17 },
                { start: 0.28, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 20 },
           //     { start: 0.57, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 0 },
                { start: 0.57, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
            ]
        },
        {
            name: "eyes 8",
            actions: [
                { start: 0.00, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: -17 },
                { start: 0.28, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: -20 },
           //     { start: 0.57, track_type: 'Eyes', lookat_mode: 'Direction', dir_x: 0, dir_y: 0 },
                { start: 0.57, track_type: 'Eyes', lookat_mode: 'Object', target_name: '' },
            ]
        },
        {
            name: "blink 1",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.2 },
            ]
        },
        {
            name: "blink 2",
            actions: [
                { start: 0.00, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 2 },
                { start: 0.38, track_type: 'EyesBlink', blink_mode: 'Single', blink_speed: 1.3 },
            ]
        },
    ],
    
    presets:
    {
        neutral:
        {
            start_bp:
            {
                m: "single_static_m_stand_idle_placeholder_01",
                f: "single_static_w_stand_trust_idle_01",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf",
                f: "w_npc_dialogue_stand_trust_01lf_idle_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_normal_idle_01lf_admiration_breaker_01",
           //         "m_npc_dialogue_stand_normal_idle_01lf_amazement_breaker_02",
                    "m_npc_dialogue_stand_normal_idle_01lf_anticipation_breaker_01",
                    "m_npc_dialogue_stand_normal_idle_01lf_boredom_breaker_01",
                    "m_npc_dialogue_stand_normal_idle_01lf_disgust_breaker_01",
            //        "m_npc_dialogue_stand_normal_idle_01lf_disgust_breaker_03",
             //       "m_npc_dialogue_stand_normal_idle_01lf_fear_breaker_01",
             //       "m_npc_dialogue_stand_normal_idle_01lf_trust_breaker_01",
                    "m_npc_dialogue_stand_normal_idle_01lf_interest_short_walk_return_e_01",			
                    "m_npc_dialogue_stand_normal_idle_01lf_interest_short_walk_return_n_01",			
                    "m_npc_dialogue_stand_normal_idle_01lf_interest_short_walk_return_w_01",			
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_01",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_02",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_03",	
          //          "m_npc_dialogue_stand_normal_idle_01lf_breaker_04",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_05",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_06",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_07",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_08",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_09",	
					
                ],
                
                f: [
                    "w_npc_dialogue_stand_normal_idle_01lf_annoy_breaker_01",
                    "w_npc_dialogue_stand_normal_idle_01lf_annoy_breaker_02",
                    "w_npc_dialogue_stand_normal_idle_01lf_trust_breaker_01",			
                    "w_npc_dialogue_stand_normal_idle_01lf_surprise_breaker_01",	
                    "w_npc_dialogue_stand_normal_idle_01lf_surprise_breaker_02",	
                    "w_npc_dialogue_stand_normal_idle_01lf_serenity_breaker_01",			
                    "w_npc_dialogue_stand_normal_idle_01lf_boredom_breaker_01",			
                    "w_npc_dialogue_stand_normal_idle_01lf_boredom_breaker_02",			
                    "w_npc_dialogue_stand_normal_idle_01lf_boredom_breaker_03 ",			
                    "w_npc_dialogue_stand_normal_idle_01lf_pensiveness_breaker_01",			
                    "w_npc_dialogue_stand_normal_idle_01lf_pensiveness_breaker_02",			
                ],
            },

            gestures:
            {
                m: [
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_short_03", strength: 50 },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_short_05", strength: 80 },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_short_06" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_long_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_long_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_medium_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_short_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_short_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_medium_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_medium_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_medium_03" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_short_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_short_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_short_03" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_medium_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_medium_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_medium_03" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_short_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_short_03" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_long_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_long_02", strength: 65 },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_medium_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_medium_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_medium_03" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_short_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_short_03" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_long_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_medium_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_medium_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_short_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_short_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_short_03" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_long_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_long_02", strength: 75 },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_medium_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_medium_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_short_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_short_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_long_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_medium_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_medium_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_short_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_short_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_short_03" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_long_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_long_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_medium_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_medium_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_short_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_short_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_long_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_medium_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_medium_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_short_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_short_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_short_04" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_long_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_medium_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_medium_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_medium_03", strength: 50 },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_short_01", strength: 55 },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_short_02", strength: 70 },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_long_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_long_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_medium_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_short_01" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_short_02" },
                        { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_short_03" },
                        { name: "m_npc_dialogue_stand_joy_01lrf_speak_disapproval_short_01", strength: 50 },		
                        { name: "m_npc_dialogue_stand_joy_01lrf_speak_disapproval_long_01", strength: 65 },		
                        { name: "m_npc_dialogue_stand_joy_01lrf_speak_declarative_medium_01", strength: 70 },		
                        { name: "m_npc_dialogue_stand_joy_01lrf_speak_asking_short_01", strength: 85 },		
                        { name: "m_npc_dialogue_stand_joy_01lrf_speak_asking_long_01", strength: 55 },		
                        { name: "m_npc_dialogue_stand_joy_01lrf_listen_imperative_short_01", strength: 55 },		
                        { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_imperative_medium_01", strength: 55 },		
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_approval_medium_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_approval_short_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_asking_long_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_asking_short_01" },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_declarative_long_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_declarative_medium_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_disapproval_long_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_disapproval_medium_01" },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_disapproval_short_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_long_01", strength: 70 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_medium_01", strength: 70 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_short_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_short_02", strength: 70 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_short_03" },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_short_04", strength: 50 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_imperative_medium_01", strength: 55 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_imperative_medium_02", strength: 65 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_listen_imperative_short_01" },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_approval_long_01", strength: 45 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_approval_medium_01", strength: 45 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_long_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_medium_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_medium_02", strength: 55 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_short_01" },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_short_02" },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_short_03", strength: 75 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_declarative_long_01" },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_declarative_short_01" },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_disapproval_long_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_disapproval_medium_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_disapproval_short_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_exclamatory_long_01", strength: 70 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_exclamatory_medium_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_exclamatory_short_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_imperative_long_01", strength: 85 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_imperative_medium_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_acceptance_01lf_speak_imperative_short_01" },
                        { name: "m_npc_dialogue_stand_loathing_01lf_listen_approval_short_01", strength: 50 },
                        { name: "m_npc_dialogue_stand_loathing_01lf_speak_approval_long_01", strength: 55 },	
                        { name: "m_npc_dialogue_stand_loathing_01lf_speak_approval_short_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_loathing_01lf_speak_disapproval_short_01", strength: 50 },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_approval_long_01" },
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_approval_medium_01" },
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_approval_short_01" },
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_asking_long_01" },
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_asking_medium_01" },
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_asking_short_01" },
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_declarative_long_01", strength: 75 },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_declarative_medium_01" },
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_disapproval_short_01", },		
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_disapproval_medium_01", },
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_disapproval_long_01", },			
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_exclamatory_long_01", },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_exclamatory_medium_01", },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_exclamatory_short_01", },			
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_imperative_short_01", },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_imperative_medium_01", },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_listen_imperative_long_01", },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_imperative_short_01", strength: 70 },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_imperative_medium_01", strength: 85 },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_imperative_long_01", strength: 75 },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_declarative_medium_01", strength: 90 },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_declarative_long_01", strength: 80 },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_approval_medium_01", strength: 75 },				
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_disapproval_short_01", },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_disapproval_medium_01", },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_disapproval_long_01", },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_declarative_short_01", },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_asking_short_01", },	
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_asking_long_01", },			
                        { name: "m_npc_dialogue_stand_trust_01lrf_speak_approval_short_01", },	
                        { name: "m_npc_dialogue_stand_admiration_01lf_listen_disapproval_short_01", },	
                        { name: "m_npc_dialogue_stand_admiration_01lf_listen_disapproval_medium_01", },	
                        { name: "m_npc_dialogue_stand_admiration_01lf_listen_disapproval_long_01", },	
                        { name: "m_npc_dialogue_stand_admiration_01lf_listen_declarative_short_01", },
                        { name: "m_npc_dialogue_stand_admiration_01lf_listen_declarative_medium_01", },
                        { name: "m_npc_dialogue_stand_admiration_01lf_listen_approval_medium_01", },
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_imperative_short_01", strength: 70 },
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_imperative_medium_01", strength: 70 },
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_imperative_long_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_exclamatory_short_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_exclamatory_medium_01", strength: 70 },		
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_exclamatory_long_01", strength: 70 },	
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_disapproval_short_01", strength: 75 },	
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_disapproval_medium_01", strength: 75 },	
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_declarative_medium_01", strength: 65 },	
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_approval_short_01", strength: 75 },	
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_approval_medium_01", strength: 75 },	
                        { name: "m_npc_dialogue_stand_admiration_01lf_speak_approval_long_01", strength: 75 },			
                        { name: "m_npc_dialogue_stand_interest_01lf_listen_disapproval_short_01", },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_long_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_long_02" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_medium_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_medium_02" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_short_02", strength: 75 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_asking_long_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_asking_medium_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_declarative_long_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_declarative_medium_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_declarative_short_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_disapproval_long_01", strength: 85 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_disapproval_medium_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_disapproval_short_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_long_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_medium_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_short_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_long_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_long_02" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_medium_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_medium_02", strength: 70 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_short_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_short_02", strength: 60 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_asking_long_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_asking_medium_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_asking_short_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_declarative_long_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_declarative_medium_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_declarative_short_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_disapproval_long_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_disapproval_medium_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_disapproval_short_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_long_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_medium_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_short_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_imperative_long_01", strength: 85 },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_imperative_medium_01" },
                        { name: "m_npc_dialogue_stand_apprehension_01lf_speak_imperative_short_01" },
                        { name: "m_npc_dialogue_stand_fear_01lrf_speak_approval_medium_01" },
                        { name: "m_npc_dialogue_stand_fear_01lrf_listen_exclamatory_short_01" },		
                        { name: "m_npc_dialogue_stand_fear_01lrf_listen_exclamatory_medium_02" },	
                        { name: "m_npc_dialogue_stand_fear_01lrf_listen_asking_short_01" },			
                        { name: "m_npc_dialogue_stand_sadness_01lrf_speak_exclamatory_medium_01" },	
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_approval_medium_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_asking_medium_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_asking_short_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_declarative_long_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_declarative_medium_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_declarative_short_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_disapproval_long_01", strength: 55 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_disapproval_medium_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_disapproval_short_01", strength: 45 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_exclamatory_long_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_exclamatory_medium_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_exclamatory_short_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_imperative_long_01", strength: 70 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_imperative_medium_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_listen_imperative_short_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_approval_long_01", strength: 40 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_approval_short_01", strength: 40 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_asking_medium_01", strength: 45 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_asking_medium_02", strength: 50 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_asking_short_01", strength: 70 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_declarative_medium_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_declarative_medium_02" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_declarative_short_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_long_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_long_02", strength: 50 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_medium_01", strength: 55 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_medium_02", strength: 60 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_short_01", strength: 85 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_short_02", strength: 60 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_exclamatory_medium_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_exclamatory_medium_02", strength: 55 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_exclamatory_short_01" },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_exclamatory_short_03", strength: 55 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_imperative_long_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_imperative_medium_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_distraction_01lf_speak_imperative_short_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_boredom_01lf_listen_approval_long_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_listen_approval_medium_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_listen_approval_short_01", strength: 70 },
                        { name: "m_npc_dialogue_stand_boredom_01lf_listen_disapproval_long_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_listen_disapproval_medium_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_listen_disapproval_short_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_approval_long_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_approval_medium_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_approval_short_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_asking_long_01", strength: 85 },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_asking_medium_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_asking_short_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_declarative_long_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_declarative_medium_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_declarative_short_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_disapproval_long_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_disapproval_medium_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_disapproval_short_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_exclamatory_medium_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_exclamatory_short_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_imperative_long_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_imperative_medium_01" },
                        { name: "m_npc_dialogue_stand_boredom_01lf_speak_imperative_short_01" },
                        { name: "m_npc_dialogue_stand_disgust_01lf_listen_disapproval_medium_01", strength: 60 },	
                        { name: "m_npc_dialogue_stand_annoy_01lf_listen_disapproval_long_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_listen_disapproval_medium_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_listen_disapproval_short_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_listen_exclamatory_long_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_annoy_01lf_listen_exclamatory_medium_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_annoy_01lf_listen_exclamatory_short_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_approval_long_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_approval_medium_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_asking_long_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_asking_medium_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_asking_short_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_declarative_medium_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_declarative_short_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_declarative_short_02" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_disapproval_long_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_disapproval_medium_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_exclamatory_medium_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_exclamatory_medium_02" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_exclamatory_short_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_imperative_long_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_imperative_medium_01" },
                        { name: "m_npc_dialogue_stand_annoy_01lf_speak_imperative_short_01", strength: 65 },	
                        { name: "m_npc_dialogue_stand_anger_01lrf_listen_approval_medium_01", strength: 50 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_listen_approval_short_01", strength: 70 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_listen_disapproval_medium_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_listen_disapproval_medium_02", strength: 60 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_listen_disapproval_short_01", strength: 55 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_listen_imperative_short_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_asking_long_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_asking_medium_01", strength: 65 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_asking_short_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_declarative_long_01", strength: 75 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_declarative_medium_01", strength: 75 },	
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_declarative_short_01", strength: 80 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_disapproval_short_01", strength: 70 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_exclamatory_medium_02", strength: 45 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_exclamatory_medium_03", strength: 45 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_imperative_long_01", strength: 55 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_imperative_medium_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_anger_01lrf_speak_imperative_short_01", strength: 50 },
                        { name: "m_npc_dialogue_stand_disgust_01lf_speak_declarative_long_01:90:" },
                        { name: "m_npc_dialogue_stand_disgust_01lf_speak_declarative_medium_01", strength: 90 },
                        { name: "m_npc_dialogue_stand_disgust_01lf_speak_disapproval_long_01" },
                        { name: "m_npc_dialogue_stand_disgust_01lf_speak_disapproval_medium_01" },
                        { name: "m_npc_dialogue_stand_disgust_01lf_speak_exclamatory_long_01", strength: 60 },	
                        { name: "m_npc_dialogue_stand_disgust_01lf_speak_exclamatory_medium_01", strength: 60 },
                        { name: "m_npc_dialogue_stand_disgust_01lf_speak_exclamatory_short_01", strength: 65 },	
                        { name: "m_npc_dialogue_stand_anticipation_01lf_speak_imperative_short_01", strength: 40 },		
                        { name: "m_npc_dialogue_stand_interest_01lf_speak_declarative_long_01", strength: 80 },		
                        { name: "m_npc_dialogue_stand_interest_01lf_speak_declarative_medium_01", strength: 75 },		
                        { name: "m_npc_dialogue_stand_interest_01lf_speak_declarative_short_01", strength: 90 },		
                        { name: "m_npc_dialogue_stand_interest_01lf_speak_exclamatory_short_01", strength: 99 },	
                    ],
                
                f: [
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_imperative_short_01" },		
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_imperative_medium_01" },	
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_short_01" },	
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_medium_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_disapproval_short_01" },	
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_disapproval_medium_01" },	
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_declarative_short_01", strength: 75 },	
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_declarative_medium_01" },			
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_asking_medium_01", strength: 75 },		
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_approval_short_01", strength: 50 },			
                        { name: "w_npc_dialogue_stand_serenity_01lrf_speak_approval_medium_01", strength: 50 },		
                        { name: "w_npc_dialogue_stand_serenity_01lrf_listen_imperative_short_01", strength: 70 },		
                        { name: "w_npc_dialogue_stand_serenity_01lrf_listen_imperative_medium_01" },		
                        { name: "w_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_short_01" },	
                        { name: "w_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_medium_01" },	
                        { name: "w_npc_dialogue_stand_serenity_01lrf_listen_disapproval_short_01" },		
                        { name: "w_npc_dialogue_stand_serenity_01lrf_listen_disapproval_medium_01" },		
                        { name: "w_npc_dialogue_stand_serenity_01lrf_listen_declarative_medium_01" },			
                        { name: "w_npc_dialogue_stand_serenity_01lrf_listen_asking_short_01" },					
                        { name: "w_npc_dialogue_stand_serenity_01lrf_listen_asking_medium_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_serenity_01lrf_listen_approval_short_01", strength: 60 },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_imperative_short_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_imperative_medium_01", strength: 80 },
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_imperative_long_01", strength: 70 },			
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_exclamatory_short_01", strength: 70 },		
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_exclamatory_medium_01", strength: 60 },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_exclamatory_long_01", strength: 40 },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_disapproval_short_01", strength: 80 },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_disapproval_medium_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_disapproval_long_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_declarative_short_01 ", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_declarative_medium_01", },
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_declarative_long_01", },		
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_asking_short_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_asking_medium_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_asking_long_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_approval_medium_01", strength: 55 },		
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_approval_short_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_trust_01lf_speak_approval_long_01", strength: 55 },	
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_imperative_short_01", strength: 50 },				
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_imperative_medium_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_imperative_long_01", },
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_exclamatory_medium_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_exclamatory_long_01", strength: 75 },
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_disapproval_short_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_disapproval_medium_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_disapproval_long_01", },
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_declarative_short_01", },			
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_declarative_medium_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_declarative_long_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_asking_short_01", },	
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_asking_medium_01", },
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_asking_long_01", },		
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_approval_short_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_approval_medium_01", strength: 85 },	
                        { name: "w_npc_dialogue_stand_trust_01lf_listen_approval_long_01", strength: 70 },				
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_imperative_short_01" },		
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_imperative_medium_01" },	
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_exclamatory_short_01", strength: 65 },	
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_exclamatory_medium_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_exclamatory_long_01", strength: 60 },
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_short_02" },
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_short_01" },	
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_medium_02", strength: 60 },		
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_medium_01", strength: 80 },			
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_long_02" },
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_declarative_short_01" },
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_declarative_medium_01" },
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_declarative_long_01" },
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_asking_short_01" },
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_asking_medium_01", strength: 75 },			
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_asking_long_01" },
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_approval_short_01", strength: 60 },		
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_approval_medium_01", strength: 70 },				
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_imperative_medium_01" },			
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_imperative_long_01", strength: 60 },		
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_short_01", strength: 70 },				
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_long_01" },	
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_disapproval_short_01" },			
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_disapproval_medium_01" },		
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_disapproval_long_01", strength: 60 },				
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_declarative_short_01" },	
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_declarative_long_01", strength: 67 },					
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_short_02" },	
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_short_01", strength: 60 },		
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_medium_02", strength: 60 },	
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_medium_01", strength: 60 },	
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_long_01", strength: 85 },	
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_approval_short_01", strength: 75 },		
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_approval_medium_01", strength: 65 },		
                        { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_approval_long_01", strength: 80 },	
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_exclamatory_medium_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_exclamatory_short_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_disapproval_short_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_disapproval_medium_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_disapproval_long_01" },		
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_declarative_short_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_declarative_medium_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_declarative_long_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_approval_short_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_approval_medium_01" },	
                        { name: "w_npc_dialogue_stand_sadness_01lrf_speak_approval_long_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_listen_disapproval_short_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_listen_disapproval_medium_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_listen_approval_short_01" },
                        { name: "w_npc_dialogue_stand_sadness_01lrf_listen_approval_medium_01" },			
                        { name: "w_npc_dialogue_stand_sadness_01lrf_listen_approval_long_01" },				
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_imperative_medium_01", strength: 80 },			
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_imperative_long_01", strength: 70 },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_short_01" },			
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_long_01", strength: 70 },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_disapproval_short_02" },
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_disapproval_short_01" },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_disapproval_medium_01", strength: 60 },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_disapproval_long_02" },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_declarative_short_01" },			
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_declarative_medium_01" },				
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_asking_medium_01" },			
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_approval_medium_01" },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_speak_approval_long_01" },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_listen_disapproval_short_01" },			
                        { name: "w_npc_dialogue_stand_apprehension_01lf_listen_disapproval_medium_01" },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_listen_disapproval_long_01", strength: 60 },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_listen_asking_short_01" },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_listen_asking_medium_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_apprehension_01lf_listen_approval_short_01" },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_listen_approval_medium_01" },		
                        { name: "w_npc_dialogue_stand_apprehension_01lf_listen_approval_long_01", strength: 60 },
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_imperative_short_01", strength: 80 },
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_imperative_medium_01", strength: 80 },
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_imperative_long_01", strength: 80 },
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_exclamatory_short_01", strength: 75 },			
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_exclamatory_long_01", strength: 75 },
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_short_02" },
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_short_01", strength: 75 },			
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_medium_02" },	
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_medium_01", strength: 60 },		
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_long_02", strength: 75 },		
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_long_01", strength: 75 },		
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_declarative_shot_01", strength: 75 },				
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_declarative_medium_01", strength: 75 },
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_declarative_long_01", strength: 65 },			
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_asking_short_01", strength: 65 },	
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_asking_medium_01", strength: 65 },		
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_approval_short_01", strength: 65 },	
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_approval_medium_01", strength: 65 },
                        { name: "w_npc_dialogue_stand_distraction_01lrf_speak_approval_long_01", strength: 75 },	
                        { name: "w_npc_dialogue_stand_distraction_01lrf_listen_exclamatory_medium_01", strength: 65 },	
                        { name: "w_npc_dialogue_stand_distraction_01lrf_listen_disapproval_short_01", strength: 85 },	
                        { name: "w_npc_dialogue_stand_distraction_01lrf_listen_disapproval_medium_01", strength: 75 },		
                        { name: "w_npc_dialogue_stand_distraction_01lrf_listen_disapproval_long_01", strength: 75 },			
                        { name: "w_npc_dialogue_stand_distraction_01lrf_listen_approval_short_01", strength: 65 },
                        { name: "w_npc_dialogue_stand_distraction_01lrf_listen_approval_long_01", strength: 65 },
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_imperative_short_01", strength: 75 },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_imperative_medium_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_imperative_long_01", strength: 75 },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_exclamatory_short_01", strength: 95 },		
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_exclamatory_medium_01", strength: 75 },			
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_exclamatory_long_01", strength: 55 },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_disapproval_short_01", strength: 75 },		
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_disapproval_medium_01", strength: 75 },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_disapproval_long_01", strength: 75 },	
                        { name: "w_npc_dialogue_stand_distraction_01lrf_listen_approval_long_01", strength: 65 },			
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_declarative_short_01" },
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_declarative_medium_02" },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_declarative_long_02", strength: 45 },			
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_asking_short_01" },
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_asking_medium_01", strength: 60 },			
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_approval_short_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_approval_medium_01", strength: 85 },		
                        { name: "w_npc_dialogue_stand_boredom_01lrf_speak_approval_long_01", strength: 90 },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_imperative_short_01", strength: 80 },			
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_imperative_medium_01", strength: 55 },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_imperative_long_01", strength: 55 },		
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_exclamatory_short_01", strength: 65 },				
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_disapproval_short_01" },
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_disapproval_medium_01" },
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_declarative_long_01", strength: 50 },				
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_asking_short_01" },		
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_asking_long_01", strength: 65 },		
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_approval_short_01", strength: 65 },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_approval_medium_01" },	
                        { name: "w_npc_dialogue_stand_boredom_01lrf_listen_approval_long_01", strength: 50 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_short_02", strength: 50 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_short_01", strength: 75 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_medium_02", strength: 75 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_medium_01", strength: 75 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_long_02", strength: 65 },	
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_long_01", strength: 60 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_exclamatory_short_01", strength: 60 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_exclamatory_medium_01", strength: 75 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_exclamatory_long_01", strength: 65 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_disapproval_short_01", strength: 95 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_disapproval_medium_01", strength: 80 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_disapproval_long_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_declarative_short_01", strength: 95 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_declarative_medium_01", strength: 70 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_declarative_long_01", strength: 95 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_asking_short_01", strength: 80 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_asking_medium_01", strength: 85 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_asking_long_01", strength: 80 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_approval_short_01", strength: 80 },		
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_approval_medium_01", strength: 65 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_speak_approval_long_01", strength: 65 },	
                        { name: "w_npc_dialogue_stand_surprise_01lf_listen_exclamatory_short_01", strength: 35 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_listen_exclamatory_medium_01", strength: 40 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_listen_disapproval_short_01", strength: 70 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_listen_declarative_short_01", strength: 95 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_listen_declarative_medium_01", strength: 95 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_listen_asking_short_01", strength: 60 },
                        { name: "w_npc_dialogue_stand_surprise_01lf_listen_approval_medium_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_surprise_01lf_listen_approval_long_01", strength: 70 },		
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_approval_long_01", strength: 65 },	
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_approval_medium_01", strength: 65 },	
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_approval_short_01" },
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_asking_long_01", strength: 60 },	
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_asking_medium_01", strength: 50 },
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_declarative_long_01", strength: 45 },
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_declarative_medium_01", strength: 45 },
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_declarative_short_01" },
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_disapproval_long_01", strength: 60 },
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_disapproval_medium_01", strength: 70 },
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_disapproval_short_01", strength: 50 },
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_exclamatory_long_01", strength: 50 },			
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_exclamatory_medium_01", strength: 50 },
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_exclamatory_short_01" },			
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_imperative_medium_01", strength: 50 },		
                        { name: "w_npc_dialogue_stand_annoy_01lrf_speak_imperative_short_01" },				
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_approval_long_01", strength: 60 },	
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_approval_medium_01", strength: 50 },		
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_asking_long_01", strength: 60 },		
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_asking_short_01", strength: 60 },	
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_disapproval_long_01", strength: 65 },	
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_disapproval_medium_01", strength: 60 },	
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_disapproval_short_01" },	
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_exclamatory_long_01", strength: 50 },				
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_exclamatory_medium_01", strength: 50 },		
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_exclamatory_short_01", strength: 70 },	
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_imperative_long_01", strength: 50 },			
                        { name: "w_npc_dialogue_stand_annoy_01lrf_listen_imperative_medium_01", strength: 50 },
                    ],
            },

            facials:
            [
                { sequence: [ "sh_npc_generic_interest_01_In", "sh_npc_generic_interest_01_Out" ] },
                { sequence: [ "sh_npc_generic_anticipation_01_In", "sh_npc_generic_anticipation_01_Out" ] },		
                { sequence: [ "sh_npc_generic_vigilance_01_In", "sh_npc_generic_vigilance_01_Out" ] },	
                { sequence: [ "sh_npc_generic_acceptance_01_In", "sh_npc_generic_acceptance_01_Out" ] },	
                { sequence: [ "sh_npc_generic_trust_01_In", "sh_npc_generic_trust_01_Out" ] },	
                { sequence: [ "sh_npc_generic_pensiveness_01_In", "sh_npc_generic_pensiveness_01_Out" ] },	
                { sequence: [ "sh_npc_generic_aprehension_01_In", "sh_npc_generic_aprehension_01_Out" ] },		
                { sequence: [ "npc_w_generic_tic_02" ] },	
                { sequence: [ "npc_w_generic_tic_03" ] },	
                { sequence: [ "npc_w_generic_tic_04" ] },	
                { sequence: [ "npc_w_generic_tic_05" ] },	
                { sequence: [ "npc_w_generic_tic_06" ] },	
                { sequence: [ "npc_w_generic_tic_07" ] },	
                { sequence: [ "npc_w_generic_tic_08" ] },	
                { sequence: [ "npc_w_generic_tic_09" ] },	
                { sequence: [ "npc_w_generic_tic_11" ] },	
                
            ],

            lookats: default_lookats,
        },

        annoyance:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_annoy_idle_01lf",
                f: "w_npc_dialogue_stand_annoy_idle_01lrf_01",
            },
            
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_annoy_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_annoy_idle_01lrf_to_stand_trust_idle_01lf_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_annoy_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_annoy_idle_01lrf_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_annoy_01lf_listen_declarative_long_01",
                    "m_npc_dialogue_stand_annoy_01lf_listen_asking_medium_01",
                    "m_npc_dialogue_stand_annoy_01lf_listen_approval_medium_01",
                    "m_npc_dialogue_stand_annoy_01lf_listen_approval_short_01",
                ],
                
                f: [
                    "w_npc_dialogue_stand_annoy_idle_01lrf_breaker_01",
                    "w_npc_dialogue_stand_annoy_idle_01lrf_breaker_02",
                    "w_npc_dialogue_stand_annoy_01lrf_listen_asking_long_01",
                    "w_npc_dialogue_stand_annoy_01lrf_listen_declarative_short_01",
                    "w_npc_dialogue_stand_annoy_01lrf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_annoy_01lrf_listen_exclamatory_long_01",
                    "w_npc_dialogue_stand_annoy_01lrf_listen_exclamatory_medium_01",
                    "w_npc_dialogue_stand_annoy_01lrf_listen_exclamatory_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_asking_short_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_declarative_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_exclamatory_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_listen_imperative_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_declarative_short_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_exclamatory_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_annoy_01lf_speak_imperative_long_01", strength: 100, mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_exclamatory_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_declarative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_exclamatory_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_speak_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_annoy_01lrf_listen_declarative_long_01", strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_annoy_01_In", "sh_npc_generic_annoy_01_Idle_Flat", "sh_npc_generic_annoy_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_annoy_01_Out", "sh_npc_generic_annoy_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },
        
        anger:
        {
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_anger_idle_01lrf_01",
                f: "w_npc_dialogue_stand_anger_01lrf_idle_01",
            },
            
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_anger_idle_01lrf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_anger_idle_01lrf_to_stand_trust_idle_01lf_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_anger_idle_01lrf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_anger_idle_01lrf_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_anger_01lrf_listen_declarative_medium_01",
                    "m_npc_dialogue_stand_anger_01lrf_listen_declarative_medium_02",
                    "m_npc_dialogue_stand_anger_01lrf_listen_declarative_medium_03",
                    "m_npc_dialogue_stand_anger_01lrf_listen_imperative_medium_01",
                ],
                
                f: [
                    "w_npc_dialogue_stand_anger_01lrf_breaker_01",
                    "w_npc_dialogue_stand_anger_01lrf_breaker_02",
                    "w_npc_dialogue_stand_anger_01lrf_breaker_03",
                    "w_npc_dialogue_stand_anger_01lrf_breaker_04",
                    "w_npc_dialogue_stand_anger_01lrf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_anger_01lrf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_anger_01lrf_listen_declarative_short_01",
                    "w_npc_dialogue_stand_anger_01lrf_listen_exclamatory_short_01",
                    "w_npc_dialogue_stand_anger_01lrf_listen_imperative_medium_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_asking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_asking_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_declarative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_declarative_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_listen_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_declarative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_exclamatory_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_exclamatory_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anger_01lrf_speak_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_declarative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_speak_exclamatory_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_declarative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_exclamatory_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anger_01lrf_listen_exclamatory_short_01", strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_anger_01_In", "sh_npc_generic_anger_01_Idle_Flat", "sh_npc_generic_anger_01_Out" ], strength: 100,
                }, 
            ],

            lookats: default_lookats,
        },

        rage:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_rage_idle_01lf_01",
                f: "w_npc_dialogue_stand_rage_01lrf_idle_01",
            },
            
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_rage_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_rage_idle_01lrf_to_stand_trust_idle_01lf_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_rage_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_rage_idle_01lrf_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_rage_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_rage_idle_01lf_breaker_02",
                    "m_npc_dialogue_stand_rage_idle_01lf_breaker_03",
                ],
                
                f: [
                    "w_npc_dialogue_stand_rage_01lrf_breaker_01",
                    "w_npc_dialogue_stand_rage_01lrf_breaker_02",
                    "w_npc_dialogue_stand_rage_01lrf_breaker_03",
                    "w_npc_dialogue_stand_rage_01lrf_listen_asking_long_01",
                    "w_npc_dialogue_stand_rage_01lrf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_rage_01lrf_listen_asking_short_01",
                    "w_npc_dialogue_stand_rage_01lrf_listen_exclamatory_long_01",
                    "w_npc_dialogue_stand_rage_01lrf_listen_exclamatory_medium_01",
                    "w_npc_dialogue_stand_rage_01lrf_listen_exclamatory_short_01",
                    "w_npc_dialogue_stand_rage_01lrf_speak_exclamatory_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_declarative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_declarative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_speak_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_rage_01lf_listen_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_declarative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_exclamatory_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_speak_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_declarative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_rage_01lrf_listen_exclamatory_long_01", strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_rage_01_In", "sh_npc_generic_rage_01_Idle_Flat", "sh_npc_generic_rage_01_Out" ], strength: 100,
                }, 
            ],

            lookats: default_lookats,
        },

        interest:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf",
                f: "w_npc_dialogue_stand_interest_idle_02lf_01",
            },
            
            transition_to_default:
            {
//                m: "nie_wymagane",
                f: "w_npc_dialogue_stand_interest_idle_02lf_to_stand_trust_idle_01lf_01",
            },
            
            transition_from_default:
            {
//                m: "nie_wymagane",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_interest_idle_02lf_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_normal_idle_01lf_admiration_breaker_01",
                    "m_npc_dialogue_stand_normal_idle_01lf_anticipation_breaker_01",
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_01",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_02",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_03",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_04",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_05",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_06",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_07",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_08",	
                    "m_npc_dialogue_stand_normal_idle_01lf_breaker_09",	
                ],
                
                f: [
                    "w_npc_dialogue_stand_interest_02lf_listen_declarative_short_01",
                    "w_npc_dialogue_stand_interest_02lf_listen_imperative_long_01",
                    "w_npc_dialogue_stand_interest_02lf_listen_imperative_medium_01",	
                    "w_npc_dialogue_stand_interest_02lf_listen_approval_short_01",	
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_declarative_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_declarative_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_exclamatory_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_listen_imperative_long_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_speak_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_speak_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_speak_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_speak_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_speak_declarative_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_speak_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_speak_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_speak_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_interest_01lf_speak_imperative_long_01", strength: 100, mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_declarative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_approval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_approval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_speak_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_declarative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_interest_02lf_listen_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                ],
            },


            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_interest_01_In", "sh_npc_generic_interest_01_Idle_Flat", "sh_npc_generic_interest_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_interest_01_Out", "sh_npc_generic_interest_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },
       
        anticipation:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_anticipation_idle_01lf_01",
                f: "w_npc_dialogue_stand_anticipation_01lf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_anticipation_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_anticipation_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_anticipation_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_anticipation_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_anticipation_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_anticipation_01lf_listen_exclamatory_long_01",
                    "m_npc_dialogue_stand_anticipation_01lf_listen_declarative_medium_01",
                    "m_npc_dialogue_stand_anticipation_01lf_listen_exclamatory_medium_01",
                ],
                f: [
                    "w_npc_dialogue_stand_anticipation_01lf_breaker_01",
                    "w_npc_dialogue_stand_anticipation_01lf_breaker_02",
                    "w_npc_dialogue_stand_anticipation_01lf_breaker_04",
                    "w_npc_dialogue_stand_anticipation_01lf_breaker_05",
                    "w_npc_dialogue_stand_anticipation_01lf_breaker_06",
                    "w_npc_dialogue_stand_anticipation_01lf_breaker_03",
                    "w_npc_dialogue_stand_anticipation_01lf_listen_asking_long_01",
                    "w_npc_dialogue_stand_anticipation_01lf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_anticipation_01lf_listen_asking_short_01",
                    "w_npc_dialogue_stand_anticipation_01lf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_anticipation_01lf_listen_declarative_short_01",
                    "w_npc_dialogue_stand_anticipation_01lf_listen_exclamatory_short_01",
                    "w_npc_dialogue_stand_anticipation_01lf_listen_imperative_long_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_anticipation_01lf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_asking_short_02",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_asking_short_03",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_asking_medium_02",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_speak_asking_long_02",          strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_anticipation_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_anticipation_01_In", "sh_npc_generic_anticipation_01_Idle_Flat", "sh_npc_generic_anticipation_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_anticipation_01_Out", "sh_npc_generic_anticipation_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },

        fear:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_fear_idle_01lrf_01",
                f: "w_npc_dialogue_stand_fear_01lf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_fear_idle_01lrf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_fear_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_fear_idle_01lrf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_fear_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_fear_idle_01lrf_breaker_01",
                    "m_npc_dialogue_stand_fear_01lrf_listen_exclamatory_medium_01",
                    "m_npc_dialogue_stand_fear_01lrf_listen_declarative_medium_01",
                    "m_npc_dialogue_stand_fear_01lrf_listen_declarative_medium_02",
                ],
                f: [
                    "w_npc_dialogue_stand_fear_01lf_breaker_01",
                    "w_npc_dialogue_stand_fear_01lf_breaker_02",
                    "w_npc_dialogue_stand_fear_01lf_listen_asking_long_01",
                    "w_npc_dialogue_stand_fear_01lf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_fear_01lf_listen_asking_short_01",
                    "w_npc_dialogue_stand_fear_01lf_listen_declarative_long_02",
                    "w_npc_dialogue_stand_fear_01lf_listen_declarative_medium_02",
                    "w_npc_dialogue_stand_fear_01lf_listen_declarative_short_02",
                    "w_npc_dialogue_stand_fear_01lf_listen_exclamatory_long_01",
                    "w_npc_dialogue_stand_fear_01lf_listen_exclamatory_medium_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_exclamatory_short_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_exclamatory_short_03",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_exclamatory_medium_02",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_disapproval_long_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_fear_01lrf_listen_declarative_medium_02",  strength: 100, track: "override", mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_disapproval_short_02",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_disapproval_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_disapproval_long_02",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_approval_short_02",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_approval_medium_02",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_approval_long_02",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_declarative_short_02",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_declarative_medium_02",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_declarative_long_02",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_fear_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_fear_01_In", "sh_npc_generic_fear_01_Idle_Flat", "sh_npc_generic_fear_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_fear_01_Out", "sh_npc_generic_fear_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },

        amazement:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_amazemen_idle_01lf_01",
                f: "w_npc_dialogue_stand_amazement_01lf_idle_01",
            },

            transition_to_default:
            {
//                m: "",
                f: "w_npc_dialogue_stand_amazement_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
//                m: "",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_amazement_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_amazemen_idle_01lf_breaker_02",
                    "m_npc_dialogue_stand_amazemen_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_amazemen_idle_01lf_breaker_03",
                    "m_npc_dialogue_stand_amazemen_idle_01lf_breaker_04",
                ],
                f: [
                    "w_npc_dialogue_stand_amazement_01lf_breaker_01",
                    "w_npc_dialogue_stand_amazement_01lf_breaker_02",
                    "w_npc_dialogue_stand_amazement_01lf_breaker_03",
                    "w_npc_dialogue_stand_amazement_01lf_breaker_05",
                    "w_npc_dialogue_stand_amazement_01lf_listen_declarative_short_01",
                    "w_npc_dialogue_stand_amazement_01lf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_amazement_01lf_listen_asking_long_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_amazement_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_declarative_short_02",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_declarative_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_declarative_long_02",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_amazement_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_amazement_01_In", "sh_npc_generic_amazement_01_Idle_Flat", "sh_npc_generic_amazement_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_amazement_01_Out", "sh_npc_generic_amazement_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },


        vigilance:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_vigilance_idle_01lf_01",
                //m: "m_npc_dialogue_stand_vigilance_idle_01lf_02",
                f: "w_npc_dialogue_stand_vigilance_01lf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_vigilance_idle_01lf_to_stand_normal_idle_01lf",
                f: "w_npc_dialogue_stand_vigilance_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_vigilance_idle_01lf",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_vigilance_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_vigilance_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_vigilance_01lf_listen_declarative_long_01",
                    "m_npc_dialogue_stand_vigilance_01lf_listen_declarative_medium_01",
                    "m_npc_dialogue_stand_vigilance_01lf_listen_exclamatory_short_01",
                    "m_npc_dialogue_stand_vigilance_01lf_listen_asking_long_01",
                    "m_npc_dialogue_stand_vigilance_01lf_listen_asking_medium_01",
                ],
                f: [
                    "w_npc_dialogue_stand_vigilance_01lf_breaker_02",
                    "w_npc_dialogue_stand_vigilance_01lf_breaker_01",
                    "w_npc_dialogue_stand_vigilance_01lf_breaker_03",
                    "w_npc_dialogue_stand_vigilance_01lf_breaker_04",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_asking_long_01",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_asking_short_01",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_declarative_long_02",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_declarative_medium_02",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_exclamatory_long_01",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_exclamatory_medium_01",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_exclamatory_short_01",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_imperative_long_01",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_imperative_medium_01",
                    "w_npc_dialogue_stand_vigilance_01lf_listen_imperative_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_disapproval_short_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_disapproval_short_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_disapproval_medium_02",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_listen_disapproval_long_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_disapproval_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_vigilance_01lf_speak_disapproval_long_02",     strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_declarative_short_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_declarative_medium_02",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_declarative_long_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_vigilance_01lf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_vigilance_01_In", "sh_npc_generic_vigilance_01_Idle_Flat", "sh_npc_generic_vigilance_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_vigilance_01_Out", "sh_npc_generic_vigilance_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },


        serenity:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_serenity_idle_01lrf_01",
                f: "w_npc_dialogue_stand_serenity_idle_01lrf_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_serenity_idle_01lrf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_serenity_idle_01lrf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_serenity_idle_01lrf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_serenity_idle_01lrf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_serenity_01lrf_listen_asking_long_02",
                    "m_npc_dialogue_stand_serenity_01lrf_listen_asking_long_02",
                    "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_long_01",
				],
                f: [
                    "w_npc_dialogue_stand_serenity_idle_01lrf_breaker_01",
                    "w_npc_dialogue_stand_serenity_01lrf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_serenity_01lrf_listen_declarative_short_01",
                    "w_npc_dialogue_stand_serenity_01lrf_listen_imperative_medium_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_short_02",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_short_03",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_short_04",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_medium_02",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_short_05",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_short_06",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_approval_medium_03",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_short_02",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_medium_02",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_long_02",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_short_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_short_03",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_medium_02",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_declarative_medium_03",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_short_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_short_03",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_medium_02",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_disapproval_medium_03",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_short_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_short_03",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_medium_02",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_medium_03",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_long_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_short_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_short_03",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_short_02",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_long_02",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_approval_medium_02",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_medium_02",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_short_02",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_asking_short_03",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_short_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_declarative_long_02",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_short_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_short_03",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_short_04",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_short_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_medium_03",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_short_02",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_short_03",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_serenity_01lrf_speak_imperative_long_02",      strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_serenity_01lrf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_serenity_01_In", "sh_npc_generic_serenity_01_Idle_Flat", "sh_npc_generic_serenity_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_serenity_01_Out", "sh_npc_generic_serenity_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },


        laugh:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf",
                f: "w_npc_dialogue_stand_trust_01lf_idle_01",
            },

            transition_to_default:
            {
      //          m: "bez",
     //           f: "bez",
            },

            transition_from_default:
            {
       //         m: "bez",
       //         f: "bez",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_normal_01lf_laugh_01",
                    "m_npc_dialogue_stand_normal_01lf_laugh_05",
                    "m_npc_dialogue_stand_normal_01lf_laugh_06",
                    "m_npc_dialogue_stand_normal_01lf_laugh_07",
                    "m_npc_dialogue_stand_normal_01lf_laugh_08",
                    "m_npc_dialogue_stand_normal_01lf_laugh_09",
                    "m_npc_dialogue_stand_normal_01lf_laugh_11",
                    "m_npc_dialogue_stand_normal_01lf_laugh_12",
                    "m_npc_dialogue_stand_normal_01lf_laugh_13",
                    "m_npc_dialogue_stand_normal_01lf_laugh_15",
                    "m_npc_dialogue_stand_normal_01lf_laugh_16",
                    "m_npc_dialogue_stand_normal_01lf_laugh_17",
                    "m_npc_dialogue_stand_normal_01lf_laugh_18",
                    "m_npc_dialogue_stand_normal_01lf_laugh_19",
                    "m_npc_dialogue_stand_normal_01lf_laugh_20",
                    "m_npc_dialogue_stand_normal_01lf_laugh_21",
				],
                f: [
                    "w_npc_dialogue_stand_trust_01lf_laugh_01",
                    "w_npc_dialogue_stand_trust_01lf_laugh_04",
                    "w_npc_dialogue_stand_trust_01lf_laugh_05",
                    "w_npc_dialogue_stand_trust_01lf_laugh_07",
                    "w_npc_dialogue_stand_trust_01lf_laugh_02",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_05",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_06",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_07",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_08",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_09",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_11",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_12",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_13",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_15",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_16",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_17",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_18",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_19",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_20",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_normal_01lf_laugh_21",    strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_trust_01lf_laugh_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_laugh_04",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_laugh_05",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_laugh_07",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_laugh_02",   strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_joy_01_In", "npc_m_generic_joy_01_idle_flat", "sh_npc_generic_joy_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_joy_01_Out", "sh_npc_generic_joy_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },


        joy:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_joy_idle_01lrf_01",
                //m: "m_npc_dialogue_stand_joy_idle_01lrf_02",
                f: "w_npc_dialogue_stand_joy_01lrf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_joy_idle_01lrf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_joy_idle_01lrf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_joy_idle_01lrf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_joy_idle_01lrf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_joy_01lrf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_joy_01lrf_breaker_02",
                    "m_npc_dialogue_stand_joy_01lrf_listen_exclamatory_short_01",
				],
                f: [
                    "w_npc_dialogue_stand_joy_01lrf_breaker_01",
                    "w_npc_dialogue_stand_joy_01lrf_breaker_02",
                    "w_npc_dialogue_stand_joy_01lrf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_joy_01lrf_listen_imperative_short_01",
                    "w_npc_dialogue_stand_joy_01lrf_listen_asking_long_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_joy_01lrf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_imperative_short_02",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_imperative_medium_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_imperative_long_02",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_joy_01lrf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_joy_01_In", "npc_m_generic_joy_01_idle_flat", "sh_npc_generic_joy_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_joy_01_Out", "sh_npc_generic_joy_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },

        ecstasy:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_ecstasy_idle_01lrf_01",
                f: "w_npc_dialogue_stand_ecstasy_01lrf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_ecstasy_01lrf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_ecstasy_idle_01lrf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_ecstasy_idle_01lrf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_ecstasy_idle_01lrf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_ecstasy_idle_01lrf_breaker_01",
                    "m_npc_dialogue_stand_ecstasy_01lrf_listen_declarative_long_01",
                    "m_npc_dialogue_stand_ecstasy_01lrf_listen_declarative_medium_01",
                ],
                f: [
                    "w_npc_dialogue_stand_ecstasy_01lrf_breaker_01",
                    "w_npc_dialogue_stand_ecstasy_01lrf_breaker_02",
                    "w_npc_dialogue_stand_ecstasy_01lrf_breaker_03",
                    "w_npc_dialogue_stand_ecstasy_01lrf_breaker_04",
                    "w_npc_dialogue_stand_ecstasy_01lrf_breaker_05",
                    "w_npc_dialogue_stand_ecstasy_01lrf_breaker_06",
                    "w_npc_dialogue_stand_ecstasy_01lrf_listen_asking_long_01",
                    "w_npc_dialogue_stand_ecstasy_01lrf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_ecstasy_01lrf_listen_asking_short_01",
                    "w_npc_dialogue_stand_ecstasy_01lrf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_ecstasy_01lrf_listen_imperative_long_01",
                    "w_npc_dialogue_stand_ecstasy_01lrf_listen_imperative_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_ecstasy_01lrf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_disapproval_short_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_disapproval_medium_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_disapproval_long_02",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_exclamatory_short_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_exclamatory_medium_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_exclamatory_long_02",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_exclamatory_short_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_exclamatory_medium_02",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_exclamatory_long_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_ecstasy_01lrf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_ecstasy_01_In", "sh_npc_generic_ecstasy_01_Idle_Flat", "sh_npc_generic_ecstasy_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_ecstasy_01_Out", "sh_npc_generic_ecstasy_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },

        acceptance:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_acceptance_idle_01lf_01",
                f: "w_npc_dialogue_stand_acceptance_01lf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_acceptance_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_acceptance_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_acceptance_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_acceptance_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_medium_01",
                    "m_npc_dialogue_stand_acceptance_01lf_listen_imperative_medium_01",

				],
                f: [
                    "w_npc_dialogue_stand_acceptance_01lf_breaker_05",
                    "w_npc_dialogue_stand_acceptance_01lf_breaker_02",
                    "w_npc_dialogue_stand_acceptance_01lf_breaker_03",
                    "w_npc_dialogue_stand_acceptance_01lf_breaker_04",
                    "w_npc_dialogue_stand_acceptance_01lf_breaker_01",
                    "w_npc_dialogue_stand_acceptance_01lf_listen_approval_long_01",
                    "w_npc_dialogue_stand_acceptance_01lf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_acceptance_01lf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_acceptance_01lf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_long_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_short_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_short_03",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_short_04",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_listen_imperative_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_short_02",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_short_03",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_asking_medium_02",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_acceptance_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_acceptance_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_acceptance_01_In", "sh_npc_generic_acceptance_01_Idle_Flat", "sh_npc_generic_acceptance_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_acceptance_01_Out", "sh_npc_generic_acceptance_01_In" ], strength: 100 },	
                    ]
                }, 
            ],
            
            lookats: default_lookats,
        },
			

        trust:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_trust_idle_01lrf_01",
                f: "w_npc_dialogue_stand_trust_01lf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_trust_idle_01lrf_to_stand_normal_idle_01lf_01",
                f: "",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_trust_idle_01lrf_01",
                f: "",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_trust_idle_01lrf_breaker_01",
                    "m_npc_dialogue_stand_trust_idle_01lrf_breaker_02",
                    "m_npc_dialogue_stand_trust_idle_01lrf_breaker_03",
                    "m_npc_dialogue_stand_trust_01lrf_listen_declarative_short_01",
                    "m_npc_dialogue_stand_trust_01lrf_listen_exclamatory_short_01",
                    "m_npc_dialogue_stand_trust_01lrf_listen_exclamatory_medium_01",
                    "m_npc_dialogue_stand_trust_01lrf_listen_imperative_short_01",
                ],
                f: [
                    "w_npc_dialogue_stand_trust_01lf_listen_asking_short_01",
                    "w_npc_dialogue_stand_trust_01lf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_trust_01lf_listen_asking_long_01",
                    "w_npc_dialogue_stand_trust_01lf_breaker_01",
                    "w_npc_dialogue_stand_trust_01lf_breaker_02",
                    "w_npc_dialogue_stand_trust_01lf_listen_exclamatory_medium_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_trust_01lrf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_trust_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_trust_01_In", "sh_npc_generic_trust_01_Idle_Flat", "sh_npc_generic_trust_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_trust_01_Out", "sh_npc_generic_trust_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },


        admiration:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_admiration_idle_01lf_01",
                f: "w_npc_dialogue_stand_admiration_01lrf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_admiration_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_admiration_idle_01lrf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_admiration_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_admiration_idle_01lrf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_admiration_idle_01lf_breaker_02",
                    "m_npc_dialogue_stand_admiration_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_admiration_01lf_listen_declarative_medium_01",
                    "m_npc_dialogue_stand_admiration_01lf_listen_declarative_long_01",
                    "m_npc_dialogue_stand_admiration_01lf_listen_imperative_short_01",
                    "m_npc_dialogue_stand_admiration_01lf_listen_imperative_medium_01",
                    "m_npc_dialogue_stand_admiration_01lf_listen_imperative_long_01",
                ],
                f: [
                    "w_npc_dialogue_stand_admiration_01lrf_idle_breaker_01",
                    "w_npc_dialogue_stand_admiration_01lrf_idle_breaker_02",
                    "w_npc_dialogue_stand_admiration_01lrf_idle_breaker_03",
                    "w_npc_dialogue_stand_admiration_01lrf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_admiration_01lrf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_admiration_01lrf_listen_exclamatory_medium_01",
                    "w_npc_dialogue_stand_admiration_01lrf_listen_imperative_long_01",
                    "w_npc_dialogue_stand_admiration_01lrf_listen_imperative_medium_01",
                    "w_npc_dialogue_stand_admiration_01lrf_listen_imperative_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_admiration_01lf_listen_asking_01_medium_01",    strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_disapproval_short_02",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_admiration_01lrf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_admiration_01_In", "sh_npc_generic_admiration_01_Idle_Flat", "sh_npc_generic_admiration_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_admiration_01_Out", "sh_npc_generic_admiration_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },
			

        apprehension:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_apprehension_idle_01lf_01",
                f: "w_npc_dialogue_stand_apprehension_01lf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_apprehension_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_apprehension_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_apprehension_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_apprehension_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_apprehension_01lf_listen_declarative_short_01",
                    "m_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_medium_01",
                    "m_npc_dialogue_stand_apprehension_01lf_listen_asking_medium_01",
				],
                f: [
                    "w_npc_dialogue_stand_apprehension_01lf_breaker_01",
                    "w_npc_dialogue_stand_apprehension_01lf_breaker_02",
                    "w_npc_dialogue_stand_apprehension_01lf_breaker_03",
                    "w_npc_dialogue_stand_apprehension_01lf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_apprehension_01lf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_apprehension_01lf_listen_declarative_short_01",
                    "w_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_long_01",
                    "w_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_medium_01",
                    "w_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_short_01",
                    "w_npc_dialogue_stand_apprehension_01lf_listen_imperative_medium_01",
                    "w_npc_dialogue_stand_apprehension_01lf_listen_imperative_long_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_short_02",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_medium_02",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_approval_long_02",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_short_02",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_medium_02",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_long_02",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_apprehension_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_disapproval_short_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_disapproval_medium_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_disapproval_long_02",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_apprehension_01lf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_aprehension_01_In", "sh_npc_generic_aprehension_01_Idle_Flat", "sh_npc_generic_aprehension_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_aprehension_01_Out", "sh_npc_generic_aprehension_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },
			


        terror:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_terror_idle_01lf_01",
                f: "w_npc_dialogue_stand_terror_01lf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_terror_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_terror_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_terror_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_terror_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_terror_idle_01lf_breaker_02",
                    "m_npc_dialogue_stand_terror_idle_01lf_breaker_03",
                    "m_npc_dialogue_stand_terror_idle_01lf_breaker_04",
                    "m_npc_dialogue_stand_terror_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_terror_idle_01lf_breaker_05",
                    "m_npc_dialogue_stand_terror_01lf_listen_exclamatory_medium_02",
                    "m_npc_dialogue_stand_terror_01lf_listen_exclamatory_medium_01",
                ],
                f: [
                    "w_npc_dialogue_stand_terror_01lf_idle_breaker_01",
                    "w_npc_dialogue_stand_terror_01lf_idle_breaker_02",
                    "w_npc_dialogue_stand_terror_01lf_idle_breaker_03",
                    "w_npc_dialogue_stand_terror_01lf_listen_asking_long_01",
                    "w_npc_dialogue_stand_terror_01lf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_terror_01lf_listen_asking_medium_02",
                    "w_npc_dialogue_stand_terror_01lf_listen_asking_short_01",
                    "w_npc_dialogue_stand_terror_01lf_listen_asking_short_02",
                    "w_npc_dialogue_stand_terror_01lf_listen_asking_short_03",
                    "w_npc_dialogue_stand_terror_01lf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_terror_01lf_listen_declarative_short_01",
                    "w_npc_dialogue_stand_terror_01lf_listen_imperative_long_01",
                    "w_npc_dialogue_stand_terror_01lf_listen_imperative_long_02",
                    "w_npc_dialogue_stand_terror_01lf_listen_imperative_short_01",
                    "w_npc_dialogue_stand_terror_01lf_listen_imperative_short_02",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_disapproval_medium_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_listen_exclamatory_medium_02",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_imperative_medium_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_terror_01lf_speak_declarative_short_02",    strength: 100, track: "override", mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_approval_short_02",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_approval_medium_02",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_disapproval_medium_02",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_disapproval_short_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_exclamatory_short_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_imperative_short_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_imperative_long_02",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_asking_medium_02",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_asking_short_03",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_listen_asking_short_02",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_declarative_short_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_disapproval_short_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_terror_01lf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_terror_01_In", "sh_npc_generic_terror_01_Idle", "sh_npc_generic_terror_01_Out" ], strength: 100,
                }, 
            ],

            lookats: default_lookats,
        },


        distraction:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_distraction_idle_01lf_01",
                f: "w_npc_dialogue_stand_distraction_01lrf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_distraction_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_distraction_idle_01lrf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_distraction_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_distraction_idle_01lrf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_distraction_01lf_listen_declarative_long_01",
                    "m_npc_dialogue_stand_distraction_01lf_listen_declarative_medium_01",
                    "m_npc_dialogue_stand_distraction_01lf_listen_exclamatory_medium_01",
                    "m_npc_dialogue_stand_distraction_01lf_listen_exclamatory_long_01",
                    "m_npc_dialogue_stand_distraction_01lf_listen_imperative_short_01",
				],
                f: [
                    "w_npc_dialogue_stand_distraction_01lrf_breaker_01",
                    "w_npc_dialogue_stand_distraction_01lrf_breaker_02",
                    "w_npc_dialogue_stand_distraction_01lrf_breaker_03",
                    "w_npc_dialogue_stand_distraction_01lrf_breaker_04",
                    "w_npc_dialogue_stand_distraction_01lrf_breaker_05",
                    "w_npc_dialogue_stand_distraction_01lrf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_distraction_01lrf_listen_asking_short_01",
                    "w_npc_dialogue_stand_distraction_01lrf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_distraction_01lrf_listen_exclamatory_medium_01",
                    "w_npc_dialogue_stand_distraction_01lrf_listen_imperative_long_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_asking_medium_02",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_declarative_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_short_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_disapproval_long_02",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_exclamatory_short_03",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_exclamatory_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_distraction_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_short_02",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_disapproval_long_02",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_declarative_shot_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_distraction_01lrf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_distraction_01_In", "sh_npc_generic_distraction_01_Idle_Flat", "sh_npc_generic_distraction_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_distraction_01_Out", "sh_npc_generic_distraction_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },
			

        surprise:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf",
                f: "w_npc_dialogue_stand_surprise_01lf_idle_01",
            },

            transition_to_default:
            {
                m: "",
                f: "w_npc_dialogue_stand_surprise_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_surprise_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_surprise_01lf_listen_asking_short_01",
                    "m_npc_dialogue_stand_surprise_01lf_listen_exclamatory_short_01",
				],
                f: [
                    "w_npc_dialogue_stand_surprise_01lf_breaker_01",
                    "w_npc_dialogue_stand_surprise_01lf_breaker_02",
                    "w_npc_dialogue_stand_surprise_01lf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_surprise_01lf_listen_exclamatory_short_01",
                    "w_npc_dialogue_stand_surprise_01lf_listen_imperative_long_01",
                    "w_npc_dialogue_stand_surprise_01lf_listen_imperative_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_imperative_long_02",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_exclamatory_short_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_declarative_short_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_declarative_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_declarative_long_02",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_surprise_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_exclamatory_medium_02",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_long_02",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_short_02",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_imperative_medium_02",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_surprise_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_surprise_01_In", "sh_npc_generic_surprise_01_Idle_Flat", "sh_npc_generic_surprise_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_surprise_01_Out", "sh_npc_generic_surprise_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },
			

        pensiveness:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_pensiveness_idle_01lf_01",
                f: "w_npc_dialogue_stand_pensiveness_01lf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_pensiveness_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_pensiveness_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_pensiveness_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_pensiveness_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_pensiveness_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_pensiveness_01lf_listen_declarative_medium_01",
                    "m_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_medium_01",
                    "m_npc_dialogue_stand_pensiveness_01lf_listen_imperative_short_01",
                    "m_npc_dialogue_stand_pensiveness_01lf_listen_asking_medium_01",
                    "m_npc_dialogue_stand_pensiveness_01lf_listen_asking_short_01",
                ],
                f: [
                    "w_npc_dialogue_stand_pensiveness_01lf_breaker_01",
                    "w_npc_dialogue_stand_pensiveness_01lf_breaker_02",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_long_01",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_long_02",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_medium_02",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_short_01",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_short_02",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_declarative_short_01",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_medium_01",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_short_01",
                    "w_npc_dialogue_stand_pensiveness_01lf_listen_imperative_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_medium_02",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_asking_medium_02",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_declarative_medium_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_pensiveness_01lf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_short_02",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_medium_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_disapproval_long_02",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_short_02",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_medium_02",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_listen_asking_long_02",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_pensiveness_01lf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_pensiveness_01_In", "sh_npc_generic_pensiveness_01_Idle_Flat", "sh_npc_generic_pensiveness_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_pensiveness_01_Out", "sh_npc_generic_pensiveness_01_In" ], strength: 100 },	
                    ]
                },
            ],

            lookats: default_lookats,
        },

        sadness:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_sadness_idle_01lrf_01",
                f: "w_npc_dialogue_stand_sadness_01lrf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_sadness_idle_01lrf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_sadness_idle_01lrf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_sadness_idle_01lrf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_sadness_idle_01lrf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_sadness_idle_01lrf_breaker_02",
                    "m_npc_dialogue_stand_sadness_idle_01lrf_breaker_01",
                    "m_npc_dialogue_stand_sadness_01lrf_listen_declarative_short_01",
                    "m_npc_dialogue_stand_sadness_01lrf_listen_declarative_short_02",
                    "m_npc_dialogue_stand_sadness_01lrf_listen_disapproval_medium_02",
                ],
                f: [
                    "w_npc_dialogue_stand_sadness_01lrf_breaker_01",
                    "w_npc_dialogue_stand_sadness_01lrf_breaker_02",
                    "w_npc_dialogue_stand_sadness_01lrf_listen_asking_long_01",
                    "w_npc_dialogue_stand_sadness_01lrf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_sadness_01lrf_listen_asking_short_01",
                    "w_npc_dialogue_stand_sadness_01lrf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_sadness_01lrf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_sadness_01lrf_listen_exclamatory_long_01",
                    "w_npc_dialogue_stand_sadness_01lrf_listen_exclamatory_medium_01",
                    "w_npc_dialogue_stand_sadness_01lrf_listen_exclamatory_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_asking_medium_02",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_declarative_short_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_disapproval_medium_02",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_imperative_short_02",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_asking_medium_02",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_disapproval_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_sadness_01lrf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_sadness_01lrf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_sadness_01_In", "sh_npc_generic_sadness_01_Idle_Flat", "sh_npc_generic_sadness_01_Out" ], strength: 100,
                }, 
            ],

            lookats: default_lookats,
        },
			

        grief:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_grief_idle_01lf_01",
                //m: "m_npc_dialogue_stand_grief_idle_01lf_02",
                f: "w_npc_dialogue_stand_grief_01lrf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_grief_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_grief_idle_01lrf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_grief_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_grief_idle_01lrf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_grief_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_grief_idle_01lf_breaker_02",
                    "m_npc_dialogue_stand_grief_01lf_listen_declarative_short_01",
                    "m_npc_dialogue_stand_grief_01lf_listen_asking_long_01",
                    "m_npc_dialogue_stand_grief_01lf_listen_asking_medium_01",
                ],
                f: [
                    "w_npc_dialogue_stand_grief_01lrf_breaker_06",
                    "w_npc_dialogue_stand_grief_01lrf_breaker_01",
                    "w_npc_dialogue_stand_grief_01lrf_breaker_02",
                    "w_npc_dialogue_stand_grief_01lrf_breaker_03",
                    "w_npc_dialogue_stand_grief_01lrf_breaker_05",
                    "w_npc_dialogue_stand_grief_01lrf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_grief_01lrf_listen_asking_medium_02",
                    "w_npc_dialogue_stand_grief_01lrf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_grief_01lrf_listen_exclamatory_medium_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_grief_01lf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_grief_01lrf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_speak_exclamatory_medium_02",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_speak_asking_medium_02",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_grief_01lrf_listen_asking_medium_02",       strength: 100, track: "override", mask: "FullBody" },
                ],
            },

			
            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_grief_01_In", "sh_npc_generic_grief_01_Idle_Flat", "sh_npc_generic_grief_01_Out" ], strength: 100,
                }, 
            ],

            lookats: default_lookats,
        },
			

        boredom:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_boredom_idle_01lf_01",
                f: "w_npc_dialogue_stand_boredom_idle_01lrf_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_boredom_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_boredom_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_boredom_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_boredom_idle_01lrf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_boredom_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_boredom_idle_01lf_breaker_02",
                ],
                f: [
                    "w_npc_dialogue_stand_boredom_idle_01lrf_breaker_02",
                    "w_npc_dialogue_stand_boredom_idle_01lrf_breaker_03",
                    "w_npc_dialogue_stand_boredom_idle_01lrf_breaker_04",
                    "w_npc_dialogue_stand_boredom_idle_01lrf_breaker_05",
                    "w_npc_dialogue_stand_boredom_idle_01lrf_breaker_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_asking_long_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_asking_short_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_exclamatory_long_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_exclamatory_medium_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_exclamatory_short_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_imperative_long_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_imperative_medium_01",
                    "w_npc_dialogue_stand_boredom_01lrf_listen_imperative_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_boredom_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_boredom_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_declarative_medium_02",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_declarative_long_02",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_boredom_01lrf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_interest_01_In", "sh_npc_generic_interest_01_Idle_Flat", "sh_npc_generic_interest_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_interest_01_Out", "sh_npc_generic_interest_01_In" ], strength: 100 },	
                        { sequence: [ "npc_w_generic_yawn_01" ], strength: 100 },	
                        { sequence: [ "npc_w_generic_yawn_02" ], strength: 100 },	
                        { sequence: [ "npc_w_generic_yawn_03" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },
			

        disgust:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_disgust_idle_01lf_01",
                f: "w_npc_dialogue_stand_disgust_01lf_idle_01",
            },

            transition_to_default:
            {
                m: "m_npc_dialogue_stand_disgust_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_disgust_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_disgust_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_disgust_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_disgust_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_disgust_idle_01lf_breaker_02",
                    "m_npc_dialogue_stand_disgust_idle_01lf_breaker_03",
                    "m_npc_dialogue_stand_disgust_idle_01lf_breaker_04",
                    "m_npc_dialogue_stand_disgust_01lf_listen_imperative_medium_01",
                    "m_npc_dialogue_stand_disgust_01lf_listen_declarative_short_01",
                    "m_npc_dialogue_stand_disgust_01lf_listen_declarative_medium_01",
                    "m_npc_dialogue_stand_disgust_01lf_listen_exclamatory_long_01",
                ],
                f: [
                    "w_npc_dialogue_stand_disgust_01lf_idle_breaker_01",
                    "w_npc_dialogue_stand_disgust_01lf_idle_breaker_02",
                    "w_npc_dialogue_stand_disgust_01lf_idle_breaker_03",
                    "w_npc_dialogue_stand_disgust_01lf_idle_breaker_04",
                    "w_npc_dialogue_stand_disgust_01lf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_disgust_01lf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_disgust_01lf_listen_declarative_short_01",
                    "w_npc_dialogue_stand_disgust_01lf_listen_exclamatory_long_01",
                    "w_npc_dialogue_stand_disgust_01lf_listen_exclamatory_short_01",
                    "w_npc_dialogue_stand_disgust_01lf_listen_approval_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_asking_short_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_asking_medium_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_asking_long_01",          strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_disgust_01lf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_asking_long_02",          strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_disapproval_short_02",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_disgust_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_disgust_01_In", "sh_npc_generic_disgust_01_Idle_Flat", "sh_npc_generic_disgust_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_disgust_01_Out", "sh_npc_generic_disgust_01_In" ], strength: 100 },	
                    ]
                },
            ],

            lookats: default_lookats,
        },
			

        loathing:
        {
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_loathing_idle_01lf_01",
                //m: "m_npc_dialogue_stand_loathing_idle_01lf_02",
                //m: "m_npc_dialogue_stand_loathing_idle_01lf_03",
                f: "w_npc_dialogue_stand_loathing_01lf_idle_01",
            },

            allow_gestures_during_transitions: false,
            
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_loathing_idle_01lf_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_loathing_idle_01lf_to_stand_trust_idle_01lf_01",
            },

            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_loathing_idle_01lf_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_loathing_idle_01lf_01",
            },

            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_loathing_idle_01lf_breaker_01",
                    "m_npc_dialogue_stand_loathing_01lf_listen_declarative_medium_01",
                    "m_npc_dialogue_stand_loathing_01lf_listen_imperative_short_01",
                    "m_npc_dialogue_stand_loathing_01lf_speak_declarative_short_01",
                ],
                f: [
                    "w_npc_dialogue_stand_loathing_01lf_breaker_01",
                    "w_npc_dialogue_stand_loathing_01lf_breaker_02",
                    "w_npc_dialogue_stand_loathing_01lf_breaker_03",
                    "w_npc_dialogue_stand_loathing_01lf_breaker_04",
                    "w_npc_dialogue_stand_loathing_01lf_breaker_05",
                    "w_npc_dialogue_stand_loathing_01lf_listen_asking_long_01",
                    "w_npc_dialogue_stand_loathing_01lf_listen_asking_medium_01",
                    "w_npc_dialogue_stand_loathing_01lf_listen_asking_short_01",
                    "w_npc_dialogue_stand_loathing_01lf_listen_declarative_long_01",
                    "w_npc_dialogue_stand_loathing_01lf_listen_declarative_medium_01",
                    "w_npc_dialogue_stand_loathing_01lf_listen_exclamatory_short_01", 
                    "w_npc_dialogue_stand_loathing_01lf_listen_imperative_long_01",
                    "w_npc_dialogue_stand_loathing_01lf_listen_imperative_short_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_approval_short_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_approval_medium_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_approval_long_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_declarative_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_declarative_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_declarative_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_imperative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_imperative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_imperative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_asking_short_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_asking_medium_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_asking_long_01",         strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_disapproval_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_disapproval_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_disapproval_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_exclamatory_short_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_exclamatory_medium_01",  strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_listen_exclamatory_long_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_approval_medium_01",      strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_approval_short_01",       strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_approval_long_01",        strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_declarative_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_declarative_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_declarative_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_disapproval_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_disapproval_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_disapproval_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_exclamatory_short_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_exclamatory_medium_01",   strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_exclamatory_long_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_imperative_short_01",     strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_imperative_medium_01",    strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_loathing_01lf_speak_imperative_long_01",      strength: 100, track: "override", mask: "FullBody" },
                ],
                f: [
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_approval_short_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_approval_medium_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_approval_long_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_asking_short_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_asking_medium_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_asking_long_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_declarative_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_declarative_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_declarative_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_disapproval_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_disapproval_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_disapproval_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_exclamatory_short_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_exclamatory_medium_01",  strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_exclamatory_long_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_imperative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_imperative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_listen_imperative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_approval_short_01",       strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_approval_medium_01",      strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_approval_long_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_asking_short_01",         strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_asking_medium_01",        strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_asking_long_01",          strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_declarative_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_declarative_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_declarative_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_disapproval_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_disapproval_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_disapproval_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_exclamatory_short_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_exclamatory_medium_01",   strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_exclamatory_long_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_imperative_short_01",     strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_imperative_medium_01",    strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_loathing_01lf_speak_imperative_long_01",      strength: 100, mask: "FullBody" },
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_loathing_01_In", "sh_npc_generic_loathing_01_Idle_Flat", "sh_npc_generic_loathing_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_loathing_01_Out", "sh_npc_generic_loathing_01_In" ], strength: 100 },	
                    ]
                },
            ],

            lookats: default_lookats,
        },
			

        stand_leaning_back_on_wall_front:
        {
			head_only_tracking: true,
			
            start_bp:
            {
                m: "single_static_m_stand_leaning_back_on_wall_01",
                f: "single_static_w_stand_leaning_back_on_wall_01_dialogue",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_leaning_back_on_wall_01_idle_01",
                f: "w_npc_dialogue_stand_leaning_back_on_wall_01_idle_01",
            },
            
            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_leaning_back_on_wall_idle_01_to_stand_normal_idle_01lf_front_01",
                f: "w_npc_dialogue_stand_leaning_back_on_wall_01_to_stand_trust_01lf_n_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_leaning_back_on_wall_idle_01_front_01",
                f: "w_npc_dialogue_stand_trust_01lf_to_stand_leaning_back_on_wall_01_n_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_leaning_back_on_wall_01_thinking_short_01",
                    "m_npc_dialogue_stand_leaning_back_on_wall_01_thinking_medium_01",
                    "m_npc_dialogue_stand_leaning_back_on_wall_01_thinking_long_01",		
                    "m_npc_dialogue_stand_leaning_back_on_wall_01_breaker_01",	
                    "m_npc_dialogue_stand_leaning_back_on_wall_01_breaker_02",	
                    "m_npc_dialogue_stand_leaning_back_on_wall_01_breaker_03",						
                ],
                
                f: [
                    "w_npc_dialogue_stand_leaning_back_on_wall_01_breaker_01",	
                    "w_npc_dialogue_stand_leaning_back_on_wall_01_breaker_02",	
                    "w_npc_dialogue_stand_leaning_back_on_wall_01_breaker_03",		
                    "w_npc_dialogue_stand_leaning_back_on_wall_01_breaker_04",
                    "w_npc_dialogue_stand_leaning_back_on_wall_01_thinking_01",		
                    "w_npc_dialogue_stand_leaning_back_on_wall_01_thinking_02",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_thinking_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_thinking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_thinking_long_01", strength: 100, mask: "FullBody" },				
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_imperative_long_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_greeting_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_greeting_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_disapproval_medium_2", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_declarative_long_01", strength: 100, mask: "FullBody" },			
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_asking_short_01", strength: 100, mask: "FullBody" },		
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_asking_medium_01", strength: 100, mask: "FullBody" },		
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_approval_short_01", strength: 100, mask: "FullBody" },		
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_approval_medium_01", strength: 100, mask: "FullBody" },	
                    { name: "m_npc_dialogue_stand_leaning_back_on_wall_01_approval_long_01", strength: 100, mask: "FullBody" },								
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_asking_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_asking_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_asking_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_imperative_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_imperative_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_imperative_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_imperative_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_imperative_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_imperative_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_exclamatory_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_exclamatory_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_exclamatory_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_back_on_wall_01_thinking_02", strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            lookats: default_lookats,
        },
        
        stand_leaning_on_table_front:
        {
            head_only_tracking: true,
            
            start_bp:
            {
                m: "single_static_m_stand_leaning_on_table_01",
                f: "single_citizen_w_stand_leaning_on_table_front_01_dialogue",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_leaning_on_table_01_idle_01",
                f: "w_npc_dialogue_stand_leaning_on_table_front_01_idle_01",
            },
            
            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_leaning_on_table_01_to_stand_normal_idle_01lf_01",
                f: "w_npc_dialogue_stand_leaning_on_table_front_01_to_trust_01lf_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_leaning_on_table_01_01",
                f: "w_npc_dialogue_trust_01lf_to_stand_leaning_on_table_front_01_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_leaning_on_table_01_idle_breaker_01",						
                ],
                
                f: [
                    "w_npc_dialogue_stand_leaning_on_table_front_01_idle_breaker_01",		
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_disapproval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_disapproval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_approval_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_greeting_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_speak_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_speak_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_speak_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_speak_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_speak_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_speak_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_speak_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_speak_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_imperative_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_01_listen_asking_long_02", strength: 100, track: "override", mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_disapproval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_disapproval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_approval_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_idle_breaker_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_greeting_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_speak_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_speak_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_speak_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_speak_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_speak_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_speak_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_speak_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_speak_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_imperative_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_front_01_listen_asking_long_02", strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            lookats: default_lookats,
        },    

        stand_leaning_on_table_back:
        {
            head_only_tracking: true,
            
            start_bp:
            {
                m: "single_static_m_stand_leaning_on_table_back_01_dialogue",
                f: "single_static_w_stand_leaning_on_table_01",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_leaning_on_table_back_01_idle_01",
                f: "w_npc_dialogue_stand_leaning_on_table_01_idle_01",
            },
            
            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_leaning_on_table_back_01_to_stand_normal_idle_01lf_n_01",
                f: "w_npc_dialogue_stand_leaning_on_table_01_to_stand_normal_idle_01lf_n_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_leaning_on_table_back_01_n_01",
                f: "w_npc_dialogue_stand_normal_idle_01lf_to_stand_leaning_on_table_01_n_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_leaning_on_table_back_01_breaker_01",
                    "m_npc_dialogue_stand_leaning_on_table_back_01_breaker_02",
                    "m_npc_dialogue_stand_leaning_on_table_back_01_breaker_03",
                    "m_npc_dialogue_stand_leaning_on_table_back_01_breaker_04",
                    "m_npc_dialogue_stand_leaning_on_table_back_01_thinking_01",
                    "m_npc_dialogue_stand_leaning_on_table_back_01_thinking_02",
                    "m_npc_dialogue_stand_leaning_on_table_back_01_thinking_03",
                ],
                
                f: [
                    "w_npc_dialogue_stand_leaning_on_table_01_breaker_01",		
                    "w_npc_dialogue_stand_leaning_on_table_01_breaker_02",
                    "w_npc_dialogue_stand_leaning_on_table_01_breaker_03",
                    "w_npc_dialogue_stand_leaning_on_table_01_breaker_04",
                    "w_npc_dialogue_stand_leaning_on_table_01_breaker_05",
                    "w_npc_dialogue_stand_leaning_on_table_01_thinking_01",
                    "w_npc_dialogue_stand_leaning_on_table_01_thinking_02",
                    "w_npc_dialogue_stand_leaning_on_table_01_thinking_03",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_asking_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_asking_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_asking_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_imperative_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_imperative_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_imperative_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_imperative_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_imperative_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_imperative_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_exclamatory_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_exclamatory_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_table_back_01_exclamatory_03", strength: 100, track: "override", mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_asking_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_asking_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_asking_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_imperative_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_imperative_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_imperative_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_imperative_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_imperative_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_imperative_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_thinking_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_thinking_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_table_01_thinking_03", strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            lookats: default_lookats,
        },    

		stand_leaning_left_arm_on_wall:
        {
			head_only_tracking: true,
			
            start_bp:
            {
                m: "single_static_m_stand_leaning_on_wall_left_arm_01_dialogue",
                f: "single_citizen_w_stand_leaning_left_arm_on_wall_idle_01",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_idle_01",
                f: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_idle_01",
            },

            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_leaning_on_wall_left_arm_01_n_01",
                f: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_to_stand_normal_idle_01lf_n_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_leaning_on_wall_left_shoulder_01_n_01",
                f: "w_npc_dialogue_stand_normal_idle_01lf_to_leaning_left_arm_on_wall_01_n_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_idle_breaker_01",
                    "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_idle_breaker_02",
                    "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_idle_breaker_03",
                    "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_idle_breaker_04",
                    "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_idle_breaker_05",
                    "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_idle_breaker_06",
					"m_npc_dialogue_stand_leaning_on_wall_left_arm_01_idle_breaker_07",
					"m_npc_dialogue_stand_leaning_on_wall_left_arm_01_idle_breaker_08",					
                ],
                
                f: [
                    "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_breaker_01",
                    "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_breaker_02",
                    "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_breaker_03",
                    "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_breaker_04",
		
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_idle_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_approval_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_approval_medium_03", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_declarative_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_disapproval_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_disapproval_medium_03", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_disapproval_medium_04", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_disapproval_short_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_asking_short_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_exclamatory_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_imperative_short_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_imperative_short_03", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_imperative_short_04", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_arm_01_imperative_short_05", strength: 100, mask: "FullBody" },
                

                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_speak_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_listen_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_listen_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_speak_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_speak_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_listen_approval_long_02", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_listen_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_listen_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_speak_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_speak_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_speak_disapproval_long_02", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_thinking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_thinking_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_thinking_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_declarative_long_02", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_declarative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_greeting_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_greeting_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_greeting_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_greeting_long_02", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_speak_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_speak_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_speak_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_speak_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_approval_short_02", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_left_arm_on_wall_01_exclamatory_medium_01", strength: 100, mask: "FullBody" },
                    
                ],
            },

            lookats: default_lookats,
        },    

		stand_leaning_right_arm_on_wall:
        {
			head_only_tracking: true,
			
            start_bp:
            {
                m: "single_static_m_stand_leaning_on_wall_right_arm_01_dialogue",
                f: "single_citizen_w_stand_leaning_right_arm_on_wall_dialogue",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_idle_01",
                f: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_idle_01",
            },

            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_to_stand_normal_idle_01lf_n_01",
                f: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_to_stand_normal_idle_01lf_n_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_leaning_on_wall_right_arm_01_n_01",
                f: "w_npc_dialogue_stand_normal_idle_01lf_to_leaning_right_arm_on_wall_01_n_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_idle_breaker_01",
                    "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_idle_breaker_02",
                    "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_idle_breaker_03",
                    "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_idle_breaker_04",
                    "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_idle_breaker_05",
                    "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_idle_breaker_06",
					"m_npc_dialogue_stand_leaning_on_wall_right_arm_01_idle_breaker_07",
					"m_npc_dialogue_stand_leaning_on_wall_right_arm_01_idle_breaker_08",
                ],
                
                f: [
                    "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_breaker_01",
                    "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_breaker_02",
                    "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_breaker_03",
                    "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_breaker_04",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_declarative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_disapproval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_greeting_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_greeting_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_greeting_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_greeting_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_asking_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_imperative_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_imperative_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_imperative_short_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_pleased_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_pleased_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_pleased_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_arm_01_pleased_long_02", strength: 100, track: "override", mask: "FullBody" },
					
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_speak_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_listen_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_listen_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_speak_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_speak_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_listen_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_listen_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_listen_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_speak_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_speak_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_speak_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_thinking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_thinking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_thinking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_declarative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_greeting_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_greeting_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_speak_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_speak_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_speak_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_speak_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_imperative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_listen_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_exlamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_declarative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_right_arm_on_wall_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    
                ],
            },

            lookats: default_lookats,
        },    

		stand_leaning_left_hand_on_wall:
        {
			head_only_tracking: true,
			
            start_bp:
            {
                m: "single_static_m_stand_leaning_on_wall_left_hand_01_dialogue",
                f: "single_static_w_stand_leaning_on_wall_left_hand_01_dialogue",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_01",
                f: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_01",
            },

            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_to_stand_normal_idle_01lf_n_01",
                f: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_to_trust_01lf_n_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_leaning_on_wall_left_hand_01_n_01",
                f: "w_npc_dialogue_trust_01lf_to_stand_leaning_on_wall_left_hand_01_n_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_01",
                    "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_02",
                    "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_03",
                    "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_04",
                    "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_05",
                    "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_06",
                ],
                
                f: [
                    "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_01",
                    "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_02",
                    "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_03",
                    "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_04",
                    "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_05",
                    "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_idle_breaker_06",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_long_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_pleased_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_pleased_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_pleased_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_greeting_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_long_04", strength: 100, track: "override", mask: "FullBody" },
					
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_greeting_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_imperative_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_approval_long_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_exclamatory_medium_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_pleased_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_pleased_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_left_hand_01_pleased_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_interest_01_In", "sh_npc_generic_interest_01_Idle_Flat", "sh_npc_generic_interest_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_interest_01_Out", "sh_npc_generic_interest_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },    

		stand_leaning_right_hand_on_wall:
        {
			head_only_tracking: true,
			
            start_bp:
            {
                m: "single_static_m_stand_leaning_on_wall_right_hand_01_dialogue",
                f: "single_static_w_stand_leaning_on_wall_right_hand_01_dialogue",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_01",
                f: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_01",
            },

            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_to_stand_normal_idle_01lf_n_01",
                f: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_to_trust_01lf_n_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_leaning_on_wall_right_hand_01_n_01",
                f: "w_npc_dialogue_trust_01lf_to_stand_leaning_on_wall_right_hand_01_n_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_01",
                    "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_02",
                    "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_03",
                    "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_04",
                    "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_05",
                    "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_06",
                ],
                
                f: [
                    "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_01",
                    "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_02",
                    "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_03",
                    "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_04",
                    "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_05",
                    "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_idle_breaker_06",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_long_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_pleased_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_pleased_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_pleased_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_pleased_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_greeting_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
					
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_long_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_pleased_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_pleased_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_pleased_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_pleased_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_approval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_leaning_on_wall_right_hand_01_imperative_long_04", strength: 100, track: "override", mask: "FullBody" },
                    
                ],
            },

            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_interest_01_In", "sh_npc_generic_interest_01_Idle_Flat", "sh_npc_generic_interest_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_interest_01_Out", "sh_npc_generic_interest_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },    

	    sitting_on_table_01:
        {
			head_only_tracking: true,
			
            start_bp:
            {
                m: "single_citizen_m_dialogue_sitting_on_table_01",
                f: "single_static_w_sitting_on_table_01_dialogue",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_sitting_on_table_01_idle_01",
                f: "w_npc_dialogue_sitting_on_table_01_idle_01",
            },

            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_sitting_on_table_01_to_stand_normal_idle_01lf_n_01",
                f: "w_npc_dialogue_sitting_on_table_01_to_stand_trust_idle_01lf_front_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_sitting_on_table_01_n_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_sitting_on_table_01_front_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_sitting_on_table_01_breaker_01",
                    "m_npc_dialogue_sitting_on_table_01_breaker_02",
                    "m_npc_dialogue_sitting_on_table_01_breaker_03",
                    "m_npc_dialogue_sitting_on_table_01_breaker_04",		
                    "m_npc_dialogue_sitting_on_table_01_breaker_05",	
                    "m_npc_dialogue_sitting_on_table_01_breaker_06",	
                    "m_npc_dialogue_sitting_on_table_01_breaker_07",
                    "m_npc_dialogue_sitting_on_table_01_breaker_08",	
                    "m_npc_dialogue_sitting_on_table_01_breaker_09",					
                ],
                
                f: [
                    "w_npc_dialogue_sitting_on_table_01_idle_breaker_01",
                    "w_npc_dialogue_sitting_on_table_01_idle_breaker_02",
                    "w_npc_dialogue_sitting_on_table_01_thinking_medium_01",
                    "w_npc_dialogue_sitting_on_table_01_thinking_short_01",		
                    "w_npc_dialogue_sitting_on_table_01_idle_breaker_03",	
                    "w_npc_dialogue_sitting_on_table_01_idle_breaker_04",	
                    "w_npc_dialogue_sitting_on_table_01_thinking_long_01",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_sitting_on_table_01_disapproval_short_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_disapproval_short_05", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_disapproval_long_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_disapproval_short_04", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_disapproval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_disapproval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_disapproval_short_03", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_listen_disapproval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_listen_disapproval_short_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_thinking_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_speak_approval_long_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_speak_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_speak_approval_short_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_speak_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_speak_approval_short_03", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_listen_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_approval_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_listen_approval_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_approval_medium_03", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_approval_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_speak_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_speak_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_speak_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_speak_asking_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_greeting_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_greeting_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_listen_asking_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_listen_asking_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_listen_asking_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_listen_asking_medium_03", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_listen_asking_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_exclamatory_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_exclamatory_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_exclamatory_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_imperative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_imperative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_imperative_long_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_imperative_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_declarative_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_declarative_medium_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_approval_short_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_exclamatory_long_02", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_exclamatory_long_03", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_declarative_medium_01", strength: 100, mask: "FullBody" },
                    { name: "m_npc_dialogue_sitting_on_table_01_declarative_long_01", strength: 100, mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_sitting_on_table_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_approval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_approval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_disapproval_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_greeting_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_greeting_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_declarative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_imperative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_imperative_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_asking_long_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_sitting_on_table_01_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            lookats: default_lookats,
        },

	    crouch_01:
        {
			head_only_tracking: true,
			
            start_bp:
            {
                m: "single_static_m_crouch_dialogue_01",
                f: "single_static_w_crouch_01_dialogue",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_crouch_idle_01",
                f: "w_npc_dialogue_crouch_01_idle_01",
            },

            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_crouch_idle_01_to_stand_normal_idle_01lf_front_01",
                f: "w_npc_dialogue_crouch_idle_01_to_stand_trust_idle_01lf_front_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_crouch_idle_01_front_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_crouch_idle_01_front_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_crouch_idle_breaker_01",
                    "m_npc_dialogue_crouch_idle_01_thinking_long_01",
                    "m_npc_dialogue_crouch_idle_01_thinking_long_02",
                    "m_npc_dialogue_crouch_idle_01_thinking_medium_01",		
                    "m_npc_dialogue_crouch_idle_01_thinking_long_03",	
                    "m_npc_dialogue_crouch_idle_01_thinking_long_04",	
                    "m_npc_dialogue_crouch_idle_01_thinking_long_05",
                    "m_npc_dialogue_crouch_idle_01_thinking_long_06",	
                    "m_npc_dialogue_crouch_idle_01_thinking_long_07",					
                ],
                
                f: [
                    "w_npc_dialogue_crouch_01_idle_breaker_01",
                    "w_npc_dialogue_crouch_01_idle_breaker_02",
                    "w_npc_dialogue_crouch_01_idle_breaker_03",
                    "w_npc_dialogue_crouch_01_thinking_short_03",		
                    "w_npc_dialogue_crouch_01_thinking_short_01",	
                    "w_npc_dialogue_crouch_01_thinking_medium_01",	
                    "w_npc_dialogue_crouch_01_thinking_long_01",
                    "w_npc_dialogue_crouch_01_thinking_medium_02",	
                    "w_npc_dialogue_crouch_01_thinking_short_02",	
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_crouch_idle_01_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_approval_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_approval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_disapproval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_disapproval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_disapproval_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_greeting_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_greeting_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_greeting_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_asking_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_thinking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_asking_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_surprise_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_asking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_declarative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_asking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_exclamatory_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_asking_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_asking_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_thinking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_thinking_medium_01", strength: 100, track: "override", mask: "FullBody" },
					{ name: "m_npc_dialogue_crouch_idle_01_thinking_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_thinking_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_thinking_long_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_thinking_long_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_idle_01_thinking_long_07", strength: 100, track: "override", mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_crouch_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_approval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_approval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_approval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_short_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_disapproval_short_6", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_greeting_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_greeting_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_greeting_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_asking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_greeting_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_declarative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_exclmatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_exclamatory_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_asking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_declarative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
					{ name: "w_npc_dialogue_crouch_01_declarative_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_exclamatory_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_thinking_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_asking_short_02", strength: 100, track: "override", mask: "FullBody" },
					{ name: "w_npc_dialogue_crouch_01_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
					{ name: "w_npc_dialogue_crouch_01_thinking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_thinking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_thinking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_thinking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_01_thinking_short_02", strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            lookats: default_lookats,
        },

	    crouch_02:
        {
			head_only_tracking: true,
			
            start_bp:
            {
                m: "single_citizen_m_crouch_02_dialogue",
                f: "single_citizen_w_crouch_02_dialogue",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_crouch_02_idle_01",
                f: "w_npc_dialogue_crouch_02_idle_01",
            },

            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_crouch_02_to_stand_normal_idle_01lf_n_01",
                f: "w_npc_dialogue_crouch_02_to_trust_01lf_n_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_crouch_02_n_01",
                f: "w_npc_dialogue_trust_01lf_to_crouch_02_n_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_crouch_02_idle_breaker_01",
                    "m_npc_dialogue_crouch_02_idle_breaker_02",
                    "m_npc_dialogue_crouch_02_idle_breaker_03",
                    "m_npc_dialogue_crouch_02_idle_breaker_04",
                    "m_npc_dialogue_crouch_02_idle_breaker_05",
                ],
                
                f: [
                    "w_npc_dialogue_crouch_02_idle_breaker_01",
                    "w_npc_dialogue_crouch_02_idle_breaker_02",
                    "w_npc_dialogue_crouch_02_idle_breaker_03",
                    "w_npc_dialogue_crouch_02_idle_breaker_04",
                    "w_npc_dialogue_crouch_02_idle_breaker_05",
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_crouch_02_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_approval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_declarative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_declarative_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_disapproval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_disapproval_medium_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_declarative_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_pleased_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_pleased_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_pleased_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_imperative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_disapproval_medium_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_asking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_pleased_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_crouch_02_exclamatory_long_03", strength: 100, track: "override", mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_crouch_02_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_approval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_declarative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_declarative_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_disapproval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_disapproval_medium_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_declarative_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_pleased_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_pleased_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_pleased_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_imperative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_disapproval_medium_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_asking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_pleased_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_crouch_02_exclamatory_long_03", strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            lookats: default_lookats,
        },
		
	    stand_right_hand_on_table_01:
        {
			head_only_tracking: true,
			
            start_bp:
            {
                m: "single_static_m_stand_right_hand_on_table_01_dialogue",
                f: "single_static_w_stand_right_hand_on_table_01_dialogue",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_right_hand_on_table_01_idle_01",
                f: "w_npc_dialogue_stand_right_hand_on_table_01_idle_01",
            },

            allow_gestures_during_transitions: false,
			
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_right_hand_on_table_01_to_stand_normal_idle_01lf_front_02",
                f: "w_npc_dialogue_stand_right_hand_on_table_01_to_stand_trust_idle_01lf_front_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_right_hand_on_table_01_front_02",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_right_hand_on_table_01_front_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_right_hand_on_table_01_idle_breaker_01",
                    "m_npc_dialogue_stand_right_hand_on_table_01_idle_breaker_02",
                    "m_npc_dialogue_stand_right_hand_on_table_01_thinking_long_01",
                    "m_npc_dialogue_stand_right_hand_on_table_01_thinking_long_02",		
                    "m_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_01",	
                    "m_npc_dialogue_stand_right_hand_on_table_01_thinking_short_01",	
                    "m_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_02",
                    "m_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_03",	                  					
                ],
                
                f: [
                    "w_npc_dialogue_stand_right_hand_on_table_01_idle_breaker_01",
                    "w_npc_dialogue_stand_right_hand_on_table_01_idle_breaker_02",
                    "w_npc_dialogue_stand_right_hand_on_table_01_idle_breaker_03",
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_short_01",		
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_short_02",	
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_01",	
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_long_03",
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_02",	
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_long_02",	
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_short_03",
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_short_05",
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_02",	
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_short_04",	
                    "w_npc_dialogue_stand_right_hand_on_table_01_thinking_long_01",	
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_approval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_disapproval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_disapproval_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_greeting_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_greeting_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_asking_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_asking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_asking_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_pointing_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_approval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_approval_medium_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_exclamatory_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_declarative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_thinking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_thinking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_thinking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_03", strength: 100, track: "override", mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_short_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_greeting_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_greeting_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_medium_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_greeting_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_asking_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_asking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_medium_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_exclamatory_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_short_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_long_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_asking_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_medium_07", strength: 100, track: "override", mask: "FullBody" },
					{ name: "w_npc_dialogue_stand_right_hand_on_table_01_approval_medium_08", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_thinking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_thinking_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_thinking_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_thinking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_thinking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_thinking_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_thinking_short_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_thinking_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_hand_on_table_01_thinking_long_01", strength: 100, track: "override", mask: "FullBody" },
                ],
            },

            lookats: default_lookats,
        },

	    stand_right_leg_on_chair_01:
        {
			head_only_tracking: true,
			
            start_bp:
            {
                m: "single_static_m_stand_right_leg_on_chair_01_dialogue",
                f: "single_static_w_stand_right_leg_on_chair_01_dialogue",
            },
            
            fullbody_idle:
            {
                m: "m_npc_dialogue_stand_right_leg_on_chair_01_idle_01",
                f: "w_npc_dialogue_stand_right_leg_on_chair_01_idle_01",
            },

            allow_gestures_during_transitions: false,
            
            transition_to_default:
            {
                m: "m_npc_dialogue_stand_right_leg_on_chair_01_to_stand_normal_idle_01lf_front_01",
                f: "w_npc_dialogue_stand_right_leg_on_chair_01_to_stand_trust_idle_01lf_front_01",
            },
            
            transition_from_default:
            {
                m: "m_npc_dialogue_stand_normal_idle_01lf_to_stand_right_leg_on_chair_01_front_01",
                f: "w_npc_dialogue_stand_trust_idle_01lf_to_stand_right_leg_on_chair_01_front_01",
            },
            
            fullbody_breakers:
            {
                m: [
                    "m_npc_dialogue_stand_right_leg_on_chair_01_thinking_long_01",
                    "m_npc_dialogue_stand_right_leg_on_chair_01_thinking_medium_01",
                    "m_npc_dialogue_stand_right_leg_on_chair_01_thinking_short_01",
                    "m_npc_dialogue_stand_right_leg_on_chair_01_thinking_short_02",		
                    "m_npc_dialogue_stand_right_leg_on_chair_01_thinking_medium_02",	
                    "m_npc_dialogue_stand_right_leg_on_chair_01_thinking_short_03",	
                    "m_npc_dialogue_stand_right_leg_on_chair_01_thinking_long_03",	                  					
                ],
                
                f: [
                    "w_npc_dialogue_stand_right_leg_on_chair_01_idle_breaker_01",
                    "w_npc_dialogue_stand_right_leg_on_chair_01_idle_breaker_02",
                    "w_npc_dialogue_stand_right_leg_on_chair_01_idle_breaker_03",
                    "w_npc_dialogue_stand_right_leg_on_chair_01_idle_breaker_04",		
                    "w_npc_dialogue_stand_right_leg_on_chair_01_idle_breaker_05",	
                    "w_npc_dialogue_stand_right_leg_on_chair_01_thinking_long_01",	
                    "w_npc_dialogue_stand_right_leg_on_chair_01_thinking_medium_01",		
                    "w_npc_dialogue_stand_right_leg_on_chair_01_thinking_short_01",	
                    "w_npc_dialogue_stand_right_leg_on_chair_01_thinking_medium_02",	
                    "w_npc_dialogue_stand_right_leg_on_chair_01_thinking_long_02",					
                ],
            },

            gestures:
            {
                m: [
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_short_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_short_5", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_approval_short_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_short_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_long_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_long_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_long_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_long_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_medium_05", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_medium_06", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_medium_07", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_declarative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_declarative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_greeting_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_greeting_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_greeting_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_declarative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_asking_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_asking_medium_04", strength: 100, track: "override", mask: "FullBody" },
					{ name: "m_npc_dialogue_stand_right_leg_on_chair_01_surprise_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_surprise_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_asking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_asking_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_asking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_look_left_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_imperative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_imperative_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
					{ name: "m_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_medium_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "m_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_medium_05", strength: 100, track: "override", mask: "FullBody" },
                ],
                
                f: [
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_asking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_asking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_asking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_asking_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_thinking_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_thinking_long_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_thinking_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_thinking_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_thinking_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_approval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_approval_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_approval_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_approval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_approval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_approval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_approval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_asking_medium_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_great_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_great_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_disapproval_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_disapproval_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_disapproval_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_disapproval_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_disapproval_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_greeting_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_greeting_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_greeting_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_greeting_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_greeting_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_declarative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_imperative_medium_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_imperative_medium_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_declarative_long_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_declarative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_imperative_short_01", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_disapproval_short_04", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_exclamatory_short_03", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_declarative_short_03", strength: 100, track: "override", mask: "FullBody" },
					{ name: "w_npc_dialogue_stand_right_leg_on_chair_01_imperative_short_02", strength: 100, track: "override", mask: "FullBody" },
                    { name: "w_npc_dialogue_stand_right_leg_on_chair_01_asking_long_01", strength: 100, track: "override", mask: "FullBody" },
                ],
            },


            facials:
            [
                { 
                    sequence: [ "sh_npc_generic_interest_01_In", "sh_npc_generic_interest_01_Idle_Flat", "sh_npc_generic_interest_01_Out" ], strength: 100,
                    ticks: [
                        { sequence: [ "sh_npc_generic_interest_01_Out", "sh_npc_generic_interest_01_In" ], strength: 100 },	
                    ]
                }, 
            ],

            lookats: default_lookats,
        },

            
    }, 
    
    facial_gaps:
    {
        min_short_time: 1.0,
        min_long_time: 4.0,

        short_animations:
        [
            "sh_npc_dialogue_normal_01_idle",
            "sh_npc_dialogue_normal_02_idle",
        ],
        long_animations:
        [
            "sh_npc_dialogue_normal_03_idle",
            "sh_npc_dialogue_normal_04_idle",
            "sh_npc_dialogue_normal_04_idle",
            "sh_npc_dialogue_normal_05_idle",
            "sh_npc_dialogue_normal_06_idle",
            "sh_npc_dialogue_normal_07_idle",			
        ],
    }
    
};
