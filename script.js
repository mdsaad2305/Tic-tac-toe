var cellElements = document.querySelectorAll('.cell');
var turn = 'X';
var player_won = '';
var message_box = document.querySelector("#message-box");
var score_1 = document.querySelector("#player1-score");
var score_2 = document.querySelector("#player2-score");
var player1Score = 0;
var player2Score = 0;

cellElements.forEach(function (cell) {
    cell.addEventListener('click', function () {
        var cell_content = cell.textContent;

        if (cell_content === '' && turn === 'X') {
            cell.textContent = 'X';
            turn = 'O';
            message_box.textContent = "Your Turn Player O";
        } else if (cell_content === '' && turn === 'O') {
            cell.textContent = 'O';
            turn = 'X';
            message_box.textContent = "Your Turn Player X";
        }

        if (checkWin()) {
            message_box.textContent = "Player " + player_won + " won";

            if (player_won === 'X') {
                player1Score++;
            } else {
                player2Score++;
            }
            score_1.textContent = player1Score;
            score_2.textContent = player2Score;

        }
    });
});

// checking if any win condition is fulfilled after each turn
function checkWin() {
    if (horizontal() || vertical() || cross()) {
        return true;
    }
    return false;
}

// checking horizontal win condition
function horizontal() {
    for (let i = 0; i < 3; i++) {
        var cell1 = cellElements[3*i].textContent;
        var cell2 = cellElements[(3*i)+1].textContent;
        var cell3 = cellElements[(3*i)+2].textContent;

        if (cell1 === cell2 && cell2 === cell3 && cell3 !== '') {
            player_won = cell1;
            return true;
        }
    }
    return false;
}

// checking vertical win condition
function vertical() {
    for (let i = 0; i < 3; i++) {

        var cell1 = cellElements[i].textContent;
        var cell2 = cellElements[i+3].textContent;
        var cell3 = cellElements[i+6].textContent;

        if (cell1 === cell2 && cell2 === cell3 && cell3 !== '') {
            player_won = cell1;
            return true;
        }
    }
    return false;
}

// checking diagonal win condition
function cross(){
    var cell1 = cellElements[0].textContent;
    var cell2 = cellElements[2].textContent;
    var cell3 = cellElements[4].textContent;
    var cell4 = cellElements[6].textContent;
    var cell5 = cellElements[8].textContent;

    if(cell1 === cell3 && cell3 === cell5 && cell5 !== ''){
        player_won = cell1;
        return true;
    } else if(cell2 === cell3 && cell3 === cell4 && cell4 !== ''){
        player_won = cell2;
        return true;    
    }

}

// reseting the game which initializes the scores to 0 and starts new game
function resetGame() {
    cellElements.forEach(function (cell) {
        cell.textContent = '';
    });
    turn = 'X';
    player_won = '';
    message_box.textContent = 'Your turn player 1';
    score_1.textContent = '0';
    score_2.textContent = '0';
    player1Score = 0;
    player2Score = 0;
}

// starting new game
function newGame() {
    cellElements.forEach(function (cell) {
        cell.textContent = '';
    });
    turn = 'X';
    player_won = '';
    message_box.textContent = 'Your turn player 1';
}

var resetButton = document.querySelector('.reset');
var newGameButton = document.querySelector('.new-game');

resetButton.addEventListener('click', resetGame);
newGameButton.addEventListener('click', newGame);


