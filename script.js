const MAX_RESULTS = 8
const DRAW = 0;
const LOSE = -1;
const WIN = 1;
let counter = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", playRound));

const result_wrapper = document.querySelector(".result-wrapper");

result_wrapper.addEventListener("click", reset), false;

function reset(e) {
    console.log(e)
    if (e.target.className === "start-again") {
        buttons.forEach(button => button.disabled = !button.disabled);
        limitResultWrapperChild(0);
        counter = 0;
    }
}

function playRound() {
    const playerSelection = this.className;
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection){
        update(DRAW, playerSelection, computerSelection);
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"
    || playerSelection == "PAPER" && computerSelection == "SCISSORS"
    || playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        update(LOSE, playerSelection, computerSelection);
    }
    else {
        update(WIN, playerSelection, computerSelection);
    }
}

function update(result, playerSelection, computerSelection) {
    counter += result;
    if (counter <= -5 || counter >= 5) {
        updateFinalResult();
    }
    else {
        updateResult(result, playerSelection, computerSelection);
    }
}

function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function updateResult(result, playerSelection, computerSelection){
    if (result === DRAW) {
        displayResult(`It's a draw! You both chose ${playerSelection}`);
    }
    else if (result === LOSE) {
        displayResult(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        displayResult(`You win! ${playerSelection} beats ${computerSelection}`);
    }
}

function updateFinalResult() {
    limitResultWrapperChild(0);
    const button = document.createElement("button");
    button.textContent = "Start again!";
    button.classList.add("start-again");
    result_wrapper.appendChild(button);
    buttons.forEach(button => button.disabled = !button.disabled);
    if (counter < 0){
        displayResult("The computer is the winner");
        console.log();
    }
    else if (counter > 0) {
        displayResult("You are the winner");
    }
    else {
        displayResult("It is a draw!");
    }
}

function displayResult(text) {
    limitResultWrapperChild(MAX_RESULTS);
    const result_p = document.createElement("p");
    result_p.classList.add("result");
    result_p.textContent = text;
    result_wrapper.appendChild(result_p);
}

function limitResultWrapperChild(n) {
    while (result_wrapper.childElementCount > n) {
        result_wrapper.removeChild(result_wrapper.firstChild);
    }
}