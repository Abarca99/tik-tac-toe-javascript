const checkBox = document.querySelectorAll(".box");
const playerOneIcon = "./photos/x.png";
const playerTwoIcon = "./photos/o.png";
const playerAudio = "./audio/chalk.mp3"

const Gameboard = (()=>{
    let board = ['','','','','','','','','']

    const playSound = () => {
        let audio = new Audio(playerAudio);
        audio.play();
    }

    return {
        board, playSound
    }
})();

const Player = ((player,playerName)=>{
    
    const playerMark = player;
    
    const playerChoice = (choice) =>{
        Gameboard.board[choice] = playerMark
    }

    const markCheckboard = (boxTextDiv,playerXO) => {
        let boxChoicePhoto = document.createElement("img");
        boxChoicePhoto.setAttribute("src",playerXO)
        boxTextDiv.appendChild(boxChoicePhoto);
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
                if (!boxChoice.firstChild){
                if (playerOneTurn) {
                    let playerChoiceIndex = boxChoice.getAttribute("data-value");
                    player1.playerChoice(playerChoiceIndex);
                    Gameboard.playSound();
                    player1.markCheckboard(boxChoice,playerOneIcon);
                } else {
                    let playerChoiceIndex = boxChoice.getAttribute("data-value");
                    player2.playerChoice(playerChoiceIndex);
                    Gameboard.playSound();
                    player2.markCheckboard(boxChoice,playerTwoIcon);
                }
                }
                
                playerOneTurn = !playerOneTurn;
                playerTwoTurn = !playerTwoTurn;
                checkForWin(playerOneTurn,playerTwoTurn);
                checkForTie();
            });
        });
    }


    const drawWinScreen = (winner) => {
        let mainContainer = document.querySelector(".main-container");
        let winScreen = document.createElement("div");
        winScreen.innerText = winner + " " + "Wins!" 
        winScreen.setAttribute("class","win-screen");
        mainContainer.appendChild(winScreen);
        setTimeout(() => {
            location.reload();
        },1500);
    }

    const checkForWin = (playerOneTurn,playerTwoTurn) => {
        combo = Gameboard.board;

        if (combo[1] === 'x' && combo[4] === 'x' && combo[7] === 'x' || combo[1] === 'o' && combo[4] === 'o' && combo[7] === 'o'){ // middle row - down
            if (!playerOneTurn){
                drawWinScreen("Player One");
            }
            else {
                drawWinScreen("Player Two");
            }
        }
        else if (combo[0] === 'x' && combo[3] === 'x' && combo[6] === 'x' || combo[0] === 'o' && combo[3] === 'o' && combo[6] === 'o'){ // first row - down
            if (!playerOneTurn){
                drawWinScreen("Player One");
            }
            else {
                drawWinScreen("Player Two");
            }
        }
        else if (combo[2] === 'x' && combo[5] === 'x' && combo[8] === 'x' || combo[2] === 'o' && combo[5] === 'o' && combo[8] === 'o'){ //last row - down
            if (!playerOneTurn){
                drawWinScreen("Player One");
            }
            else {
                drawWinScreen("Player Two");
            }
        }
        else if (combo[0] === 'x' && combo[1] === 'x' && combo[2] === 'x' || combo[0] === 'o' && combo[1] === 'o' && combo[2] === 'o'){ //top row- across
            if (!playerOneTurn){
                drawWinScreen("Player One");
            }
            else {
                drawWinScreen("Player Two");
            }
        }
        else if (combo[3] === 'x' && combo[4] === 'x' && combo[5] === 'x' || combo[3] === 'o' && combo[4] === 'o' && combo[5] === 'o'){ //middle row - across
            if (!playerOneTurn){
                drawWinScreen("Player One");
            }
            else {
                drawWinScreen("Player Two");
            }
        }
        else if (combo[6] === 'x' && combo[7] === 'x' && combo[8] === 'x' || combo[6] === 'o' && combo[7] === 'o' && combo[8] === 'o'){ //bottom row - across
            if (!playerOneTurn){
                drawWinScreen("Player One");
            }
            else {
                drawWinScreen("Player Two");
            }
        }
        else if (combo[0] === 'x' && combo[4] === 'x' && combo[8] === 'x' || combo[0] === 'o' && combo[4] === 'o' && combo[8] === 'o'){ // decline - left to right
            if (!playerOneTurn){
                drawWinScreen("Player One");
            }
            else {
                drawWinScreen("Player Two");
            }
        }
        else if (combo[2] === 'x' && combo[4] === 'x' && combo[6] === 'x' || combo[2] === 'o' && combo[4] === 'o' && combo[6] === 'o'){ // decline - right to left
            if (!playerOneTurn){
                drawWinScreen("Player One");
            }
            else {
                drawWinScreen("Player Two");
            }
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

let player1 = Player("x","Player One")
let player2 = Player("o", "Player Two")

Game.runGame();