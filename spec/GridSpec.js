'use strict';

describe('Grid', function(){

	var grid;
	beforeEach(function(){
		grid = new Grid();
	});

    it("Should have an array of 3 subarrays and start the game empty", function() {
      expect(grid.current).toEqual([["","",""],["","",""],["","",""]]);
    });

		it("Should change a grid space to X when called", function() {
			grid.addX(0, 0)
      expect(grid.current).toEqual([["X","",""],["","",""],["","",""]]);
    });

		it("Should change a grid space to O when called", function() {
			grid.addX(0, 0)
			grid.addO(0, 1)
			expect(grid.current).toEqual([["X","O",""],["","",""],["","",""]]);
		});

});
