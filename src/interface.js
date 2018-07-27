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
    player.playTurn(0,0);
    eachTurn();
  });

  $('#0-1').click(function() {
    player.playTurn(0,1);
    eachTurn();
  });

  $('#0-2').click(function() {
    player.playTurn(0,2);
    eachTurn();
  });

  $('#1-0').click(function() {
    player.playTurn(1,0);
    eachTurn();
  });

  $('#1-1').click(function() {
    player.playTurn(1,1);
    eachTurn();
  });

  $('#1-2').click(function() {
    player.playTurn(1,2);
    eachTurn();
  });

  $('#2-0').click(function() {
    player.playTurn(2,0);
    eachTurn();
  });

  $('#2-1').click(function() {
    player.playTurn(2,1);
    eachTurn();
  });

  $('#2-2').click(function() {
    player.playTurn(2,2);
    eachTurn();
  });

  $('#New').click(function() {
    window.location.reload();
    player._grid.forceClear();
  });

  $('#NewGame').click(function() {
    window.location.href = 'index.html';
    player._grid.forceClear();
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
    updateGrid();
    player._grid.checkWin();
    if (player._grid.winStatus === true) {
      let w = player._grid.checkWin()
      window.location.href = 'winpage.html#'+w;
    }
   }

  })
