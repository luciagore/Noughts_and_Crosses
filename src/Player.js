function Player(){
}

Player.prototype.playerX = function (grid, row, column) {
  grid[row][column] = "X"
};

Player.prototype.playerO = function (grid, row, column) {
  grid[row][column] = "O"
};
