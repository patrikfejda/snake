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


