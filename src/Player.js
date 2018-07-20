function Player(){
  this.moves = []
}



Player.prototype.playerX = function (row, column) {
  this.moves.push([row, column]);
};

Player.prototype.playerO = function (row, column) {
  this.moves.push([row, column]);
};
