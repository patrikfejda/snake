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
