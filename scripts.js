// Module for the game board
let gameBoard = (() => {
    // Game board array
    let board = ["", "", "", "", "", "", "", "", ""];

    // Divs where x and o 's go
    let squares = document.querySelectorAll(".square");

    // Winning strokes
    let strokes = document.querySelectorAll(".stroke");

    // Show added marks
    const render = () => {
        for (let i = 0; i < board.length; i++) {
            squares[i].textContent = board[i];
        }
    }

    // Add x or o to board
    const addMark = () => {
        squares.forEach((square) => {
            const index = square.getAttribute('data-square');
            square.addEventListener('click', () => {
                if (board[index] === "") {
                    board[index] = "x";
                    
                    render();

                    checkWinner();
                }
            })
        })
    }

    const checkWinner = () => {
        let winner = "";

        // Horizontal row check
        for (let i = 0; i < board.length; i += 3) {
            if (board[i] === board[i + 1] && board[i] === board[i + 2] && board[i] !== "") {
                winner = board[i];

                // Display Strokes and fade them in

                if (i === 0) {
                    strokes[0].style.display = "block";
                }
                let strokeToDisplay = -1;

                switch(i) {
                    case 0:
                        strokeToDisplay = 0;
                        break;
                    case 3:
                        strokeToDisplay = 1;
                        break;
                    case 6:
                        strokeToDisplay = 2;
                        break;
                }

                strokes[strokeToDisplay].style.display = "block";
                strokes[strokeToDisplay].style.animation = "1.2s stroke-fade linear 1"

            }
        }

        // Vertical row check
        for (let i = 0; i < board.length; i += 1) {
            if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== "") {
                winner = board[i];

                let strokeToDisplay = -1;

                switch(i) {
                    case 0:
                        strokeToDisplay = 3;
                        break;
                    case 1:
                        strokeToDisplay = 4;
                        break;
                    case 2:
                        strokeToDisplay = 5;
                        break;
                }

                strokes[strokeToDisplay].style.display = "block";
                strokes[strokeToDisplay].style.animation = "1.2s stroke-fade linear 1"
            }
        }

        // Diagonal check
        if (board[0] === board[4] && board[0] === board[8] && board[0] !== "") {
            winner = board[0];
            strokes[6].style.display = "block";
            strokes[6].style.animation = "1.2s stroke-fade linear 1"

        }
        if (board[2] === board[4] && board[2] === board[6] && board[2] != "") {
            winner = board[2];
            strokes[7].style.display = "block";
            strokes[7].style.animation = "1.2s stroke-fade linear 1"
        }

        console.log(winner);

    }

    // Available for public use
    return { 
        addMark: addMark,
     }
})();

gameBoard.addMark();




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
