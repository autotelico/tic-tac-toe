document.addEventListener("DOMContentLoaded", () => {

    const gameboard = document.querySelector('#gameboard');

    const cell1 = document.querySelector('#cell-1');
    const cell2 = document.querySelector('#cell-2');
    const cell3 = document.querySelector('#cell-3');
    const cell4 = document.querySelector('#cell-4');
    const cell5 = document.querySelector('#cell-5');
    const cell6 = document.querySelector('#cell-6');
    const cell7 = document.querySelector('#cell-7');
    const cell8 = document.querySelector('#cell-8');
    const cell9 = document.querySelector('#cell-9');


    gameboard.addEventListener('click', (e) => {
        const chosenCell = e.target;

        if (chosenCell === gameboard) {
            e.preventDefault();
        }

        chosenCell.textContent = GameController.getActivePlayer().getMarker();
        console.log(chosenCell.textContent);

        GameController.switchActivePlayer();

    })

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
    
    const createCell = () => {
        const div = document.createElement('div');
        div.classList.add('cell');
        gameboard.appendChild(div);
    }

    const displayBoard = () => {
        for (let i = 0; i < rows * columns; i++) {
            createCell();
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
    console.log('Players: ' + players);

    const board = Gameboard.getBoard();

    const getBoard = () => board;
    const getPlayers = () => players;

    let activePlayer = players[0];
  
    const getActivePlayer = () => activePlayer;
  
    const switchActivePlayer = () => {
      activePlayer === players[0] ? activePlayer = players[1] : activePlayer = players[0];
      console.log(`Current player is ${activePlayer.getName()}.`);
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




})