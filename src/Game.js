function Game(grid, player1, player2){
  this._grid = typeof grid !== 'undefined' ? grid : new Grid();
  this._player1 = typeof player1 !== 'undefined' ? player1 : new Player();
  this._player2 = typeof player2 !== 'undefined' ? player2 : new Player();
}
