var gameBoard = (() => {

    // const board2 = [["X", "", ""],
    //                ["", "", ""],
    //                ["", "", ""]];
    // const spots = {"div1" : board[0][0], "div2" : board[0][1], "div3" : board[0][2],
    //                 "div4" : board[1][0], "div5" : board[1][1], "div6" : board[1][2],
    //                 "div7" : board[2][0], "div8" : board[2][1], "div9" : board[2][2]
    //             };
    const board = {"div1" : "", "div2" : "", "div3" : "",
                    "div4" : "", "div5" : "", "div6" : "",
                    "div7" : "", "div8" : "", "div9" : ""};

    const updateBoard = (divID, player) => {
        gameBoard.board[divID] = player;
        divElement = document.getElementById(divID)
        playerChoice = document.createTextNode(player)
        divElement.appendChild(playerChoice)
        console.log(gameBoard.board[divID] + " lol")
        gameLogic.checkColumn()
        gameLogic.checkRow()
        gameLogic.checkDiagonals()
    }

    return {board, updateBoard};
})();

var gameLogic = (() => {
    const checkColumn = () => {
        // Check first column X
        if (gameBoard.board["div1"] === 'X' && gameBoard.board["div4"] === 'X'  && gameBoard.board["div7"] === 'X'){
            console.log("X wins")
        }
        // Check second column X
        if (gameBoard.board["div2"] === 'X' && gameBoard.board["div5"] === 'X'  && gameBoard.board["div8"] === 'X'){
            console.log("X wins")
          
        }
        // Check third column X
        if (gameBoard.board["div3"] === 'X' && gameBoard.board["div6"] === 'X'  && gameBoard.board["div9"] === 'X'){
            console.log("X wins")
        }

         // Check first column O
         if (gameBoard.board["div1"] === 'O' && gameBoard.board["div4"] === 'O'  && gameBoard.board["div7"] === 'O'){
            console.log("O wins")
        }
        // Check second column O
        if (gameBoard.board["div2"] === 'O' && gameBoard.board["div5"] === 'O'  && gameBoard.board["div8"] === 'O'){
            console.log("O wins")
          
        }
        // Check third column O
        if (gameBoard.board["div3"] === 'O' && gameBoard.board["div6"] === 'O'  && gameBoard.board["div9"] === 'O'){
            console.log("O wins")
        }
    }
    const checkRow = () => {
        // Check first row X
        if (gameBoard.board["div1"] === 'X' && gameBoard.board["div2"] === 'X'  && gameBoard.board["div3"] === 'X'){
            console.log("X wins")
        }
        // Check second row X
        if (gameBoard.board["div4"] === 'X' && gameBoard.board["div5"] === 'X'  && gameBoard.board["div6"] === 'X'){
            console.log("X wins")
          
        }
        // Check third row X
        if (gameBoard.board["div7"] === 'X' && gameBoard.board["div8"] === 'X'  && gameBoard.board["div9"] === 'X'){
            console.log("X wins")
        }

        // Check first row O
        if (gameBoard.board["div1"] === 'O' && gameBoard.board["div2"] === 'O'  && gameBoard.board["div3"] === 'O'){
            console.log("O wins")
        }
        // Check second row O
        if (gameBoard.board["div4"] === 'O' && gameBoard.board["div5"] === 'O'  && gameBoard.board["div6"] === 'O'){
            console.log("O wins")
        
        }
        // Check third row O
        if (gameBoard.board["div7"] === 'O' && gameBoard.board["div8"] === 'O'  && gameBoard.board["div9"] === 'O'){
            console.log("O wins")
        }
    }

    const checkDiagonals = () => {
        // Check top left to bottom right X diagonal
        if (gameBoard.board["div1"] === 'X' && gameBoard.board["div5"] === 'X'  && gameBoard.board["div9"] === 'X'){
            console.log("X wins")
        }
        // Check bottom left to top right X diagonal
        if (gameBoard.board["div7"] === 'X' && gameBoard.board["div5"] === 'X'  && gameBoard.board["div6"] === 'X'){
            console.log("X wins")
        }
        // Check top left to bottom right O diagonal
        if (gameBoard.board["div1"] === 'O' && gameBoard.board["div5"] === 'O'  && gameBoard.board["div9"] === 'O'){
            console.log("O wins")
        }
        // Check bottom left to top right O diagonal
        if (gameBoard.board["div7"] === 'O' && gameBoard.board["div5"] === 'O'  && gameBoard.board["div6"] === 'O'){
            console.log("O wins")
        }
    }
    
    return {checkColumn, checkRow, checkDiagonals}

})();

const divButtons = (() => {
    var divs = Array.from(document.getElementsByClassName("board-div"));
    const assignHandlers = () =>{
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



const displayControl = (() => {
    const displayBoard = () =>{
        console.log(gameBoard.board)
    }
    return {displayBoard}
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
