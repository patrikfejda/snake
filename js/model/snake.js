class Snake {
    constructor(HeadPosX, HeadPosY, Tail, DirectionX, DirectionY, KeyUp, KeyDown, KeyRight, KeyLeft) {
        this.HeadPosX = HeadPosX;
        this.HeadPosY = HeadPosY;
        this.Tail = Tail;
        this.DirectionX = DirectionX;
        this.DirectionY = DirectionY;
        this.KeyUp = KeyUp;
        this.KeyDown = KeyDown;
        this.KeyRight = KeyRight;
        this.KeyLeft = KeyLeft;

    }
    move(direction) {
        switch (direction) {
            case "L":
                if (DirectionX !== 1) {
                    DirectionX = -1;
                    DirectionY = 0;
                }
                break;
            case "U":
                if (DirectionY !== 1) {
                    DirectionX = 0;
                    DirectionY = -1;
                }
                break;
            case "R":
                if (DirectionX !== -1) {
                    DirectionX = 1;
                    DirectionY = 0;
                }
                break;
            case "D":
                if (DirectionY !== -1) {
                    DirectionX = 0;
                    DirectionY = 1;
                }
                break;
        }
    }
}
