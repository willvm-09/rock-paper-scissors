// Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

function getComputerChoice (min, max) {
    const randomComputerChoice = Math.floor(Math.random() * (max - min + 1) + min);

    if (randomComputerChoice === 1) {
        return "Rock";

    } else if (randomComputerChoice === 2) {
        return "Paper";

    } else if (randomComputerChoice === 3) {
        return "Scissors";

    }

}

console.log (getComputerChoice(1, 3));

/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" 
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). */

function playRound (playerSelection, computerSelection) {

    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "You both picked Rock, it's a tie!"
    }
    if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "You both picked Paper, it's a tie!"
    }
    if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "You both picked Scissors, it's a tie!"
    }
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock."
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors."
    }
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock."
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper."
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors."
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper."
    }
}

console.log (playRound("Rock", getComputerChoice(1, 3)));


