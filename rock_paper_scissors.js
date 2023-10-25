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

getComputerChoice(1, 3);

//Create a similar function for the player. Use prompt() to get input from the user. 

function getPlayerChoice () {
    const playerChoice = prompt ("Rock, Paper, or Scissors?");
    
    if (playerChoice.toLowerCase() === "rock" ) {
        return "Rock";
    }
    if (playerChoice.toLowerCase() === "paper") {
        return "Paper";
    }
    if (playerChoice.toLowerCase() === "scissors") {
        return "Scissors";
    }
}
getPlayerChoice();

/* Write a function that plays a single round of Rock, Paper, Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" 
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). */

function playRound (playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        return "You both picked Rock, it's a tie!"
    }
    if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        return "You both picked Paper, it's a tie!"
    }
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        return "You both picked Scissors, it's a tie!"
    }
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock."
    }
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors."
    }
    if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock."
    }
    if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper."
    }
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors."
    }
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper."
    }
}

playRound(getPlayerChoice(), getComputerChoice(1, 3));

/* Write a NEW function called game(). 
Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. */

    for (let i=1; i<=5; i++) {
        playRound (i);
    }

