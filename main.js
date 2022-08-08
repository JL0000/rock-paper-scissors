DRAW = 0
LOSE = 1
WIN = 2

function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"]
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return DRAW
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"
    || playerSelection == "PAPER" && computerSelection == "SCISSORS"
    || playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return LOSE
    }
    else {
        return WIN
    }
}

function displayResult(result, playerSelection, computerSelection){
    if (result === DRAW) {
        console.log(`It's a draw! You both chose ${playerSelection}`);
    }
    else if (result === LOSE) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }

}

function displayFinalResult(counter) {
    if (counter < 0){
        console.log("The computer is the winner");
    }
    else if (counter > 0) {
        console.log("The player is the winner");
    }
    else {
        console.log("It is a draw!")
    }
}

function game() {
    const results = [0, -1, 1];
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What do you play?").toUpperCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        displayResult(result, playerSelection, computerSelection);
        counter += results[result];
    }
    displayFinalResult(counter);
}