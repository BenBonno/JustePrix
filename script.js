const playerName = prompt("What's your name ?")
const random = Math.round(Math.floor(Math.random() * 100) + 1);
let answer = "";
let outOfRange;
console.log(random);
do {
    outOfRange = false;
    answer = parseInt(prompt("Give me a integer number between 1 and 100"));

    if (isNaN(answer)) {
        alert("I said a number");
    }
    if (answer < 1 || answer > 100) {
        alert("Out of range")
        outOfRange = true;
    }
    if (answer > 1 || answer < 100) {
        answer = answer
    }
}
while (isNaN(answer) || outOfRange === false);

do {
    if (answer < random) {
        answer = parseInt(prompt("It is more"));
    }
    else if (answer > random) {
        answer = parseInt(prompt("It is less"));
    }
}
while (!isNaN(answer) && answer !== random);

alert(`Well done ! ${playerName}`);

