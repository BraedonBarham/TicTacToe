var gameBoard = (() => {


    let board = {"div1" : "", "div2" : "", "div3" : "",
                    "div4" : "", "div5" : "", "div6" : "",
                    "div7" : "", "div8" : "", "div9" : ""};

    const updateBoard = (divID, player) => {
        gameBoard.board[divID] = player;
        divElement = document.getElementById(divID)
        playerChoice = document.createTextNode(player)
        divElement.appendChild(playerChoice)
        gameLogic.checkBoard()
    }
    const resetBoard =  () => {
        let baseboard = {"div1" : "", "div2" : "", "div3" : "",
                        "div4" : "", "div5" : "", "div6" : "",
                        "div7" : "", "div8" : "", "div9" : ""};
        gameBoard.board = baseboard;
    }
    return {board, updateBoard, resetBoard};
})();

var gameLogic = (() => {
    const checkColumn = () => {
        // Check first column X
        if (gameBoard.board["div1"] === 'X' && gameBoard.board["div4"] === 'X'  && gameBoard.board["div7"] === 'X'){
            console.log("X wins")
            displayControl.displayWinner('X')
            return true;
        }
        // Check second column X
        if (gameBoard.board["div2"] === 'X' && gameBoard.board["div5"] === 'X'  && gameBoard.board["div8"] === 'X'){
            console.log("X wins")
            displayControl.displayWinner('X')
            return true;

        }
        // Check third column X
        if (gameBoard.board["div3"] === 'X' && gameBoard.board["div6"] === 'X'  && gameBoard.board["div9"] === 'X'){
            console.log("X wins")
            displayControl.displayWinner('X')
            return true;

        }
         // Check first column O
         if (gameBoard.board["div1"] === 'O' && gameBoard.board["div4"] === 'O'  && gameBoard.board["div7"] === 'O'){
            console.log("O wins")
            displayControl.displayWinner('O')
            return true;

        }
        // Check second column O
        if (gameBoard.board["div2"] === 'O' && gameBoard.board["div5"] === 'O'  && gameBoard.board["div8"] === 'O'){
            console.log("O wins")    
            displayControl.displayWinner('O')
            return true;

        }
        // Check third column O
        if (gameBoard.board["div3"] === 'O' && gameBoard.board["div6"] === 'O'  && gameBoard.board["div9"] === 'O'){
            console.log("O wins")
            displayControl.displayWinner('O')
            return true;

        }
    }
    const checkRow = () => {
        // Check first row X
        if (gameBoard.board["div1"] === 'X' && gameBoard.board["div2"] === 'X'  && gameBoard.board["div3"] === 'X'){
            console.log("X wins")
            displayControl.displayWinner('X')
            return true;

        }
        // Check second row X
        if (gameBoard.board["div4"] === 'X' && gameBoard.board["div5"] === 'X'  && gameBoard.board["div6"] === 'X'){
            console.log("X wins")
            displayControl.displayWinner('X')
            return true;

        }
        // Check third row X
        if (gameBoard.board["div7"] === 'X' && gameBoard.board["div8"] === 'X'  && gameBoard.board["div9"] === 'X'){
            console.log("X wins")
            displayControl.displayWinner('X')
            return true;

        }
        // Check first row O
        if (gameBoard.board["div1"] === 'O' && gameBoard.board["div2"] === 'O'  && gameBoard.board["div3"] === 'O'){
            console.log("O wins")
            displayControl.displayWinner('O')
            return true;

        }
        // Check second row O
        if (gameBoard.board["div4"] === 'O' && gameBoard.board["div5"] === 'O'  && gameBoard.board["div6"] === 'O'){
            console.log("O wins")
            displayControl.displayWinner('O')
            return true;

        }
        // Check third row O
        if (gameBoard.board["div7"] === 'O' && gameBoard.board["div8"] === 'O'  && gameBoard.board["div9"] === 'O'){
            console.log("O wins")
            displayControl.displayWinner('O')
            return true;

        }
    }

    const checkDiagonals = () => {
        // Check top left to bottom right X diagonal
        if (gameBoard.board["div1"] === 'X' && gameBoard.board["div5"] === 'X'  && gameBoard.board["div9"] === 'X'){
            console.log("X wins")
            displayControl.displayWinner('X')
            return true;

        }
        // Check bottom left to top right X diagonal
        if (gameBoard.board["div7"] === 'X' && gameBoard.board["div5"] === 'X'  && gameBoard.board["div3"] === 'X'){
            console.log("X wins")
            displayControl.displayWinner('X')
            return true;
        }
        // Check top left to bottom right O diagonal
        if (gameBoard.board["div1"] === 'O' && gameBoard.board["div5"] === 'O'  && gameBoard.board["div9"] === 'O'){
            console.log("O wins")
            displayControl.displayWinner('O')
            return true;

        }
        // Check bottom left to top right O diagonal
        if (gameBoard.board["div7"] === 'O' && gameBoard.board["div5"] === 'O'  && gameBoard.board["div3"] === 'O'){
            console.log("O wins")
            displayControl.displayWinner('O')
            return true;

        }
    }
    const checkTie = () => {
        let row = checkRow()
        let column = checkColumn()
        let diagonals = checkDiagonals()
        console.log(row)
        console.log(column)

        console.log(diagonals)

        if (gameBoard.board["div1"] !== '' && gameBoard.board["div2"] !== ''  && gameBoard.board["div3"] !== ''
            && gameBoard.board["div4"] !== '' && gameBoard.board["div5"] !== ''  && gameBoard.board["div6"] !== ''
            && gameBoard.board["div7"] !== '' && gameBoard.board["div8"] !== ''  && gameBoard.board["div9"] !== '' 
            && row == undefined && column == undefined && diagonals == undefined){
                displayControl.displayWinner("Tie! Nobody ")
            }


    }
    
    const checkBoard = () =>{
        checkTie()
    }
    return {checkBoard}

})();



const divButtons = (() => {
    const assignHandlers = () =>{
        var divs = Array.from(document.getElementsByClassName("board-div"));

        divs.forEach((div) => div.addEventListener("click", function() {
        spotCheck.addUserPick(div);
         }));
    };
    return {assignHandlers};

})()
const spotCheck = (() =>{
    const addUserPick = (div) => {
        if (gameBoard.board[div.id] !== ""){
            console.log("Spot already filled with " + gameBoard.board[div.id]);
        }
        else if (gameBoard.board[div.id] === ""){
            if (currentPlayer.getTurn() === "X"){
                gameBoard.updateBoard(div.id, "X")
                currentPlayer.changeTurn()
                displayControl.displayBoard();
            }
            else if (currentPlayer.getTurn() === "O"){
                gameBoard.updateBoard(div.id, "O")
                currentPlayer.changeTurn()
                displayControl.displayBoard()
            }
        }
    }
    return {addUserPick};
})();
const restartGame = (() =>{
    const resetGameBoard = () =>{
        
        boardContainer = document.getElementById("board-container")
        boardContainer.classList.remove("player-won")
        bodyContainer = document.getElementById("body-container")
        bodyContainer.classList.remove("body-container-player-win")

        askButton = document.getElementById("play-again-button")
        askButton.remove()

        winnerTextDiv = document.getElementById('winner-text-div')
        winnerTextDiv.remove()

        var div = document.getElementById('board-container');


        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        for (i = 1; i < 10; i++){
            childDiv = document.createElement("div")
            childDiv.setAttribute('id', 'div' + String(i))
            childDiv.classList.add("board-div")
            div.appendChild(childDiv)
        }
        console.log(gameBoard.board)
        divButtons.assignHandlers()
    }
    return {resetGameBoard}

})();
const displayControl = (() => {
    const displayBoard = () =>{
        console.log(gameBoard.board)
    }
    const displayWinner = (winningPlayer) =>{
        boardContainer = document.getElementById("board-container")
        boardContainer.classList.add("player-won")
        bodyContainer = document.getElementById("body-container")
        bodyContainer.classList.add("body-container-player-win")
        winnerTextDiv = document.createElement("div")
        winnerTextDiv.setAttribute('id', 'winner-text-div')
        winnerText = document.createTextNode(winningPlayer + " has won!")
        winnerTextDiv.appendChild(winnerText)
        bodyContainer.appendChild(winnerTextDiv)
        postWinLogic()
    }
    const askToPlayAgain = () => {
        askButton = document.createElement("button")
        askButton.setAttribute('id', 'play-again-button')

        askButtonText = document.createTextNode("Play Again?")
        askButton.addEventListener("click", function () {
            restartGame.resetGameBoard()
        });
        askButton.classList.add("play-again-button")
        askButton.appendChild(askButtonText)


        bodydContainer = document.getElementById("board-container")
        bodyContainer.appendChild(askButton)
    }
    const postWinLogic = () => {
        gameBoard.resetBoard();
        askToPlayAgain()
    }

    return {displayBoard, displayWinner, postWinLogic}
})();

const playerLogic = (startingPlayer) => {
    var turn = startingPlayer
    const changeTurn = () => {
        if (turn === "X"){
            turn = "O"
            return "O"
        }
        else {
            turn = "X"
            return "X"
        }
    }
    const getTurn = () => turn;

return {changeTurn, getTurn}
};



var gameLoop = (() => {
    var divLogic = divButtons;
    divLogic.assignHandlers();
    currentPlayer = playerLogic("X")
    return;

})();

var gameL = gameLoop;
