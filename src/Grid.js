function Grid(){
 this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
 this.winStatus = false
}

Grid.prototype.clear = function () {
  if(this.wintStatus = true) {
	this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
  this.winStatus = false
  return "Grid Reset!"
} else {return "Game still in play!"}
};

Grid.prototype.forceClear = function () {
  this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
  this.winStatus = false
  return "Grid Reset!"
};

Grid.prototype.show = function () {
  return this.current;
};

Grid.prototype.gameWon = function () {
  return this.winStatus;
};


Grid.prototype.checkWin = function () {
  if( areEqual(this.current[0][0], this.current[0][1], this.current[0][2]) ) {
  this.winStatus = true;
  return this.current[0][0];
} else if (areEqual(this.current[1][0], this.current[1][1], this.current[1][2])) {
  this.winStatus = true;
  return this.current[1][0];
} else if (areEqual(this.current[2][0], this.current[2][1], this.current[2][2])) {
  this.winStatus = true;
  return this.current[2][0];
} else if (areEqual(this.current[0][0], this.current[1][0], this.current[2][0])) {
  this.winStatus = true;
  return this.current[0][0];
} else if (areEqual(this.current[0][1], this.current[1][1], this.current[2][1])) {
  this.winStatus = true;
  return this.current[0][1];
} else if (areEqual(this.current[0][2], this.current[1][2], this.current[2][2])) {
  this.winStatus = true;
  return this.current[0][2];
} else if (areEqual(this.current[0][0], this.current[1][1], this.current[2][2])) {
  this.winStatus = true;
  return this.current[0][0];
} else if (areEqual(this.current[0][2], this.current[1][1], this.current[2][0])) {
  this.winStatus = true;
  return this.current[0][2];
}

  function areEqual(){
     var len = arguments.length;
     for (var i = 1; i< len; i++){
        if (arguments[i] === "" || arguments[i] !== arguments[i-1])
           return false;
     }
     return true;
  }
};
