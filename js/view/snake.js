function drawSnake(tileCountX, tileCountY, tileSize, ctx,snake) {
    let i = snake.HeadPosX;
    let j = snake.HeadPosY;
    ctx.fillStyle = "#906090";
    ctx.fillRect(tileSize * i, tileSize * j, tileSize - 1, tileSize - 1);


}
