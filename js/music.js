var music_is_on = false;
var sound_is_on = false;

class Sound {
    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
    }
    play() {
        this.sound.play();
    }
    stop() {
        this.sound.pause();
    }
}

// // https://www.w3schools.com/graphics/game_sound.asp
// function sound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     // document.body.appendChild(this.sound);
//     this.play = function () {
//         this.sound.play();
//     }
//     this.stop = function () {
//         this.sound.pause();
//     }
// }


function turn_music_on() {
    music_is_on = true;
    show_settings();
    mySound = new Sound("audio/music.mp3");
    mySound.play();
}

function turn_music_off() {
    music_is_on = false;
    show_settings();
    mySound.stop();
}

function turn_sound_on() {
    sound_is_on = true;
    show_settings();
    mySound1 = new Sound("audio/original.mp3");
    mySound1.play();
}

function turn_sound_off() {
    sound_is_on = false;
    show_settings();
    mySound1.stop();
}