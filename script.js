const playerName = prompt("What's your name ?")
const random = Math.floor(Math.random() * 100) + 1;
let answer

do {
    answer = parseInt(prompt("Give me a number between 1 and 100", "0"), 10);
    if (isNaN(answer)) {
        alert("I said a number noob");
    }

}
while (isNaN(answer));

