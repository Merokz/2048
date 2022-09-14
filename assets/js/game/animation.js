
async function animate(x, y, destX, destY, value) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = x * 100 + 10;
    var y = y * 100 + 10;
    var destX = destX * 100 + 10;
    var destY = destY * 100 + 10;
    var value = value;
    var dx = destX - x;
    var dy = destY - y;
    var steps = 30;
    var stepX = dx / steps;
    var stepY = dy / steps;
    var step = 0;
    var interval = setInterval(function () {
        //clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        context.fillStyle = getTileColor(value);
        context.fillRect(x, y, 90, 90);
        context.fillStyle = "#776E65";
        context.fillText(value, x + 40, y + 55);
        x += stepX;
        y += stepY;
        step++;
        if (step == steps) {
            clearInterval(interval);
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            drawBoard();
        }
    }
    , 10);
}


function drawBackground() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    for (var y = 0; y < boardSizeY; y++) {
        for (var x = 0; x < boardSizeX; x++) {
            ctx.fillStyle = "#3c3a32";
            ctx.fillRect(x * 100 + 10, y * 100 + 10, 90, 90);
        }
    }
}

function drawLoop(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawBoard();
    requestAnimationFrame(drawLoop);
}

function drawBoard() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    for (var y = 0; y < boardSizeY; y++) {
        for (var x = 0; x < boardSizeX; x++) {
            ctx.fillStyle = getTileColor(board[y][x]);
            ctx.fillRect(x * 100 + 10, y * 100 + 10, 90, 90);
            if (board[y][x] != 0) {
                ctx.fillStyle = "#776E65";
                //center the text
                var textWidth = ctx.measureText(board[y][x]).width;
                ctx.fillText(board[y][x], x * 100 + 55 - textWidth / 2, y * 100 + 60);
            }
        }
    }
}

