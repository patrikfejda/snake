function game_singleplayer() {
    hide_everything();

    score_zero();

    game = new Game();
    game.canvas.style = "display: block;";
    score_counter = document.getElementById("score");
    score_counter.style = "display: block;";


    snake = new Snake(game, 5, 5, [], 1, 0);
    food = new Food(game, 3, 5);
    poison = new Poison(game, 2, 5);


    game.gameLoopSingleplayer(snake, food, poison,score_counter);


}
