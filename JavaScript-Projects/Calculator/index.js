let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el");
let ans = 0;

function add() {
    ans = num1 + num2;
    sumEl.textContent = ans;
}

function subtract() {
    ans = num1 - num2;
    sumEl.textContent = ans;
}

function multiply() {
    ans = num1 * num2;
    sumEl.textContent = ans;
}

function divide() {
    ans = num1/num2;
    sumEl.textContent = ans;
}


let firstCard;
let secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = " ";

firstCard = Math.random() * 12;
secondCard = Math.random() * 12;

console.log(firstCard);
console.log(secondCard);

let total = firstCard + secondCard;


if(total <= 21) {
    message = "Do you want to draw a new card?";
}
else if(total === 21) {
    message = "Wooho!  you have got BlackJack !";
    hasBlackJack = true;
}
else {
    message = "You're out of the game";
    isAlive = false;
    // message = "We're logging out";
}

console.log(total);
console.log(hasBlackJack);
console.log(isAlive);
console.log(message);