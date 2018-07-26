'use strict';

describe('Player', function(){

  var player;
	beforeEach(function(){
		player = new Player();
	});

  it("Should have an empty grid to start with", function() {
    expect(player._grid.current).toEqual([["","",""],["","",""],["","",""]]);
  });

  it("Should start on player x's turn", function() {
    expect(player.xturn).toEqual(true);
  });

  it("Should always play an X first", function() {
    player.playTurn(1, 1);
    expect(player._grid.current).toEqual([["","",""],["","X",""],["","",""]])
  });

  it("Should always play an O after an X", function() {
    player.playTurn(1, 1);
    player.playTurn(1, 0);
    expect(player._grid.current).toEqual([["","",""],["O","X",""],["","",""]])
  });

});
