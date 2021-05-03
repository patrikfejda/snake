// VIEW

function hide_everything() {
    hide_menu();
    hide_settings();
    hide_how_to_play();
    hide_canvas();
    hide_death_screen();
    hide_back_button();
}

function hide_menu() {
    display_element_by_element_id("title_snake", "none");
    display_element_by_element_id("button_single", "none");
    // display_element_by_element_id("button_multi", "none");
    display_element_by_element_id("settings", "none");
    display_element_by_element_id("how_to_play", "none");
}

function hide_settings() {
    display_element_by_element_id("music_on", "none");
    display_element_by_element_id("music_off", "none");
    display_element_by_element_id("sound_on", "none");
    display_element_by_element_id("sound_off", "none");
}

function hide_how_to_play() {
    display_element_by_element_id("controls", "none");
}

function hide_canvas() {
    display_element_by_element_id("myCanvas", "none");
}

function hide_death_screen() {
    display_element_by_element_id("dead", "none");
    display_element_by_element_id("dead_text", "none");
}

function hide_back_button() {
    display_element_by_element_id("back", "none");
}