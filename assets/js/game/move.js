function move(direction) {
  var oldBoard = [];
  var moved = false;
  for (var y = 0; y < boardSizeY; y++) {
    oldBoard[y] = [];
    for (var x = 0; x < boardSizeX; x++) {
      oldBoard[y][x] = board[y][x];
    }
  }

  if (direction == "up") {
    for (var x = 0; x < boardSizeX; x++) {
      for (var y = 0; y < boardSizeY - 1; y++) {
        if (board[y][x] != 0) {
          //check if there is a tile below, that has the same value, if so merge them, but only if the tile below is not already merged
          var yLower = y + 1;
          while (yLower < boardSizeY - 1 && board[yLower][x] == 0) {
            yLower++;
          }
          if (board[y][x] == board[yLower][x]) {
            board[y][x] = board[y][x] * 2;
            board[yLower][x] = 0;
            score += board[y][x] * 2;
          }
        }
      }
    }
    //move the tiles up as far as possible
    for (var x = 0; x < boardSizeX; x++) {
      for (var y = 0; y < boardSizeY; y++) {
        if (board[y][x] != 0) {
          var newY = y;
          while (newY > 0 && board[newY - 1][x] == 0) {
            board[newY - 1][x] = board[newY][x];
            board[newY][x] = 0;
            newY--;
          }
        }
      }
    }
  }
  else if (direction == "down") {
    for (var x = 0; x < boardSizeX; x++) {
      for (var y = boardSizeY - 1; y > 0; y--) {
        if (board[y][x] != 0) {
          var yLower = y - 1;
          while (yLower > 0 && board[yLower][x] == 0) {
            yLower--;
          }
          if (board[y][x] == board[yLower][x]) {
            board[y][x] = board[y][x] * 2;
            board[yLower][x] = 0;
            score += board[y][x] * 2;
            moved = true;
          }
        }
      }
    }
    //move the tiles up as far as possible
    for (var x = 0; x < boardSizeX; x++) {
      for (var y = boardSizeY - 1; y >= 0; y--) {
        if (board[y][x] != 0) {
          var newY = y;
          while (newY < boardSizeY - 1 && board[newY + 1][x] == 0) {
            board[newY + 1][x] = board[newY][x];
            board[newY][x] = 0;
            newY++;
          }
        }
      }
    }
  }
  else if (direction == "left") {
    for (var y = 0; y < boardSizeY; y++) {
      for (var x = 0; x < boardSizeX - 1; x++) {
        if (board[y][x] != 0) {
          var xLower = x + 1;
          while (xLower < boardSizeX - 1 && board[y][xLower] == 0) {
            xLower++;
          }
          if (board[y][x] == board[y][xLower]) {
            board[y][x] = board[y][x] * 2;
            board[y][xLower] = 0;
            score += board[y][x] * 2;
            moved = true;
          }
        }
      }
    }
    for (var y = 0; y < boardSizeY; y++) {
      for (var x = 0; x < boardSizeX; x++) {
        if (board[y][x] != 0) {
          var newX = x;
          while (newX > 0 && board[y][newX - 1] == 0) {
            board[y][newX - 1] = board[y][newX];
            board[y][newX] = 0;
            newX--;
          }
        }
      }
    }
  }
  else if (direction == "right") {
    for (var y = 0; y < boardSizeY; y++) {
      for (var x = boardSizeX - 1; x > 0; x--) {
        if (board[y][x] != 0) {
          var xLower = x - 1;
          while (xLower > 0 && board[y][xLower] == 0) {
            xLower--;
          }
          if (board[y][x] == board[y][xLower]) {
            board[y][x] = board[y][x] * 2;
            board[y][xLower] = 0;
            score += board[y][x] * 2;
            moved = true;
          }
        }
      }
    }
    for (var y = 0; y < boardSizeY; y++) {
      for (var x = boardSizeX - 1; x >= 0; x--) {
        if (board[y][x] != 0) {
          var newX = x;
          while (newX < boardSizeX - 1 && board[y][newX + 1] == 0) {
            board[y][newX + 1] = board[y][newX];
            board[y][newX] = 0;
            newX++;
          }
        }
      }
    }
  }
    //check if the board has changed by comparing it to the old board
  for (var y = 0; y < boardSizeY; y++) {
    for (var x = 0; x < boardSizeX; x++) {
      if (board[y][x] != oldBoard[y][x]) {
        moved = true;
      }
    }
  }
  if (moved) {
    updateScore();
    addRandomTile();
    drawBoard();
    if (checkGameOver()) {
      //append to the stats div a text node with the score and write game over
      var stats = document.getElementById("stats");
      var text = document.createTextNode("Game Over! Score: " + score);
      stats.appendChild(text);
    }
  }
}


