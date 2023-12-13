document.addEventListener("DOMContentLoaded", () => {
    
    const player1Name = document.querySelector('#player1-name');
    const player1MarkerX = document.querySelector('input[value="X"');
    const player1MarkerO = document.querySelector('input[value="O"');
    const player2Name = document.querySelector('#player2-name');
    const player2MarkerX = document.querySelector('input[value="X"]');
    const player2MarkerO = document.querySelector('input[value="O"]');

    const board = document.querySelector('#gameboard');
    const cells = document.querySelectorAll('.cell');

    function createGame() {
        const gameboard = [];
        const startGameMessage = function() {
            
        }    
    }

    function createPlayer(name, marker) {
        const playerName = name;
        const playerMarker = marker;

        return {playerName, playerMarker}
    }

    const player1 = createPlayer(player1Name, player1Marker);
    const player2 = createPlayer(player2Name, player2Marker);


})