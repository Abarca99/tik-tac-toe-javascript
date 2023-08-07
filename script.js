const checkBox = document.querySelectorAll(".box");

const Gameboard = (()=>{
    let board = ['','','','','','','','','']

    return {
        board
    }
})();

const Player = ((player)=>{
    
    const playerMark = player;
    
    const playerChoice = (choice) =>{
        Gameboard.board[choice] = playerMark
    }

    const markCheckboard = (boxTextDiv) => {
        boxTextDiv.innerText = playerMark;
    }
    return {
        playerChoice, markCheckboard
    }
});

const Game = (()=>{
    let runGameStatus = true;
    let playerOneTurn = true;
    let playerTwoTurn = false;

    const checkTurn = () => {
        checkBox.forEach(boxChoice => {
            boxChoice.addEventListener("click", () => {
                if (boxChoice.textContent == false){
                if (playerOneTurn) {
                    let playerChoiceIndex = boxChoice.getAttribute("data-value");
                    player1.playerChoice(playerChoiceIndex);
                    player1.markCheckboard(boxChoice);
                } else {
                    let playerChoiceIndex = boxChoice.getAttribute("data-value");
                    player2.playerChoice(playerChoiceIndex);
                    player2.markCheckboard(boxChoice);
                }
                }
                
                playerOneTurn = !playerOneTurn;
                playerTwoTurn = !playerTwoTurn;
                checkForWin()
                checkForTie();
            });
        });
    }


    const checkForWin = () => {
        combo = Gameboard.board;

        if (combo[1] === 'x' && combo[4] === 'x' && combo[7] === 'x'){ // middle row - down
            console.log("TEST")
        }
        else if (combo[0] === 'x' && combo[3] === 'x' && combo[6] === 'x'){ // first row - down
            console.log("TEST")
        }
        else if (combo[2] === 'x' && combo[5] === 'x' && combo[8] === 'x'){ //last row - down
            console.log("TEST")
        }
        else if (combo[0] === 'x' && combo[1] === 'x' && combo[2] === 'x'){ //top row- across
            console.log("TEST")
        }
        else if (combo[3] === 'x' && combo[4] === 'x' && combo[5] === 'x'){ //middle row - across
            console.log("TEST")
        }
        else if (combo[6] === 'x' && combo[7] === 'x' && combo[8] === 'x'){ //bottom row - across
            console.log("TEST")
        }
        else if (combo[0] === 'x' && combo[4] === 'x' && combo[8] === 'x'){ // decline - left to right
            console.log("TEST")
        }
        else if (combo[2] === 'x' && combo[4] === 'x' && combo[6] === 'x'){ // decline - right to left
            console.log("TEST")
        }
    }

    const checkForTie = () => {
        if (Gameboard.board.every(item => item !== '')){
            console.log("TIE")
        }
    }

    const runGame = () => {
        if (runGameStatus == true){
            checkTurn();
        }
    }

    return{
        runGame, checkForWin, checkForTie
    }
})();

let player1 = Player("x")
let player2 = Player("O")

Game.runGame();