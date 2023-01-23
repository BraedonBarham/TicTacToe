var gameBoard = (() => {

    const board = [["", "", ""],
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
        divs.forEach((element) => element.addEventListener("click", () => getElement(element)));
    };
    const getElement = (element) =>{
        console.log(element.id, "hi");
    }
    return {assignHandlers};

})()
const spotCheck = (() =>{



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



const gameLoop = (() => {
    const divLogic = divButtons;
    const spotcheck = spotCheck;
    divLogic.assignHandlers();


    return;

})();

const gameL = gameLoop;
