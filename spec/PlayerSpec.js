'use strict';

describe('Player', function(){

  var player;
  var grid;
	beforeEach(function(){
		player = new Player();
    grid = new Grid();
	});

  it("Should have an empty grid to start with", function() {
    expect(player._grid.current).toEqual([["","",""],["","",""],["","",""]]);
  });

  it("player can add an X", function() {
    player.playerX(1, 1);
    expect(player._grid.current).toEqual([["","",""],["","X",""],["","",""]])
  });

  it("player can add an O", function() {
    player.playerX(1, 1);
    player.playerO(1, 0);
    expect(player._grid.current).toEqual([["","",""],["O","X",""],["","",""]])
  });

});
