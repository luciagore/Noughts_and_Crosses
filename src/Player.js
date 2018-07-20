function Player(){
  this._grid = new Grid();
}

Player.prototype.playerX = function (row, column) {
  if(this._grid.current[row][column] == "X" || this._grid.current[row][column] == "O"){
 	 console.log("Space already taken");
    } else{this._grid.current[row][column] = "X";
  }
};

Player.prototype.playerO = function (row, column) {
  if(this._grid.current[row][column] == "X" || this._grid.current[row][column] == "O"){
 	 console.log("Space already taken");
    } else{this._grid.current[row][column] = "O";
  }
};
