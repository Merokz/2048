class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        //create board with 0s
        this.board = [];
        for (var y = 0; y < this.height; y++) {
            this.board[y] = [];
            for (var x = 0; x < this.width; x++) {
                this.board[y][x] = 0;
            }
        }
    }
}