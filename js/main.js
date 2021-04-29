window.onload = function () {
    draw_menu();
}

var keys={};
var music_is_on = false;
var sound_is_on = false;
var score = 0;
var hight_score = 0;

function score_add() {
    score++;
    console.log("Score: ", score);
}

function score_zero() {
    score = 0;
    console.log("Score set to ", score);
}

function count_high_score() {
    if (score > hight_score) {
        hight_score = score;
    }
}



window.onkeydown= function(event){
	keys[event.keyCode]= true;
    // console.log("key down:",event.keyCode);
}
window.onkeyup= function(event){
	keys[event.keyCode] =false;
    // console.log("key up:",event.keyCode);
}





