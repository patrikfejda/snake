window.onload = function () {
    draw_menu();
}

var keys={};

window.onkeydown= function(event){
	keys[event.keyCode]= true;
    // console.log("key down:",event.keyCode);
}
window.onkeyup= function(event){
	keys[event.keyCode] =false;
    // console.log("key up:",event.keyCode);
}

// document.addEventListener("keydown", keyPush);


// MODEL

var music_is_on = false;
var sound_is_on = false;


// keypush

function keyPush(event) {
    console.log("KEY DOWN");
    switch (event.key) {
        case "ArrowLeft":
            console.log("left");
            break;
        case "ArrowUp":
            console.log("up");
            break;
        case "ArrowRight":
            console.log("right");
            break;
        case "ArrowDown":
            console.log("down");
            break;
        default:
            console.log(event.key + " - pressed - dont know what to do.")
            break;
    }
}

