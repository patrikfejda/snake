// CONTROLLER

function gameLoopSingleplayer(snake, tileCountX, tileCountY, tileSize, ctx) {
    drawGrid(tileCountX, tileCountY, tileSize, ctx);
    drawSnake(tileCountX, tileCountY, tileSize, ctx, snake);
    requestAnimationFrame(gameLoopSingleplayer);
}



function game_singleplayer() {
    hide_everything();
    canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.style = "display: block;";

    const tileSize = 50;
    const tileCountX = canvas.width / tileSize;
    const tileCountY = canvas.height / tileSize;


    snake = new Snake(5, 5, [], 1, 0, "ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft");


    gameLoopSingleplayer(snake, tileCountX, tileCountY, tileSize, ctx);





}

function game_multiplayer() {
    hide_everything();
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.style = "display: block;";

    const tileSize = 50;
    const tileCountX = canvas.width / tileSize;
    const tileCountY = canvas.height / tileSize;

    drawGrid(tileCountX, tileCountY, tileSize, ctx);

    alert("MULTIPLAYER ASI NEBUDE :(");



}

function snake_died() {
    showDeathScreen();

}