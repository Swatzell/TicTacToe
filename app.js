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

function cellClicked() {
    if (gameOver) {
        resetGame();
        return;

    }
    if (event.target.textContent !== "") {
        return;
    };
    event.target.textContent = currentPlayer;
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

function checkWinner() {
    if (cells[0].textContent === currentPlayer && cells[1].textContent === currentPlayer && cells[2].textContent === currentPlayer) {
        console.log("WINNER!!!")
        gameOver = true;

    }
}

function resetGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
    currentPlayer = "X";
    gameOver = false;
}