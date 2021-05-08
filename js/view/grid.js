// VIEW

function drawGrid(tileCountX, tileCountY, tileSize, ctx) {
    for (let i = 0; i < tileCountX; i++) {
        for (let j = 0; j < tileCountY; j++) {
            draw_rectangle("#ffff01", tileSize * i, tileSize * j, tileSize - 1, tileSize - 1, ctx);
        }
    }
}