class Food extends GameObject {
    constructor(game, PosX, PosY) {
        super(game)
        this.PosX = PosX;
        this.PosY = PosY;
    }

    generate_new_position(tileCountX,tileCountY) {
        this.PosX = Math.floor(Math.random() * tileCountX);
        this.PosY = Math.floor(Math.random() * tileCountY);

        // doplnit check ci sa nenachadza na snakovi
    }

    draw(tileSize, ctx) {
        draw_rectangle("#51db24", tileSize * Math.round(this.PosX), tileSize * Math.round(this.PosY), tileSize - 1, tileSize - 1, ctx)
    }
    
    check_snake_colision(snake,tileCountX,tileCountY) {
        if ((Math.round(this.PosX) == Math.round(snake.HeadPosX)) && (Math.round(this.PosY) == Math.round(snake.HeadPosY)))  {
            console.log("mnam");
            // skore ++
            snake.food_eaten();
            this.generate_new_position(tileCountX,tileCountY);
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

    food_eaten(){
        this.snakeLength++;
    }



}



class Game extends GameObject {
    constructor() {
        super(undefined)

        this.dead_sound = new Sound("audio/dead.mp3");
        this.food_sound = new Sound("audio/food.mp3");

        this.canvas = document.getElementById("myCanvas");

        this.ctx = this.canvas.getContext("2d");

        this.fps = 1;
        this.tileSize = 50;
        this.tileCountX = this.canvas.width / this.tileSize;
        this.tileCountY = this.canvas.height / this.tileSize;

    }



    gameLoopSingleplayer(snake, food) {

        // draw
        drawGrid(this.tileCountX, this.tileCountY, this.tileSize, this.ctx);
        food.draw(this.tileSize, this.ctx);
        snake.draw(this.tileSize, this.ctx);

        // move
        snake.move();
        snake.set_direction_key_down();
        snake.change_direction();

        // check

        food.check_snake_colision(snake,this.tileCountX,this.tileCountY);




        requestAnimationFrame(() => this.gameLoopSingleplayer(snake, food));

    }


}