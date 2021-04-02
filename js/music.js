var is_music_on = true;
var is_sound_on = true;


// https://www.w3schools.com/graphics/game_sound.asp
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    // document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}


function turn_music_on() {
    is_music_on = true;
    show_settings();
    mySound = new sound("audio/music.mp3");
    mySound.play();
}

function turn_music_off() {
    is_music_on = false;
    show_settings();
    mySound.stop();
}

function turn_sound_on() {
    is_sound_on = true;
    show_settings();
}

function turn_sound_off() {
    is_sound_on = false;
    show_settings();
}