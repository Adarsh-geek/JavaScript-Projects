// document.getElementById("count-el").innerText = "5";

let myAge = 24;
// console.log(myAge);

let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;

console.log(myAge * humanDogRatio);

let bonusPoints = 50;

bonusPoints += 50;
bonusPoints -= 75;
bonusPoints += 45;

console.log(bonusPoints);

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalLap() {
    console.log(lap1 + lap2 + lap3);
}

totalLap();


let countEL = document.getElementById("count-el");
let count = 0;

function increment() {
    "use-strict";
    count++;
    document.getElementById("count-el").innerText = count;
}

function save() {
    document.getElementById("count-el").innerText = 0;
    previousCount();
    count = 0;
}

function previousCount() {
    document.getElementById("save-el").textContent += count + " - "; // textContent can be used in place of innerText to display the space as string on a webpage 
}


let name = "Adarsh Kumar";
let greeting = "Hi , my name is ";

let myGreeting = greeting + name;

console.log(myGreeting);


// In race of a string and number , a string always wins.

let points = 4;

let bonusPoint = "10";

console.log(points + bonusPoint); // o/p: 410
console.log("5" + "1"); // o/p:51
console.log(2 + "11"); //o/p: 211
console.log(2 + 1); // o/p: 3

let myPoints = 3;

function add3Points() {
    myPoints += 3;
}

function remove1Points() {
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();

remove1Points();
remove1Points();

console.log(myPoints);