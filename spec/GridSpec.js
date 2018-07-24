'use strict';

describe('Grid', function(){

	var grid;
	beforeEach(function(){
		grid = new Grid();
	});

		it("Should have an array of 3 subarrays and start the game empty", function() {
		  expect(grid.current).toEqual([["","",""],["","",""],["","",""]]);
		});

		it("Should be able to clear the grid", function() {
			grid.clear();
		  expect(grid.current).toEqual([["","",""],["","",""],["","",""]]);
		});

		it("Should be able to check if spaces contain equal elements", function() {
			grid.checkWin();
			expect(grid.winStatus).toEqual(false);
		})

});
