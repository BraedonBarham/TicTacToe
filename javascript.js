var gameBoard = (() => {

    const board = [["X", "", ""],
                   ["", "", ""],
                   ["", "", ""]];
    const spots = {"div1" : board[0][0], "div2" : board[0][1], "div3" : board[0][2],
                    "div4" : board[1][0], "div5" : board[1][1], "div6" : board[1][2],
                    "div7" : board[2][0], "div8" : board[2][1], "div9" : board[2][2]};
                    // console.log(gameBoard.spots["div1"])
    return {board, spots};
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
        divs.forEach((div) => div.addEventListener("click", () => spotCheck(div)));
    };
    const getElement = (div) =>{
        console.log(div.id, "hi");
    }
    return {assignHandlers};

})()
const spotCheck = (() =>{
    const checkSpot = div => {
        // console.log(div.id, "hi")
        console.log(gameBoard.board)
        console.log(gameBoard.spots[div.id])
        console.log(gameBoard.spots[div.id])

        if (gameBoard.spots[div.id] === ""){
            console.log("noice")
        }

    }
    return checkSpot;

})();



const displayControl = () =>{
    const pickSpot = () =>{

    }


}

const players = (name) => {
    const pickSpot = (spot) =>{

    }

return {name}
}



var gameLoop = (() => {
    var spotcheck = spotCheck;
    var divLogic = divButtons;
    // var gameBoard = GameBoard;
    divLogic.assignHandlers();


    return;

})();

var gameL = gameLoop;
