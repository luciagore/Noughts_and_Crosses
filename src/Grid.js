function Grid(){
 this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
 this.winStatus = false
}

Grid.prototype.clear = function () {
	this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
	console.log("Grid RESET!");
};

Grid.prototype.checkWin = function () {
  if( areEqual(this.current[0][0], this.current[0][1], this.current[0][2]) ) {
  console.log(this.current[0][0] + " has won");
  this.winStatus = true;
} else if (areEqual(this.current[1][0], this.current[1][1], this.current[1][2])) {
  console.log(this.current[1][0] + " has won");
  this.winStatus = true;
} else if (areEqual(this.current[2][0], this.current[2][1], this.current[2][2])) {
  console.log(this.current[2][0] + " has won");
  this.winStatus = true;
} else if (areEqual(this.current[0][0], this.current[1][0], this.current[2][0])) {
  console.log(this.current[0][0] + " has won");
  this.winStatus = true;
} else if (areEqual(this.current[0][1], this.current[1][1], this.current[2][1])) {
  console.log(this.current[0][1] + " has won");
  this.winStatus = true;
} else if (areEqual(this.current[0][2], this.current[1][2], this.current[2][2])) {
  console.log(this.current[0][2] + " has won");
  this.winStatus = true;
} else if (areEqual(this.current[0][0], this.current[1][1], this.current[2][2])) {
  console.log(this.current[0][0] + " has won");
  this.winStatus = true;
} else if (areEqual(this.current[0][2], this.current[1][1], this.current[2][0])) {
  console.log(this.current[0][2] + " has won");
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
