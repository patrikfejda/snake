// draw rectangle
function draw_rectangle(color, x, y, width, height,ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function display_element_by_element_id(element_id, display_type) {
    document.getElementById(element_id).style = "display:" + display_type + ";";
}
