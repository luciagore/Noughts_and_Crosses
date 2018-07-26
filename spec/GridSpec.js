'use strict';

describe('Grid', function(){

	var grid;
	beforeEach(function(){
		grid = new Grid();
	});

		it("Should have an array of 3 subarrays and start the game empty", function() {
		  expect(grid.current).toEqual([["","",""],["","",""],["","",""]]);
		});

		it("Should have a win status of false to start", function() {
			expect(grid.winStatus).toEqual(false)
		});

		it("Should be able to clear the grid if win status is true", function() {
			grid.winStatus = true
			grid.clear();
		  expect(grid.current).toEqual([["","",""],["","",""],["","",""]]);
		});

		it("Should be able to check if spaces contain equal elements", function() {
			grid.checkWin();
			expect(grid.winStatus).toEqual(false);
		});

		it("Should be able to force clear the board", function() {
			grid.winStatus = false
			grid.forceClear();
		  expect(grid.current).toEqual([["","",""],["","",""],["","",""]]);
		});

});
