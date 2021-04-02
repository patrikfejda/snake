function game_singleplayer() {
    loadGameScreen();
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.style = "display: block;"


    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function game_multiplayer() {
    loadGameScreen();
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.style = "display: block;"

    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();

}