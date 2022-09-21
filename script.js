const playerName = prompt("What's your name ?")
const random = Math.round(Math.floor(Math.random() * 100) + 1);
let answer

do {
    answer = parseInt(prompt("Give me a number between 1 and 100", "1<number<100"));
    if (isNaN(answer)) {
        alert("I said a number");
    }
    if (answer < 1 || answer > 100) {
        alert("Out of range")
    }
}
while (isNaN(answer));

