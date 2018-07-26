'use strict';

describe('Player', function(){

  var player;
	beforeEach(function(){
		player = new Player();
	});

  it("Should have an empty grid to start with", function() {
    spyOn(player.grid(), 'show').and.returnValue([["","",""],["","",""],["","",""]])
    expect(player.grid().show()).toEqual([["","",""],["","",""],["","",""]]);
  });

  it("Should start on player x's turn", function() {
    expect(player.XTurn()).toEqual(true);
  });

  it("Should always play an X first", function() {
    spyOn(player.grid(), 'show').and.returnValue([["","",""],["","X",""],["","",""]])
    player.playTurn(1, 1);
    expect(player.grid().show()).toEqual([["","",""],["","X",""],["","",""]])
  });

  it("Should always play an O after an X", function() {
    spyOn(player.grid(), 'show').and.returnValue([["","",""],["O","X",""],["","",""]])
    player.playTurn(1, 1);
    player.playTurn(1, 0);
    expect(player.grid().show()).toEqual([["","",""],["O","X",""],["","",""]])
  });

});
