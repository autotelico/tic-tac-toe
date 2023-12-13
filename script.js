// document.addEventListener("DOMContentLoaded", () => {

const Gameboard = (function() {
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


// console.log(newBoard.getBoard());


let selectedRow = 2;
let selectedColumn = 1;

// newBoard.getBoard()[selectedRow][selectedColumn] = 'X'; // will be player1Marker

// console.log(newBoard.getBoard())


function createPlayer(name, marker) {

    const playerName = name;
    const playerMarker = marker;

    const getName = () => name;
    const getMarker = () => marker;



    return { getName, getMarker }
}

const player1 = createPlayer('Carl', 'X');
const player2 = createPlayer('Mark', 'O');

// console.log(player2.getName());


const startGame = (function () {
    const board = Gameboard.getBoard();

    const getBoard = () => board;

    const { playerName } = createPlayer();

    const players = [];

    players.push({ player1, player2 });

    const getPlayers = () => players;
    return { players, getPlayers, playerName, getBoard }
})();



console.log(startGame.getPlayers());
console.log(startGame.getBoard());

// })