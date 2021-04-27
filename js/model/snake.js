class Snake extends GameObject {
    constructor(game, HeadPosX, HeadPosY, Tail, DirectionX, DirectionY) {
        super(game)
        this.HeadPosX = HeadPosX;
        this.HeadPosY = HeadPosY;
        this.Tail = Tail;
        this.DirectionX = DirectionX;
        this.DirectionY = DirectionY;
        this.velocity = 0.1;
    }
    set_direction_key_down() {


        this.HeadPosX += this.DirectionX * this.velocity;
        this.HeadPosY += this.DirectionY * this.velocity;
        console.log("set");

        //lavo
        if (keys[37] || keys[65]) {
            console.log("L");
            this.move("L");
        }

        //pravo
        if (keys[39] || keys[68]) {
            this.move("R");

        }

        //hore
        if (keys[38] || keys[87]) {
            this.move("U");
        }

        //dole
        if (keys[40] || keys[83]) {
            this.move("D");
        }

    }

    move(direction) {
        console.log("move");
        switch (direction) {
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
        rectangle("#906090", tileSize * this.HeadPosX, tileSize * this.HeadPosY, tileSize - 1, tileSize - 1, ctx)
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



    gameLoopSingleplayer(snake) {
        drawGrid(this.tileCountX, this.tileCountY, this.tileSize, this.ctx);


        // draw snake

        snake.draw(this.tileSize, this.ctx);

        // move snake

        snake.set_direction_key_down();


        // draw food

        // check colisions

        requestAnimationFrame(() => this.gameLoopSingleplayer(snake));

    }


}