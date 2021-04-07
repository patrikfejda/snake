// CONTROLLER

function game_singleplayer() {
    hide_everything();
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.style = "display: block;";

    const tileSize = 50;
    const tileCountX = canvas.width / tileSize;
    const tileCountY = canvas.height / tileSize;

    drawGrid(tileCountX, tileCountY, tileSize, ctx);

    alert("PRE UKAZANIE DEAD SCREEN TUKNITE NA CANVAS!")
}

function game_multiplayer() {
    hide_everything();
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.style = "display: block;";

    const tileSize = 50;
    const tileCountX = canvas.width / tileSize;
    const tileCountY = canvas.height / tileSize;

    drawGrid(tileCountX, tileCountY, tileSize, ctx);
    alert("PRE UKAZANIE DEAD SCREEN TUKNITE NA CANVAS!")


}

function snake_died() {
    showDeathScreen();

}