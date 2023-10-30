/* Begin with a function called getComputerChoice that will 
randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’*/

function getComputerChoice () {
    const randomComputerChoice = Math.floor(Math.random() * 3) + 1;

    if (randomComputerChoice === 1) {
        return "Rock";

    } else if (randomComputerChoice === 2) {
        return "Paper";

    } else if (randomComputerChoice === 3) {
        return "Scissors";

    }

}

/*Create a similar function for the player. 
Use prompt() to get input from the user. */

function getPlayerChoice () {
    const playerChoice = prompt ("Rock, Paper, or Scissors?");
    
    if (playerChoice.toLowerCase() === "rock") {
        return "Rock";
    }
    else if (playerChoice.toLowerCase() === "paper") {
        return "Paper";
    }
    else if (playerChoice.toLowerCase() === "scissors") {
        return "Scissors";
    } 
}

/* Write a function that plays a single round of Rock, Paper, Scissors.*/

function playRound (playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        return "You both picked Rock, it's a tie!";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        return "You both picked Paper, it's a tie!";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        return "You both picked Scissors, it's a tie!";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors.";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper.";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors."
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper.";
    } 
    }



/*Write a NEW function called game(). 
Use the previous function inside of this one to play 
a 5 round game that keeps score and reports a winner or loser at the end.*/

        let computerScore = 0;
        let playerScore = 0;
        let tieScore = 0;

function game(){

    for (let i=1; i <= 5; i++) {

        let result = playRound(getPlayerChoice(), getComputerChoice());

         if (result === "You both picked Rock, it's a tie!" || result === "You both picked Paper, it's a tie!" || result === "You both picked Scissors, it's a tie!") {
            tieScore++;
         } 
         else if (result === "You win! Rock beats Scissors." || result === "You win! Paper beats Rock." || result ===  "You win! Scissors beats Paper.") {
            playerScore++;
         }
         else if (result === "You lose! Paper beats Rock." || result === "You lose! Scissors beats Paper." || result ===  "You lose! Rock beats Scissors.") {
            computerScore++;
         }
        }

    if (computerScore === 1 && tieScore === 4 || computerScore === 2 && tieScore === 3 || computerScore === 3 && tieScore === 2 
        || computerScore === 4 && tieScore === 1|| computerScore === 5 && tieScore === 0 || computerScore > playerScore) {
            return "You lose! You lost the game to a computer!";
        }
    else if (playerScore === 1 && tieScore === 4 || playerScore === 2 && tieScore === 3 || playerScore === 3 && tieScore === 2 ||
        playerScore === 4 && tieScore === 1 || playerScore > computerScore) {
            return "You win! You beat the Computer."
        }
    else if ((computerScore === 3 && playerScore === 3) || (tieScore === 5) || (computerScore === 2 && playerScore === 2 && tieScore === 1) || 
    (playerScore === 1 && computerScore === 1 && tieScore === 3)) {
        return "It's a tie!"
    }
}
    const result = game();
    console.log(result);

