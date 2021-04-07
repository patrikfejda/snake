// VIEW

function show_settings() {
    hide_everything();

    display_element_by_element_id("back", "block");


    if (music_is_on) {
        display_element_by_element_id("music_on", "inline-block");
    } else {
        display_element_by_element_id("music_off", "inline-block");
    }

    if (sound_is_on) {
        display_element_by_element_id("sound_on", "inline-block");
    } else {
        display_element_by_element_id("sound_off", "inline-block");
    }
}



function show_how_to_play() {
    hide_everything();

    display_element_by_element_id("back", "block");

    display_element_by_element_id("controls", "block");
}

function draw_menu() {
    hide_everything();

    display_element_by_element_id("title_snake", "block");    
    display_element_by_element_id("button_single", "inline-block");
    display_element_by_element_id("button_multi", "inline-block");
    display_element_by_element_id("settings", "inline-block");    
    display_element_by_element_id("how_to_play", "inline-block");
};

function showDeathScreen() {
    hide_everything();

    display_element_by_element_id("dead", "block");
    display_element_by_element_id("dead_text", "block");

}

// help function

function display_element_by_element_id(element_id, display_type) {
    document.getElementById(element_id).style = "display:" + display_type + ";";
}