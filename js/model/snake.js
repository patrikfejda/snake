class Food extends GameObject {
    constructor(game, PosX, PosY) {
        super(game)
        this.PosX = PosX;
        this.PosY = PosY;
        this.food_sound = new Sound("audio/food.mp3");
    }

    generate_new_position(tileCountX, tileCountY,snake) {
        this.PosX = Math.floor(1+Math.random() * (tileCountX-2));
        this.PosY = Math.floor(1+Math.random() * (tileCountY-2));

        if ((Math.round(this.PosX) == Math.round(snake.HeadPosX)) || (Math.round(this.PosY) == Math.round(snake.HeadPosY))) {
            console.log("FOOD WAS IN THE SAME LINE AS SNAKE, GENERATE AGAIN!");
            this.generate_new_position(tileCountX, tileCountY,snake);
        }
    }

    draw(tileSize, ctx) {
        draw_rectangle("#228B22", tileSize * Math.round(this.PosX), tileSize * Math.round(this.PosY), tileSize - 1, tileSize - 1, ctx)
    }

    check_snake_colision(snake, tileCountX, tileCountY, poison) {
        if ((Math.round(this.PosX) == Math.round(snake.HeadPosX)) && (Math.round(this.PosY) == Math.round(snake.HeadPosY))) {
            console.log("FOOD EATEN");
            if (sound_is_on) {
                this.food_sound.play();
            }
            score_add();
            snake.food_eaten();
            this.generate_new_position(tileCountX, tileCountY,snake);
            poison.generate_new_position(tileCountX, tileCountY,snake);        
        }
    }
}

class Poison extends Food {
    constructor(game, PosX, PosY) {
        super(game)
        this.PosX = PosX;
        this.PosY = PosY;
        this.food_sound = new Sound("audio/dead.mp3");
    }

    draw(tileSize, ctx) {
        draw_rectangle("#ff0000", tileSize * Math.round(this.PosX), tileSize * Math.round(this.PosY), tileSize - 1, tileSize - 1, ctx)
    }

    check_snake_colision(snake, tileCountX, tileCountY) {
        if ((Math.round(this.PosX) == Math.round(snake.HeadPosX)) && (Math.round(this.PosY) == Math.round(snake.HeadPosY))) {
            console.log("POISON EATEN - SNAKE IS DEAD!");
            game.stop_game();
            if (sound_is_on) {
                this.food_sound.play();
            }
        }
    }
}

class Snake extends GameObject {
    constructor(game, HeadPosX, HeadPosY, Tail, DirectionX, DirectionY) {
        super(game)
        this.HeadPosX = HeadPosX;
        this.HeadPosY = HeadPosY;
        this.Tail = Tail;
        this.DirectionX = DirectionX;
        this.DirectionY = DirectionY;
        this.velocity = 0.15;
        this.direction = "R";
        this.snakeLength = 3;
    }

    move() {
        this.HeadPosX += this.DirectionX * this.velocity;
        this.HeadPosY += this.DirectionY * this.velocity;

        this.Tail.push({ x: this.HeadPosX, y: this.HeadPosY });

        this.Tail = this.Tail.slice(-1 * this.snakeLength * 5);

    }

    set_direction_key_down() {
        //vlavo
        if (keys[37] || keys[65]) {
            this.direction = "L";
        }

        //vpravo
        if (keys[39] || keys[68]) {
            this.direction = "R";
        }

        //hore
        if (keys[38] || keys[87]) {
            this.direction = "U";
        }

        //dole
        if (keys[40] || keys[83]) {
            this.direction = "D";
        }


        // docasne
        if (keys[32]) {
            console.log(this.snakeLength);
            console.log("Snake ++");
            this.snakeLength += 1;
            console.log(this.snakeLength);
        }


    }

    change_direction() {
        switch (this.direction) {
            case "L":
                if (this.DirectionX !== 1) {
                    this.DirectionX = -1;
                    this.DirectionY = 0;
                }
                break;
            case "U":
                if (this.DirectionY !== 1) {
                    this.DirectionX = 0;
                    this.DirectionY = -1;
                }
                break;
            case "R":
                if (this.DirectionX !== -1) {
                    this.DirectionX = 1;
                    this.DirectionY = 0;
                }
                break;
            case "D":
                if (this.DirectionY !== -1) {
                    this.DirectionX = 0;
                    this.DirectionY = 1;
                }
                break;
        }


    }

    draw(tileSize, ctx) {
        this.Tail.forEach((snakePart) =>
            draw_rectangle("#000000", tileSize * Math.round(snakePart.x), tileSize * Math.round(snakePart.y), tileSize, tileSize, ctx)
        );
        draw_rectangle("#ff0000", tileSize * Math.round(this.HeadPosX), tileSize * Math.round(this.HeadPosY), tileSize - 1, tileSize - 1, ctx)


    }

    food_eaten() {
        this.snakeLength++;
    }

    handle_wall_colision(tileSize, width, height, tileCountX, tileCountY) {
        if (this.HeadPosX > (width - tileSize) / tileSize) {
            this.HeadPosX = 0;
        }
        else if (this.HeadPosX < 0) {
            this.HeadPosX += tileCountX - 1;

        }
        if (this.HeadPosY > (height - tileSize) / tileSize) {
            this.HeadPosY = 0;

        }
        else if (this.HeadPosY < 0) {
            this.HeadPosY += tileCountY - 1;
        }

    }

    snake_touched_wall(game, tileSize, width, height, tileCountX, tileCountY) {
        if ((this.HeadPosX > (width - tileSize) / tileSize) || (this.HeadPosX < 0) || (this.HeadPosY > (height - tileSize) / tileSize) || (this.HeadPosY < 0)) {
            game.stop_game();
            console.log("NARAZIL SOM DO STENY!");
        }
    }

    check_colision_wall(game, level, tileSize, width, height, tileCountX, tileCountY) {
        if (level == 1) {
            this.handle_wall_colision(tileSize, width, height, tileCountX, tileCountY);
        }
        else if (level > 1) {
            this.snake_touched_wall(game, tileSize, width, height, tileCountX, tileCountY)
        }

    }

    check_tail_colision(game) {
        for (let i = 0; i < this.Tail.length - 1; i++) {
            let snakePart = this.Tail[i];
            if (this.HeadPosX === snakePart.x && this.HeadPosY === snakePart.y) {
                console.log("HEAD TOUCHED THE TAIL!");
                game.stop_game();
            }
        }
    }
}



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