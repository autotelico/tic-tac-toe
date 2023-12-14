// document.addEventListener("DOMContentLoaded", () => {

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


    return { getBoard }
})();




let selectedRow = 2;
let selectedColumn = 1;

// newBoard.getBoard()[selectedRow][selectedColumn] = 'X'; // will be player1Marker



function createPlayer(name, marker) {

    const playerName = name;
    const playerMarker = marker;
    let score = 0;

    const getName = () => playerName;
    const getMarker = () => playerMarker;
    const getScore = () => score;

    return { getName, getMarker, getScore }
}

const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'O');


const GameController = (function () {

    const players = [];
    players.push({ player1 }, { player2 });

    const board = Gameboard.getBoard();

    const getBoard = () => board;
    const getPlayers = () => players;

    const activePlayer = players[0];
  
    const getActivePlayer = () => activePlayer;
  
    const switchActivePlayer = () => {
      activePlayer === players[0] ? activePlayer = players[1] : activePlayer = players[0];
    }
  
    return { getPlayers, getBoard, getActivePlayer, switchActivePlayer }
})();

  

console.log(GameController.getPlayers());
console.log(GameController.getBoard());

function evaluateWin() {
    const { getBoard } = Gameboard;
    const board = getBoard();

    if (board[0][0] && board[0][1] && board[0][2] || // horizontal wins
        board[1][0] && board[1][1] && board[1][2] ||
        board[2][0] && board[2][1] && board[2][2] ||

        board[0][0] && board[1][0] && board[2][0] || // vertical wins
        board[0][1] && board[1][1] && board[2][1] ||
        board[0][2] && board[1][2] && board[2][2] ||

        board[0][0] && board[1][1] && board[2][2] ||
        board[0][2] && board[1][1] && board[2][0]) {
        return console.log('You win!');
    } else board.forEach(row => row.forEach(column => {
        if (column === 0) {
            return console.log(`There is still an empty cell! (${board.indexOf(column)})`);
        } else {
            return console.log("It's a tie.");
        }
    }))
}

console.log('Active player is: ' + GameController.getActivePlayer().getName());



// })