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
    const render = (one, two) => {
        console.log("rendering");
        for (let i = 0; i < board.length; i++) {
            squares[i].textContent = board[i];
            // Style the certain input
            if (squares[i].textContent === "x") {
                squares[i].style.color = "rgb(0, 255, 0)";
                squares[i].style.textShadow = "2px 2px 3px rgb(0, 255, 0), -2px -2px 3px rgb(0, 255, 0), -2px 2px 3px rgb(0, 255, 0), 2px -2px 3px rgb(0, 255, 0)";
            } else if (squares[i].textContent === "o") {
                squares[i].style.color = "rgb(255, 0, 255)";
                squares[i].style.textShadow = "2px 2px 3px rgb(255, 0, 255), -2px -2px 3px rgb(255, 0, 255), -2px 2px 3px rgb(255, 0, 255), 2px -2px 3px rgb(255, 0, 255)";
            }
        }

        resetButton.addEventListener('click', () => {
            resetBoard(one, two);
        });

        // Display Name and score
        score1Number.textContent = score1Value;
        score2Number.textContent = score2Value;
        
        if (turnIndicator.textContent === one) {
            turnIndicator.textContent = two;
        } else {
            turnIndicator.textContent = one;
        }
        
    }

    // Add x or o to board
    const addMark = (one, two) => {
        squares.forEach((square) => {
            const index = square.getAttribute('data-square');
            square.addEventListener('click', () => {

                if (board[index] === "") {
                    if (turnIndicator.textContent === one) {
                        board[index] = "x";
                    } else if (turnIndicator.textContent === two) {
                        board[index] = "o";
                    }

                    render(one, two);

                    checkWinner(one, two);
                }
            })
        })
    }

    const checkWinner = (one, two) => {
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
                // Change stroke colour if purple won 
                console.log(winner);
                if (winner === "o") {
                    strokes[strokeToDisplay].style.border = "10px solid rgb(255, 0, 255)";
                    strokes[strokeToDisplay].style.boxShadow = "2px 2px 3px rgb(255, 0, 255), -2px -2px 3px rgb(255, 0, 255), -2px 2px 3px rgb(255, 0, 255), 2px -2px 3px rgb(255, 0, 255)";
                } else {
                    strokes[strokeToDisplay].style.border = "10px solid rgb(0, 255, 0)";
                    strokes[strokeToDisplay].style.boxShadow = "2px 2px 3px rgb(0, 255, 0), -2px -2px 3px rgb(0, 255, 0), -2px 2px 3px rgb(0, 255, 0), 2px -2px 3px rgb(0, 255, 0)";
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

                // Change stroke colour if purple won 
                console.log("vertical");
                console.log("winner " + winner);
                console.log("i " + i);
                console.log("strokei " + strokeToDisplay);

                if (winner === "o") {
                    strokes[strokeToDisplay].style.border = "10px solid rgb(255, 0, 255)";
                    strokes[strokeToDisplay].style.boxShadow = "2px 2px 3px rgb(255, 0, 255), -2px -2px 3px rgb(255, 0, 255), -2px 2px 3px rgb(255, 0, 255), 2px -2px 3px rgb(255, 0, 255)";
                } else {
                    strokes[strokeToDisplay].style.border = "10px solid rgb(0, 255, 0)";
                    strokes[strokeToDisplay].style.boxShadow = "2px 2px 3px rgb(0, 255, 0), -2px -2px 3px rgb(0, 255, 0), -2px 2px 3px rgb(0, 255, 0), 2px -2px 3px rgb(0, 255, 0)";
                }
                strokes[strokeToDisplay].style.display = "block";
                strokes[strokeToDisplay].style.animation = "1.2s stroke-fade linear 1"
            }
        }

        // Diagonal check
        if (board[0] === board[4] && board[0] === board[8] && board[0] !== "") {
            winner = board[0];

            console.log("diagonal");
            console.log("winner " + winner);
            console.log("stroke " + strokes[6]);

            // Change stroke colour if purple won 
            if (winner === "o") {
                strokes[6].style.border = "10px solid rgb(255, 0, 255)";
                strokes[6].style.boxShadow = "2px 2px 3px rgb(255, 0, 255), -2px -2px 3px rgb(255, 0, 255), -2px 2px 3px rgb(255, 0, 255), 2px -2px 3px rgb(255, 0, 255)";
            } else {
                strokes[6].style.border = "10px solid rgb(0, 255, 0)";
                strokes[6].style.boxShadow = "2px 2px 3px rgb(0, 255, 0), -2px -2px 3px rgb(0, 255, 0), -2px 2px 3px rgb(0, 255, 0), 2px -2px 3px rgb(0, 255, 0)";
            }

            strokes[6].style.display = "block";
            strokes[6].style.animation = "1.2s stroke-fade linear 1"
        }
        if (board[2] === board[4] && board[2] === board[6] && board[2] != "") {
            winner = board[2];

            console.log("diagonal");
            console.log("winner " + winner);
            console.log("stroke " + strokes[6]);

            // Change stroke colour if purple won 
            if (winner === "o") {
                strokes[7].style.border = "10px solid rgb(255, 0, 255)";
                strokes[7].style.boxShadow = "2px 2px 3px rgb(255, 0, 255), -2px -2px 3px rgb(255, 0, 255), -2px 2px 3px rgb(255, 0, 255), 2px -2px 3px rgb(255, 0, 255)";
            } else {
                strokes[7].style.border = "10px solid rgb(0, 255, 0)";
                strokes[7].style.boxShadow = "2px 2px 3px rgb(0, 255, 0), -2px -2px 3px rgb(0, 255, 0), -2px 2px 3px rgb(0, 255, 0), 2px -2px 3px rgb(0, 255, 0)";
            }

            strokes[7].style.display = "block";
            strokes[7].style.animation = "1.2s stroke-fade linear 1"
        }

        // Show winner on screen
        if (winner !== "") {

            if (winner === "x") {
                winnerDiv.textContent = one + " wins";
                score1Value += 1;                
            } else if (winner === "o") {
                winnerDiv.textContent = two + " wins";
                score2Value += 1;
            } 
            // Winning message
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

            // Remove turn indicator
            turnIndicator.style.display = "none";
        } else if (board.indexOf("") === -1) {
            winnerDiv.textContent = "Draw";
            // Winning message
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
            // Remove turn indicator
            turnIndicator.style.display = "none";
        }

    }
    
    // Restart the game with a blank board
    const resetBoard = (one, two) => {
        console.log("reseting")
        
        // Board reset
        board = ["", "", "", "", "", "", "", "", ""]

        // Display reset
        winnerDiv.style.display = "none";
        resetButton.style.display = "none";
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.animation = "none";
            squares[i].textContent = "";
        }
        for (let i = 0; i < strokes.length; i++) {
            strokes[i].style.display = "none";
        }

        score1Number.textContent = score1Value;
        score2Number.textContent = score2Value;

        turnIndicator.style.display = "block";
        turnIndicator.textContent = [one, two][Math.floor(Math.random() * 2)];


    }

    let players1 = document.getElementById("players-1");
    let players2 = document.getElementById("players-2");
    let enterNames = document.getElementById("enter-names");
    let computerName = document.getElementById("computer-name");
    let startButton = document.getElementById("start");
    let name1 = document.getElementById("name1");
    let name2 = document.getElementById("name2");
    let name0 = document.getElementById("name0");

    let easy = document.getElementById("easy");
    let hard = document.getElementById("hard");
    
    let player1 = "player 1";
    let player2 = "player 2";
    let difficulty = "";


    const startState = () => {
        players1.addEventListener('click', () => {
            enterNames.style.display = "none";
            computerName.style.display = "block";
        })

        players2.addEventListener('click', () => {
            enterNames.style.display = "block";
            computerName.style.display = "none";
        })

        // Button to start game if inputs are added
        startButton.addEventListener('click', () => {
            if (name1.value !== "" && name2.value !== "") {
                player1 = name1.value;
                player2 = name2.value;
                startGame(player1, player2)
            } else if (name0.value !== "" && (easy.checked || hard.checked)) {
                player0 = name0.value;
                if (easy.checked) {
                    difficulty = "easy";
                   
                } else if (hard.checked) {
                    difficulty = "hard";
                }
                startGame(player0, difficulty);
            }
        })
    }
    let turnIndicator = document.getElementById("turn-indicator");

    let score1 = document.getElementById("score1");
    let score2 = document.getElementById("score2");

    let score1Player = document.getElementById("score1-player");
    let score2Player = document.getElementById("score2-player");
    let score1Number = document.getElementById("score1-number");
    let score2Number = document.getElementById("score2-number");

    let score1Value = 0;
    let score2Value = 0;

    const startGame = (one, two) => {
        // Clear menu and display board
        players1.style.display = "none";
        players2.style.display = "none";
        enterNames.style.display = "none";
        computerName.style.display = "none";
        startButton.style.display = "none";
        score2.style.display = "block";
        score1.style.display = "block";

        squares.forEach(square => {
            square.style.display = "block";
        })

        score1Player.textContent = one;
        score2Player.textContent = two;
        score1Number.textContent = score1Value;
        score2Number.textContent = score2Value;
            
        turnIndicator.style.display = "block";
        turnIndicator.textContent = [one, two][Math.floor(Math.random() * 2)];

        addMark(one, two);
    }


    // Available for public use
    return { 
        addMark: addMark,
        startState: startState,
     }
})();

gameBoard.startState();


function augment(withFn) {
    var name, fn;
    for (name in window) {
        fn = window[name];
        if (typeof fn === 'function') {
            window[name] = (function(name, fn) {
                var args = arguments;
                return function() {
                    withFn.apply(this, args);
                    return fn.apply(this, arguments);

                }
            })(name, fn);
        }
    }
}



// Module for the display Controller
let displayController = (() => {

    
})();


// Factory for creating players
const playerFactory = (name) => {

    return {  };
};
