//create a little 2048 game
var board = [];
var boardSizeX = 4;
var boardSizeY = 4;
var score = 0;
var highScore = 0;

function GameStart() {
  score = 0;
  initBoard();
  addRandomTile();
  addRandomTile();
  drawBoard();
}

function initBoard() {
  boardSizeX = document.getElementById("boardSizeX").value;
  boardSizeY = document.getElementById("boardSizeY").value;
  createBoard();
  calculateCanvasSize();
}
    

createBoard = function() {
  for (var y = 0; y < boardSizeY; y++) {
    board[y] = [];
    for (var x = 0; x < boardSizeX; x++) {
      board[y][x] = 0;
    }
  }
}

function printBoard() {
  for (var y = 0; y < boardSizeY; y++) {
    console.log(board[y]);
  }
}

function calculateCanvasSize() {
  var canvas = document.getElementById("canvas");
  canvas.style.width = (boardSizeX*100+20) + "px";
  canvas.style.height = (boardSizeY*100+20) + "px";
  //calculate the resolution
  var width = canvas.offsetWidth;
  var height = canvas.offsetHeight;
  canvas.width = width;
  canvas.height = height;
}

function drawBoard() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  //clear the old board
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "30px Arial";
  for (var y = 0; y < boardSizeY; y++) {
    for (var x = 0; x < boardSizeX; x++) {
      ctx.fillStyle = getTileColor(board[y][x]);
      ctx.fillRect(x*100+10, y*100+10, 90, 90);
      if (board[y][x] != 0) {
        ctx.fillStyle = "#776E65";
        //center the text
        var textWidth = ctx.measureText(board[y][x]).width;
        ctx.fillText(board[y][x], x*100+55-textWidth/2, y*100+60);
        
      }
    }
  }
}

function getTileColor(value) {
  switch (value) {
    case 2:
      return "#eee4da";
      break;
    case 4:
      return "#ede0c8";
      break;
    case 8:
      return "#f2b179";
      break;
    case 16:
      return "#f59563";
      break;
    case 32:
      return "#f67c5f";
      break;
    case 64:
      return "#f65e3b";
      break;
    case 128:
      return "#edcf72";
      break;
    case 256:
      return "#edcc61";
      break;
    case 512:
      return "#edc850";
      break;
    case 1024:
      return "#edc53f";
      break;
    case 2048:
      return "#edc22e";
      break;
    default:
      return "#3c3a32";
      break;
  }
}

function updateScore() {
  document.getElementById("score").innerHTML = score;
  if (score > highScore) {
    highScore = score;
    document.getElementById("highScore").innerHTML = highScore;
  }
}

function addRandomTile() {
  var emptyTiles = [];
  for (var y = 0; y < boardSizeY; y++) {
    for (var x = 0; x < boardSizeX; x++) {
      if (board[y][x] == 0) {
        emptyTiles.push([y, x]);
      }
    }
  }
  if (emptyTiles.length > 0) {
    var randomTile = emptyTiles[Math.floor(Math.random()*emptyTiles.length)];
    board[randomTile[0]][randomTile[1]] = 2;
  }
}

function move(direction) {
  var moved = false;
  if (direction == "up") {
    for (var x = 0; x < boardSizeX; x++) {
      for (var y = 0; y < boardSizeY; y++) {
        if (board[y][x] != 0) {
          var newY = y;

          while (newY > 0 && board[newY-1][x] == 0) {
            board[newY-1][x] = board[newY][x];
            board[newY][x] = 0;
            newY--;
            moved = true;
          }
          if (newY > 0 && board[newY-1][x] == board[newY][x]) {
            board[newY-1][x] *= 2;
            board[newY][x] = 0;
            score += board[newY-1][x];
            moved = true;
          }
          
        }
      }
    }
  }
  if (direction == "down") {
    for (var x = 0; x < boardSizeX; x++) {
      for (var y = boardSizeY-1; y >= 0; y--) {
        if (board[y][x] != 0) {
          var newY = y;
          while (newY < boardSizeY-1 && board[newY+1][x] == 0) {
            board[newY+1][x] = board[newY][x];
            board[newY][x] = 0;
            newY++;
            moved = true;
          }
          if (newY < boardSizeY-1 && board[newY+1][x] == board[newY][x]) {
            board[newY+1][x] *= 2;
            board[newY][x] = 0;
            score += board[newY+1][x];
            moved = true;
          }
        }
      }
    }
  }
  if (direction == "left") {
    for (var y = 0; y < boardSizeY; y++) {
      for (var x = 0; x < boardSizeX; x++) {
        if (board[y][x] != 0) {
          var newX = x;
          while (newX > 0 && board[y][newX-1] == 0) {
            board[y][newX-1] = board[y][newX];
            board[y][newX] = 0;
            newX--;
            moved = true;
          }
          if (newX > 0 && board[y][newX-1] == board[y][newX]) {
            board[y][newX-1] *= 2;
            board[y][newX] = 0;
            score += board[y][newX-1];
            moved = true;
          }
        }
      }
    }
  }
  if (direction == "right") {
    for (var y = 0; y < boardSizeY; y++) {
      for (var x = boardSizeX-1; x >= 0; x--) {
        if (board[y][x] != 0) {
          var newX = x;
          while (newX < boardSizeX-1 && board[y][newX+1] == 0) {
            board[y][newX+1] = board[y][newX];
            board[y][newX] = 0;
            newX++;
            moved = true;
          }
          if (newX < boardSizeX-1 && board[y][newX+1] == board[y][newX]) {
            board[y][newX+1] *= 2;
            board[y][newX] = 0;
            score += board[y][newX+1];
            moved = true;
          }
        }
      }
    }
  }
  if (moved) {
    addRandomTile();
    updateScore();
    drawBoard();
    if(checkGameOver()) {
      //append to the stats div a text node with the score and write game over
      var stats = document.getElementById("stats");
      var text = document.createTextNode("Game Over! Score: " + score);
      stats.appendChild(text);
    }
  }
}

function checkGameOver(){
  for (var y = 0; y < boardSizeY; y++) {
    for (var x = 0; x < boardSizeX; x++) {
      if (board[y][x] == 0) {
        return false;
      }
      if (x < boardSizeX-1 && board[y][x] == board[y][x+1]) {
        return false;
      }
      if (y < boardSizeY-1 && board[y][x] == board[y+1][x]) {
        return false;
      }
    }
  }
  return true;
}


  