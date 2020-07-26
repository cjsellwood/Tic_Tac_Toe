// Module for the game board
let gameBoard = (() => {
    // Game board array
    let board = ["", "", "", "", "", "", "", "", ""];

    // Divs where x and o 's go
    let squares = document.querySelectorAll(".square");

    // Winning strokes
    let strokes = document.querySelectorAll(".stroke");

    // Winner display div
    let winnerDiv = document.getElementById("winner");

    // Reset button
    let resetButton = document.getElementById("reset-button");

    // Show added marks
    const render = () => {
        for (let i = 0; i < board.length; i++) {
            squares[i].textContent = board[i];
        }
        
        resetButton.addEventListener('click', resetBoard);
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

                // Display Strokes and fade them in
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

        // Show winner on screen
        if (winner !== "") {
            // Winning message
            winnerDiv.textContent = "Player " + winner + " wins";
            winnerDiv.style.animation = "5s winner-fade ease-in 1";
            winnerDiv.style.display = "block";

            // Reset Button
            resetButton.style.animation = "5s winner-fade ease-in 1";
            resetButton.style.display = "block";

            // Fade squares
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.animation = "2s 1.5s squares-fade ease-out 1 forwards";
            }

            // Fade strokes
            for (let i = 0; i < strokes.length; i++) {
                strokes[i].style.animation = "2s 1.5s squares-fade ease-out 1 forwards";
            }
        }

    }
    
    // Restart the game with a blank board
    const resetBoard = () => {
        
        // Board reset
        board = ["", "", "", "", "", "", "", "", ""]

        // Display reset
        winnerDiv.style.display = "none";
        resetButton.style.display = "none";
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.animation = "none";
        }
        for (let i = 0; i < strokes.length; i++) {
            strokes[i].style.display = "none";
        }

        render()
    }

    let players1 = document.getElementById("players-1");
    let players2 = document.getElementById("players-2");
    let enterNames = document.getElementById("enter-names");
    let computerName = document.getElementById("computer-name");

    const startState = () => {
        players1.addEventListener('click', () => {
            enterNames.style.display = "none";
            computerName.style.display = "block";
        })

        players2.addEventListener('click', () => {
            enterNames.style.display = "block";
            computerName.style.display = "none";
        })
    }


    // Available for public use
    return { 
        addMark: addMark,
        startState: startState,
     }
})();

gameBoard.startState();




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
