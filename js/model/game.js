
class Game extends GameObject {
    constructor() {
        super(undefined)

        this.dead_sound = new Sound("audio/dead.mp3");

        this.canvas = document.getElementById("myCanvas");

        this.ctx = this.canvas.getContext("2d");

        this.fps = 25;
        this.tileSize = 50;
        this.tileCountX = this.canvas.width / this.tileSize;
        this.tileCountY = this.canvas.height / this.tileSize;

        this.level = 1;
        this.is_running = 1;
        this.level_2_limit = 5;
        this.level_3_limit = 10;


    }

    stop_game() {
        this.is_running = 0;
    }

    handle_levels() {
        if (score == this.level_2_limit) {
            this.level = 2;
            // this.canvas.style = "border: solid black 1px;";
            this.canvas.style = "border: solid red 10px;";
            console.log("LEVEL SET TO: ", this.level);
        }
        else if (score == this.level_3_limit) {
            this.level = 3;
            console.log("LEVEL SET TO: ", this.level);

        }
    }

    gameLoopSingleplayer(snake, food, poison, score_counter) {

        // draw
        drawGrid(this.tileCountX, this.tileCountY, this.tileSize, this.ctx);
        food.draw(this.tileSize, this.ctx);
        snake.draw(this.tileSize, this.ctx);

        if (this.level > 2) {
            poison.draw(this.tileSize, this.ctx);
        }

        // move
        snake.move();
        snake.set_direction_key_down();
        snake.change_direction();

        // check

        food.check_snake_colision(snake, this.tileCountX, this.tileCountY, poison);
        snake.check_colision_wall(this, this.level, this.tileSize, this.canvas.width, this.canvas.height, this.tileCountX, this.tileCountY);
        this.handle_levels();
        snake.check_tail_colision(game);

        // show score
        score_counter.innerHTML = "Score: "+score;

        if (this.level > 2) {
            poison.check_snake_colision(snake, this.tileCountX, this.tileCountY);
        }

        if (this.is_running == 1) {
            requestAnimationFrame(() => this.gameLoopSingleplayer(snake, food, poison, score_counter));
        }
        else {
            if (sound_is_on) {
                this.dead_sound.play();
            }
            count_high_score();
            console.log("YOU ARE DEAD!");
            showDeathScreen();
        }
    }
}