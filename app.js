const cells = document.querySelectorAll(".row>div");
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}
let currentPlayer = "X"
let gameOver = false;
let moveCount = 0;

function cellClicked(event) {
    if (gameOver) {
        resetGame();
        return;

    }
    if (event.target.textContent !== "") {
        return;
    };
    //draws current player
    event.target.textContent = currentPlayer;
    moveCount++
    //console.log(moveCount)
    checkWinner();
    togglePlayer();

}

function togglePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
}
//much simpler
function checkWinner() {
    if (checkCombo(0, 1, 2)) {
        console.log("WINNER!!!")
        gameOver = true;
    } else if (checkCombo(3, 4, 5)) {
        console.log("WINNER!!!")
        gameOver = true;
    } else if (checkCombo(6, 7, 8)) {
        console.log("WINNER!!!")
        gameOver = true;
    } else if (checkCombo(0, 3, 6)) {
        console.log("WINNER!!!")
        gameOver = true;
    } else if (checkCombo(1, 4, 7)) {
        console.log("WINNER!!!")
        gameOver = true;
    } else if (checkCombo(2, 5, 8)) {
        console.log("WINNER!!!")
        gameOver = true;
    } else if (checkCombo(0, 4, 8)) {
        console.log("WINNER!!!")
        gameOver = true;
    } else if (checkCombo(2, 4, 6)) {
        console.log("WINNER!!!")
        gameOver = true;
    } else if (moveCount === 9) {
        console.log("Draw!")
        gameOver = true
    }

}

function resetGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
    currentPlayer = "X";
    gameOver = false;
    moveCount = 0;
}

function checkCombo(a, b, c) {
    if (cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer) {
        return true
    } else {
        return false

    }
}