function Player(){
  this._grid = new Grid();
  this.xturn = true
}

Player.prototype.grid = function () {
  return this._grid;
};

Player.prototype.XTurn = function () {
  return this.xturn;
};


Player.prototype.playTurn = function (row, column) {
  var row = row;
  var column = column;
  var players = this;

  if (this.xturn === true){
    if(players.grid().current[row][column] == "X"
    || players.grid().current[row][column] == "O"){
   	 console.log("Space already taken");
     this.xturn = true
   } else {
     playerX(row, column);
     this.xturn = false
   };
 } else {
   if(players.grid().current[row][column] == "X"
   || players._grid.current[row][column] == "O"){
    console.log("Space already taken");
    this.xturn = false
  } else {
    playerO(row, column);
    this.xturn = true
  }
}


  function playerX (row, column) {
    players.grid().current[row][column] = "X";
  }


  function playerO (row, column) {
    players.grid().current[row][column] = "O";
  }
};
