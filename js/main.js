window.onload = function () {
    draw_menu();
}
document.addEventListener("keydown", keyPush);





// MODEL

var music_is_on = false;
var sound_is_on = false;

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");





// keypush




function keyPush(event) {
    console.log("KEY DOWN");
    switch (event.key) {
        case "ArrowLeft":
            console.log("left");
            alert(snakes);
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

