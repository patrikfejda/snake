function game_singleplayer() {
    hide_everything();

    score_zero();

    game = new Game();
    game.canvas.style = "display: block;";

    snake = new Snake(game, 5, 5, [], 1, 0);
    food = new Food(game, 3, 5);
    poison = new Poison(game, 2, 5);


    game.gameLoopSingleplayer(snake, food, poison);


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

// function snake_died() {
//     showDeathScreen();

// }



function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }