'use strict';

describe('Grid', function(){

	var grid;
	beforeEach(function(){
		grid = new Grid();
	});

    it("Should have an array of 3 subarrays and start the game empty", function() {
      expect(grid.current).toEqual([["","",""],["","",""],["","",""]]);
    });

});
