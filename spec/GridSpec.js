'use strict';

describe('Grid', function(){

	var grid;
	beforeEach(function(){
		grid = new Grid();
	});

		it("Should have an array of 3 subarrays and start the game empty", function() {
		  expect(grid.show()).toEqual([["","",""],["","",""],["","",""]]);
		});

		it("Should have a win status of false to start", function() {
			expect(grid.gameWon()).toEqual(false)
		});

		it("Should be able to clear the grid if win status is true", function() {
			grid.winStatus = true
			grid.clear();
		  expect(grid.show()).toEqual([["","",""],["","",""],["","",""]]);
		});

		it("Should be able to check if spaces contain equal elements", function() {
			grid.checkWin();
			expect(grid.gameWon()).toEqual(false);
		});

		it("Should be able to force clear the board", function() {
			grid.forceClear();
		  expect(grid.show()).toEqual([["","",""],["","",""],["","",""]]);
		});

});
