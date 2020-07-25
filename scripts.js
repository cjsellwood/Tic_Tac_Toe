// Module for the game board
let gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    // Available for public use
    return { 
        board: board
     }
})();


function render() {
    let squares = document.querySelectorAll(".square");
    let board = gameBoard.board;
    for (let i = 0; i < board.length; i++) {
        squares[i].textContent = board[i];
    }
}


function addMark() {
    let squares = document.querySelectorAll(".square");
    let board = gameBoard.board;
    squares.forEach((square) => {
        let index = square.getAttribute('data-square');
        //console.log(index)
        square.addEventListener('click', () => {
            if (board[index] === "") {
                board[index] = "x";
                render();
            }
        })
    })
}

addMark();




// Module for the display Controller
let displayController = (() => {
    
})();




// Factory for creating players
const playerFactory = (name) => {
    
    const sayName = () => console.log(name);

    const changeName = (newName) => {
        name = newName;
    }

    return { sayName, changeName };
};

console.log("Factory Function")
let player1 = playerFactory('callum');
player1.sayName();

player1.changeName('Bill');

player1.sayName();
