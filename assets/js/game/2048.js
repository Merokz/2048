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


createBoard = function () {
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
  canvas.style.width = (boardSizeX * 100 + 20) + "px";
  canvas.style.height = (boardSizeY * 100 + 20) + "px";
  //calculate the resolution
  var width = canvas.offsetWidth;
  var height = canvas.offsetHeight;
  canvas.width = width;
  canvas.height = height;
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
    var randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    board[randomTile[0]][randomTile[1]] = Math.random() < 0.9 ? 2 : 4;
  }
}

function checkGameOver() {
  for (var y = 0; y < boardSizeY; y++) {
    for (var x = 0; x < boardSizeX; x++) {
      if (board[y][x] == 0) {
        return false;
      }
      if (x < boardSizeX - 1 && board[y][x] == board[y][x + 1]) {
        return false;
      }
      if (y < boardSizeY - 1 && board[y][x] == board[y + 1][x]) {
        return false;
      }
    }
  }
  return true;
}


