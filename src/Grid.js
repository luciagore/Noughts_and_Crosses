function Grid(){
 this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
 this.winStatus = false
}

Grid.prototype.clear = function () {
	this.current = [["", "", ""], ["", "", ""], ["", "", ""]];
	console.log("Grid RESET!");
};
