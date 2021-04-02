window.onload = function () {
    draw_menu();
}

function hide_menu() {
    title_snake = document.getElementById("title_snake");
    display_element(title_snake, "none");
    button_single = document.getElementById("button_single");
    display_element(button_single, "none");
    button_multi = document.getElementById("button_multi");
    display_element(button_multi, "none");
    settings = document.getElementById("settings");
    display_element(settings, "none");
    how_to_play = document.getElementById("how_to_play");
    display_element(how_to_play, "none");
}

function start_singleplayer() {
    alert("singleplayer")
}

function start_multiplayer() {
    alert("multiplayer")
}

function hide_settings(){
    music_on = document.getElementById("music_on");
    music_off = document.getElementById("music_off");

    sound_on = document.getElementById("sound_on");
    sound_off = document.getElementById("sound_off");

    display_element(music_on,"none"); 
    display_element(music_off,"none"); 
    display_element(sound_on,"none"); 
    display_element(sound_off,"none"); 
}


function show_settings() {
    hide_menu();
    hide_settings();

    
    back = document.getElementById("back");
    display_element(back, "block");

    music_on = document.getElementById("music_on");
    music_off = document.getElementById("music_off");

    sound_on = document.getElementById("sound_on");
    sound_off = document.getElementById("sound_off");

    if (is_music_on) {
        display_element(music_on,"inline-block"); 
    } else {
        display_element(music_off,"inline-block"); 
    }

    if (is_sound_on) {
        display_element(sound_on,"inline-block"); 
    } else {
        display_element(sound_off,"inline-block"); 
    }



}

function hide_how_to_play() {
    controls = document.getElementById("controls");
    display_element(controls, "none");
}

function show_how_to_play() {
    // alert("how to play")
    hide_menu();
    back = document.getElementById("back");
    display_element(back, "block");
    controls = document.getElementById("controls");
    display_element(controls, "block");
}

function go_back_to_main_menu(){
    hide_how_to_play();
    hide_settings();
    back = document.getElementById("back");
    display_element(back, "none");
    draw_menu();
} 


function draw_menu() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    title_snake = document.getElementById("title_snake");
    display_element(title_snake, "block");
    button_single = document.getElementById("button_single");
    display_element(button_single, "inline-block");
    button_multi = document.getElementById("button_multi");
    display_element(button_multi, "inline-block");
    settings = document.getElementById("settings");
    display_element(settings, "inline-block");
    how_to_play = document.getElementById("how_to_play");
    display_element(how_to_play, "inline-block");
};

function display_element(element, display_type) {
    element.style = "display:" + display_type + ";";
}
