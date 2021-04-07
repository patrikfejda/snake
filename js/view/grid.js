// VIEW

function drawGrid(tileCountX,tileCountY,tileSize,ctx) {
    for (let i = 0; i < tileCountX; i++) {
        for (let j = 0; j < tileCountY; j++) {
            ctx.fillStyle = "#ffff01";
            ctx.fillRect(tileSize * i, tileSize * j, tileSize - 1, tileSize - 1);
        }
    }
}