function Grid(){
 this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
 this.winStatus = false
}

Grid.prototype.clear = function () {
  if(this.wintStatus = true) {
	this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
  return "Grid Reset!"
} else {return "Game still in play!"}
};

Grid.prototype.forceClear = function () {
  this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
  return "Grid Reset!"
};


Grid.prototype.checkWin = function () {
  if( areEqual(this.current[0][0], this.current[0][1], this.current[0][2]) ) {
  return this.current[0][0] + " has won";
  this.winStatus = true;
} else if (areEqual(this.current[1][0], this.current[1][1], this.current[1][2])) {
  return this.current[1][0] + " has won";
  this.winStatus = true;
} else if (areEqual(this.current[2][0], this.current[2][1], this.current[2][2])) {
  return this.current[2][0] + " has won";
  this.winStatus = true;
} else if (areEqual(this.current[0][0], this.current[1][0], this.current[2][0])) {
  return this.current[0][0] + " has won";
  this.winStatus = true;
} else if (areEqual(this.current[0][1], this.current[1][1], this.current[2][1])) {
  return this.current[0][1] + " has won";
  this.winStatus = true;
} else if (areEqual(this.current[0][2], this.current[1][2], this.current[2][2])) {
  return this.current[0][2] + " has won";
  this.winStatus = true;
} else if (areEqual(this.current[0][0], this.current[1][1], this.current[2][2])) {
  return this.current[0][0] + " has won";
  this.winStatus = true;
} else if (areEqual(this.current[0][2], this.current[1][1], this.current[2][0])) {
  return this.current[0][2] + " has won";
  this.winStatus = true;
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
