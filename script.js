// document.addEventListener("DOMContentLoaded", () => {
    


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


    const mark = createPlayer('Mark', 'X');
    const jerry = createPlayer('Jerry', 'O');
    console.log(mark.playerMarker);
    console.log(jerry.playerName);


// })