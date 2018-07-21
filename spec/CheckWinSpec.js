describe("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  describe("Player X wins", function() {

    it("X top row", function() {
      player.playerX(0,0);
      player.playerX(0,1);
      player.playerX(0,2);
      player._grid.XWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X mid row", function() {
      player.playerX(1,0);
      player.playerX(1,1);
      player.playerX(1,2);
      player._grid.XWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X bottom row", function() {
      player.playerX(2,0);
      player.playerX(2,1);
      player.playerX(2,2);
      player._grid.XWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X left column", function() {
      player.playerX(0,0);
      player.playerX(1,0);
      player.playerX(2,0);
      player._grid.XWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X mid column", function() {
      player.playerX(0,1);
      player.playerX(1,1);
      player.playerX(2,1);
      player._grid.XWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X right column", function() {
      player.playerX(0,2);
      player.playerX(1,2);
      player.playerX(2,2);
      player._grid.XWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X diaganol 1", function() {
      player.playerX(0,0);
      player.playerX(1,1);
      player.playerX(2,2);
      player._grid.XWin();
      expect(player._grid.winStatus).toEqual(true);
    });

    it("X diaganol 2", function() {
      player.playerX(0,2);
      player.playerX(1,1);
      player.playerX(2,0);
      player._grid.XWin();
      expect(player._grid.winStatus).toEqual(true);
    });


  });

});
