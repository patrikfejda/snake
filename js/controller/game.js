function game_singleplayer() {
    hide_everything();
    game = new Game();
    game.canvas.style = "display: block;";

    snake = new Snake(game,5, 5, [], 1, 0);


    // game.asdf(snake);

    game.gameLoopSingleplayer(snake);




}

// function game_multiplayer() {
//     hide_everything();
//     canvas = document.getElementById("myCanvas");
//     ctx = canvas.getContext("2d");
//     canvas.style = "display: block;";

//     const tileSize = 50;
//     const tileCountX = canvas.width / tileSize;
//     const tileCountY = canvas.height / tileSize;

//     drawGrid(tileCountX, tileCountY, tileSize, ctx);

//     alert("MULTIPLAYER ASI NEBUDE :(");



// }

function snake_died() {
    showDeathScreen();

}