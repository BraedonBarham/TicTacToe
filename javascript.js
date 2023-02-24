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
        divElement

    }


    return {board, updateBoard};
})();

var gameLogic = (() => {
    const checkRow = () => {
        if (board[0][0] === board[0][1] === board[0][2] === "X") return true;
        if (board[1][0] === board[1][1] === board[1][2] === "X") return true;
        if (board[2][0] === board[2][1] === board[2][2] === "X") return true;

        if (board[0][0] === board[0][1] === board[0][2] === "O") return true;
        if (board[1][0] === board[1][1] === board[1][2] === "O") return true;
        if (board[2][0] === board[2][1] === board[2][2] === "O") return true;
        return false;
    }
    const checkColumn = () => {
        if (board[0][0] === board[1][0] === board[2][0]) return true;
        if (board[0][1] === board[1][1] === board[1][2]) return true;
        if (board[0][2] === board[1][2] === board[2][2]) return true;
        return false;
    }


})();

const divButtons = (() => {
    var divs = Array.from(document.getElementsByClassName("board-div"));
    const assignHandlers = () =>{
        divs.forEach((div) => div.addEventListener("click", function() {
        spotCheck.checkSpot(div);
        spotCheck.addUserPick(div);
         }));
    };
    return {assignHandlers};

})()
const spotCheck = (() =>{
    const checkSpot = div => {
        console.log(gameBoard.board)
        if (gameBoard.board[div.id] === ""){
            console.log("Empty space")
        }

    }
    const addUserPick = (div) => {
        if (gameBoard.board[div.id] !== ""){
            console.log("Spot already filled with " + gameBoard.board[div.id]);
        }
        else if (gameBoard.board[div.id] === ""){
            if (currentPlayer.getTurn() === 'X'){
                gameBoard.updateBoard(div.id, 'X')
                currentPlayer.changeTurn()
                displayControl.displayBoard();

            }
            else if (currentPlayer.getTurn() === 'O'){
                gameBoard.updateBoard(div.id, 'O')
                currentPlayer.changeTurn()
                displayControl.displayBoard()
            }
        }
    }

    return {checkSpot, addUserPick};

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
        if (turn === 'X'){
            turn = 'O'
            return 'O'
        }
        else {
            turn = 'X'
            return 'X'
        }
    }
    const getTurn = () => turn;

return {changeTurn, getTurn}
};



var gameLoop = (() => {
    var divLogic = divButtons;
    divLogic.assignHandlers();
    currentPlayer = playerLogic('X')
    return;

})();

var gameL = gameLoop;
