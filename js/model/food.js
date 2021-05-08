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
