'use strict';

describe('Player', function(){

  var player;
	beforeEach(function(){
		player = new Player();
	});

  it("Should have an empty array to hold all the moves", function() {
    expect(player.moves).toEqual([]);
  });

  it("Should add the moves of each player to the moves array", function() {
    player.playerO(1, 1);
    player.playerX(1, 0);
    expect(player.moves).toEqual([[1, 1], [1, 0]])
  });

});
