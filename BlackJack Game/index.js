let min = 0;
let max = 11;

let isAlive = true;
let message = '';
let hasWon = false;

let num1;
let num2;
let sum = 0;
let isGameOn = false;

function Game() {

    if (isGameOn === false)
        startGame()
    else {
        message = 'Game is Already on,pick a new card';
        outcome();
    }
}

function startGame() {
    isGameOn = true;

    if (isAlive === false) {
        message = 'Sorry you have already lost';
    } else if (hasWon === true) {
        message = 'You have already WON !!';
    } else
        newCard();

}

function newCard() {
    num1 = parseInt(Math.random() * (max - min) + min);
    num2 = parseInt(Math.random() * (max - min) + min);

    sum += num1 + num2;

    if (sum < 21)
        message = 'Do you want to draw a new card';
    else if (sum > 21) {
        message = 'Sorry you lost';
        isAlive = false;
    } else {
        message = 'You have won !!! Congrats';
        hasWon = true;
    }

    outcome();
}

function outcome() {
    document.getElementById("cards-el").textContent = 'Cards : ' + num1 + ' & ' + num2;
    document.getElementById("sum-el").textContent = 'Sum : ' + sum;
    document.getElementById("outcome-el").textContent = 'Outcome : ' + message;
}

function newGame() {
    isGameOn = false;
    isAlive = true;
    sum = 0;
    Game();
}
// console.log(sum | 0);
// console.log(parseInt(sum, 10));
// console.log(Math.floor(sum))
// console.log(sum);