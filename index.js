divs = $('.ticTacToe'); // set divs array var to the grid indexes from .ticTacToe
console.log(divs);

// button on click resetGame function
$('#reset').on('click', () => {
    resetGame();
})

// set board variable to array of 9 with null values
let board = Array(9).fill(null);
    
// playGame class with empty constructor
class playGame {
    constructor() {

    }

    // intro method
    intro() {
        alert(`Welcome to tic-tac-toe! The rules are as follows:`)
        alert(`\n\nWell known, obviously.\n\n`)
        alert(`X moves first, and have fun!`)
    }

    // main method for taking turns during gameplay
    takeTurns(xTurn) {

        // for array length, on click, if the grid index is empty, set index var to current index. if xTurn, set grid-spot to X, alert, and add that value to the board array
        for (let i = 0; i < divs.length; i++) {
    
            $(divs[i]).on('click', function() {
                if ($(this).text() === '') {
                    let index = i;
                    if (xTurn) {
                        $(this).text('X');  
                        alert("It's O's turn")   
                        board[index] = 'X';      
                    }
                    // do the same if it's oTurn
                    else {
                        $(this).text('O'); 
                        alert("It's X's turn")
                        board[index] = 'O';
                    } // end of if else   
                    xTurn = !xTurn;             // swap xTurn between true and false
                    checkWinCondition(board); // call function
                } // end of if

                
            }) // end of jquery function 
            
        } // end of for loop
            
    } // end of takeTurns()

} // end of playGame class

// array of sub-arrays to hold possible winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
]

// function that compares the board game state against all winning combinations and alerts if there's a match
function checkWinCondition(board) {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] != null && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} has won the game! Congratulations!`)
        }        
    }
}

// reset the game to empty board array and wipe shown values
function resetGame() {
    board = Array(9).fill(null);
    $('.ticTacToe').text('');
}

// new game instance of playGame class, call intro object and then run game with xTurn true
let game = new playGame();
game.intro();
game.takeTurns(true);



