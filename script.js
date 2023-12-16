document.addEventListener("DOMContentLoaded", () => {

  const player1Input = document.querySelector('#player1-input');
  const player2Input = document.querySelector('#player2-input');
  const playerInputs = document.querySelectorAll('input');

  const winnerDisplay = document.querySelector('#winner-display');

  playerInputs.forEach(input => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (input.id === 'player1-input') {

        }
        if (input.id === 'player2-input') {

        }
        input.value = '';
      }
    })
  });


  const gameboard = document.querySelector('#gameboard');

  gameboard.addEventListener('click', (e) => {
    const chosenCell = e.target;

    if (chosenCell === gameboard || chosenCell.textContent !== '') {
      e.preventDefault();
    } else {
      chosenCell.textContent = GameController.getActivePlayer().getMarker();
      GameController.switchActivePlayer();
      evaluateWin();
    }
  });

  const Gameboard = (function () {
    const board = [];
    const rows = 3;
    const columns = 3;

    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(0);
      }
    }

    const getBoard = function () {
      return board;
    }

    const createCell = (iCount) => {
      const div = document.createElement('div');
      div.classList.add('cell');
      div.id = 'cell' + iCount;
      gameboard.appendChild(div);
    }

    const displayBoard = () => {
      for (let i = 0; i < rows * columns; i++) {
        createCell(i + 1);
      }
    }

    return { getBoard, displayBoard }
  })();

  Gameboard.displayBoard();

  function createPlayer(name, marker) {
    const playerName = name;
    const playerMarker = marker;
    let score = 0;

    const getName = () => playerName;
    const getMarker = () => playerMarker;
    const getScore = () => score;

    return { getName, getMarker, getScore }
  }

  const player1 = createPlayer('Player 1', '✖');
  const player2 = createPlayer('Player 2', '◯');



  const GameController = (function () {
    const players = [];
    players.push(player1, player2);

    const board = Gameboard.getBoard();

    const getBoard = () => board;
    const getPlayers = () => players;

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    const switchActivePlayer = () => {
      activePlayer === players[0] ? activePlayer = players[1] : activePlayer = players[0];
      console.log(`It's ${activePlayer.getName()}'s turn.`);
    }

    return { getPlayers, getBoard, getActivePlayer, switchActivePlayer }
  })();

  console.log(GameController.getPlayers());

  function evaluateWin() {
    let hasWinner = false;

    const cells = document.querySelectorAll('.cell');
    const cellList = [];

    cells.forEach(cell => {
      cellList.push(cell);
    });

    if (
      (cellList[0].textContent === '✖' && // horizontal wins
        cellList[1].textContent === '✖' &&
        cellList[2].textContent === '✖') ||

      (cellList[3].textContent === '✖' &&
        cellList[4].textContent === '✖' &&
        cellList[5].textContent === '✖') ||

      (cellList[6].textContent === '✖' &&
        cellList[7].textContent === '✖' &&
        cellList[8].textContent === '✖') ||

      (cellList[0].textContent === '✖' && // vertical wins
        cellList[3].textContent === '✖' &&
        cellList[6].textContent === '✖') ||

      (cellList[1].textContent === '✖' &&
        cellList[4].textContent === '✖' &&
        cellList[7].textContent === '✖') ||

      (cellList[2].textContent === '✖' &&
        cellList[5].textContent === '✖' &&
        cellList[8].textContent === '✖') ||

      (cellList[0].textContent === '✖' && // diagonal wins
        cellList[4].textContent === '✖' &&
        cellList[8].textContent === '✖') ||

      (cellList[2].textContent === '✖' &&
        cellList[4].textContent === '✖' &&
        cellList[6].textContent === '✖')
    ) {
      console.log('PLAYER 1 WINS');
      winnerDisplay.textContent = 'Player 1 wins!'
      hasWinner = true;

    } else if (
      (cellList[0].textContent === '◯' && // horizontal wins
        cellList[1].textContent === '◯' &&
        cellList[2].textContent === '◯') ||

      (cellList[3].textContent === '◯' &&
        cellList[4].textContent === '◯' &&
        cellList[5].textContent === '◯') ||

      (cellList[6].textContent === '◯' &&
        cellList[7].textContent === '◯' &&
        cellList[8].textContent === '◯') ||

      (cellList[0].textContent === '◯' && // vertical wins
        cellList[3].textContent === '◯' &&
        cellList[6].textContent === '◯') ||

      (cellList[1].textContent === '◯' &&
        cellList[4].textContent === '◯' &&
        cellList[7].textContent === '◯') ||

      (cellList[2].textContent === '◯' &&
        cellList[5].textContent === '◯' &&
        cellList[8].textContent === '◯') ||

      (cellList[0].textContent === '◯' && // diagonal wins
        cellList[4].textContent === '◯' &&
        cellList[8].textContent === '◯') ||

      (cellList[2].textContent === '◯' &&
        cellList[4].textContent === '◯' &&
        cellList[6].textContent === '◯')
    ) {
      console.log('PLAYER 2 WINS!!!');
      winnerDisplay.textContent = 'Player 2 wins!'
      hasWinner = true;
    } else if (Array.from(cells).every(cell => cell.textContent !== '')) {
      return console.log('It\'s a tie.');
    }
  }
});
