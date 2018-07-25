function Player(){
  this._grid = new Grid();
  this.xturn = true
}


Player.prototype.playTurn = function (row, column) {
  var row = row;
  var column = column;
  var players = this;

  if (this.xturn === true){
    playerX(row, column);
    this.xturn = false
  } else if (this.xturn === false) {
    playerO(row, column);
    this.xturn = true
  }


  function playerX (row, column) {
    if(players._grid.current[row][column] == "X" || players._grid.current[row][column] == "O"){
   	 console.log("Space already taken");
   } else{players._grid.current[row][column] = "X";
    }
  }


  function playerO (row, column) {
    if(players._grid.current[row][column] == "X" || players._grid.current[row][column] == "O"){
     console.log("Space already taken");
   } else{players._grid.current[row][column] = "O";
    }
  }
};
