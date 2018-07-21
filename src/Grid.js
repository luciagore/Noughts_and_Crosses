function Grid(){
 this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
 this.winStatus = false
}

Grid.prototype.clear = function () {
	this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
	console.log("Grid RESET!");
};

Grid.prototype.XWin = function() {
	var rows = [[["X","X","X"],["","",""],["","",""]],
	[["","",""],["X","X","X"],["","",""]],
	[["","",""],["","",""],["X","X","X"]]]

	var columns = [[["X","",""],["X","",""],["X","",""]],
	[["","X",""],["","X",""],["","X",""]],
	[["","","X"],["","","X"],["","","X"]]]

	var diagonals = [[["X","",""],["","X",""],["","","X"]],
	[["","","X"],["","X",""],["X","",""]]]


	for(var testArr = 0; testArr <= 2; testArr++){
		if(String(this.current) === String(rows[testArr])) {
			this.winStatus = true;
		}
		if(String(this.current) === String(columns[testArr])) {
			this.winStatus = true;
		}
	}
	for(var testArr = 0; testArr <= 1; testArr++){
		if(String(this.current) === String(diagonals[testArr])) {
			this.winStatus = true;
		}
	}
};
