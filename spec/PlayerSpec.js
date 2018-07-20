'use strict';

describe('Player', function(){

  var player;
  var grid;
	beforeEach(function(){
		player = new Player();
    grid = [["", "", ""], ["", "", ""], ["", "", ""]];
	});

  it("Should have an empty grid to start with", function() {
    expect(grid).toEqual([["","",""],["","",""],["","",""]]);
  });

  it("player can add an X", function() {
    player.playerX(grid, 1, 1);
    expect(grid).toEqual([["","",""],["","X",""],["","",""]])
  });

  it("player can add an O", function() {
    player.playerX(grid, 1, 1);
    player.playerO(grid, 1, 0);
    expect(grid).toEqual([["","",""],["O","X",""],["","",""]])
  });

});
