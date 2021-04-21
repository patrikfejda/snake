function keyPush(event) {
    switch (event.key) {
        case "ArrowLeft":
            console.log("left");
            break;
        case "ArrowUp":
            console.log("up");
            break;
        case "ArrowRight":
            console.log("right");
            break;
        case "ArrowDown":
            console.log("down");
            break;
        default:
            console.log(event.key + " - pressed - dont know what to do.")
            break;
    }
}


document.addEventListener("keydown", keyPush);