// CONTROLLER

function turn_music_on() {
    music_is_on = true;
    show_settings();
    music = new Sound("audio/music.mp3");
    music.play();
}

function turn_music_off() {
    music_is_on = false;
    show_settings();
    music.stop();
}

function turn_sound_on() {
    sound_is_on = true;
    show_settings();
    game_sounds = new Sound("audio/original.mp3"); // tento zvuk je tu iba docasne - len na demonstraciu funkcnosti ovladanie zvuku
    game_sounds.play();
}

function turn_sound_off() {
    sound_is_on = false;
    show_settings();
    game_sounds.stop();
}