divs = $('.ticTacToe');
console.log(divs);

let board = Array(9).fill(null);
    
class playGame {
    constructor() {

    }

    takeTurns(xTurn) {

        for (let i = 0; i < divs.length; i++) {
    
            $(divs[i]).on('click', function() {
                if ($(this).text() === '') {
                    let index = i;
                    if (xTurn) {
                        $(this).text('X');  
                        alert("It's O's turn")   
                        board[index] = 'X';      
                    }
                    else {
                        $(this).text('O'); 
                        alert("It's X's turn")
                        board[index] = 'O';
                    } // end of if else   
                    xTurn = !xTurn;             
                    checkWinCondition(board);
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

function checkWinCondition(board) {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] != null && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} has won the game! Congratulations!`)
        }        
    }
}

let game = new playGame();
game.takeTurns(true);



