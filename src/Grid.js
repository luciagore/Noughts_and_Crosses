function Grid(){
 this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
}

Grid.prototype.addX = function (row, column) {
	this.current[row][column] = "X"
};

Grid.prototype.addO = function (row, column) {
	this.current[row][column] = "O"
};
