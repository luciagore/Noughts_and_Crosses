$(document).ready(function() {

  var player = new Player();

  $('#playerXsubmit').submit(function(event) {
    event.preventDefault();
    var name = $('#playerX').val();
    $('#player1').text(name);
  })

  $('#playerOsubmit').submit(function(event) {
    event.preventDefault();
    var name1 = $('#playerO').val();
    $('#player2').text(name1);
  })

  $('#0-0').click(function() {
    player.playerX(0,0);
    updateGrid();
    eachTurn();
  });

  $('#0-1').click(function() {
    player.playerX(0,1);
    updateGrid();
  });

  $('#0-2').click(function() {
    player.playerX(0,2);
    updateGrid();
  });


  function updateGrid() {
    $('#00').text(player._grid.current[0][0]);
    $('#01').text(player._grid.current[0][1]);
    $('#02').text(player._grid.current[0][2]);
    $('#10').text(player._grid.current[1][0]);
    $('#11').text(player._grid.current[1][1]);
    $('#12').text(player._grid.current[1][2]);
    $('#20').text(player._grid.current[2][0]);
    $('#21').text(player._grid.current[2][1]);
    $('#22').text(player._grid.current[2][2]);
  }

  function eachTurn() {
    player._grid.checkWin();
    if(player._grid.winStatus === true) {
      player._grid.clear();
      updateGrid();
    }
  }

  })
