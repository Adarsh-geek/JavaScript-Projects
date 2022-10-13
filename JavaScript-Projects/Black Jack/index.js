let cardsArray = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    name: "Adarsh",
    chips: 200
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player["name"] + ": $" + player.chips;

function addNewCard() {

    if(hasBlackJack == false && isAlive == true) {
        let newCard = getRandomCard();
        cardsArray.push(newCard);
        sum += newCard;
        start();
    }
}

function start() {
    console.log("Start game button is clicked");
        if(isAlive === false) {
            let firstCard = getRandomCard();
            let secondCard = getRandomCard();
            cardsArray = [firstCard, secondCard];
            sum = firstCard + secondCard;
        }
        isAlive = true;
        renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        isAlive = false;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    document.getElementById("message-el").textContent = message;
    document.getElementById("card-el").textContent = "Card: "

        for(let i=0; i<=cardsArray.length - 1; i++) {
            document.getElementById("card-el").textContent += cardsArray[i] + " ";
        }
    document.getElementById("sum-el").textContent = "Sum: "+ sum;
}

function getRandomCard() {
    let cardNum = Math.floor((Math.random() * 13)) + 1;
    if(cardNum === 1) {
        return 11;
    }
    else if( cardNum > 10) {
        return 10;
    }
    return cardNum;
}