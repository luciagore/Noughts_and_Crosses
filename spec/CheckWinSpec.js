describe("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  describe("Player X wins", function() {

    it("X top row", function() {
      player.playTurn(0,0);
      player.playTurn(1,1);
      player.playTurn(0,1);
      player.playTurn(1,0);
      player.playTurn(0,2);
      player._grid.checkWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X mid row", function() {
      player.playTurn(1,0);
      player.playTurn(2,0);
      player.playTurn(1,1);
      player.playTurn(0,1);
      player.playTurn(1,2);
      player._grid.checkWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X bottom row", function() {
      player.playTurn(2,0);
      player.playTurn(1,1);
      player.playTurn(2,1);
      player.playTurn(1,0);
      player.playTurn(2,2);
      player._grid.checkWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X left column", function() {
      player.playTurn(0,0);
      player.playTurn(0,1);
      player.playTurn(1,0);
      player.playTurn(0,2);
      player.playTurn(2,0);
      player._grid.checkWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X mid column", function() {
      player.playTurn(0,1);
      player.playTurn(0,0);
      player.playTurn(1,1);
      player.playTurn(2,0);
      player.playTurn(2,1);
      player._grid.checkWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X right column", function() {
      player.playTurn(0,2);
      player.playTurn(1,0);
      player.playTurn(1,2);
      player.playTurn(0,0);
      player.playTurn(2,2);
      player._grid.checkWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X diaganol 1", function() {
      player.playTurn(0,0);
      player.playTurn(0,1);
      player.playTurn(1,1);
      player.playTurn(0,2);
      player.playTurn(2,2);
      player._grid.checkWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X diaganol 2", function() {
      player.playTurn(0,2);
      player.playTurn(0,0);
      player.playTurn(1,1);
      player.playTurn(0,1);
      player.playTurn(2,0);
      player._grid.checkWin();
      expect(player._grid.winStatus).toEqual(true);
    });


  });

});
