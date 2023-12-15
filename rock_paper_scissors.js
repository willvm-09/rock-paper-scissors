/*Begin with a function called getComputerChoice that will 
randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’*/

function getComputerChoice() {
    const randomComputerChoice = Math.floor(Math.random() * 3) + 1;

    if (randomComputerChoice === 1) {
        return "Rock";

    } else if (randomComputerChoice === 2) {
        return "Paper";

    } else if (randomComputerChoice === 3) {
        return "Scissors";
    }
}

/* Create a similar function for the player. 
Use prompt() to get input from the user. 

function getPlayerChoice() {
    const playerChoice = prompt("Rock, Paper, or Scissors?")
    
    if (playerChoice.toLowerCase() === "Rock") {
        return "Rock";
    }
    else if (playerChoice.toLowerCase() === "Paper") {
        return "Paper";
    }
    else if (playerChoice.toLowerCase() === "Scissors") {
        return "Scissors";
    }
}
*/


/* Write a function that plays a single round of Rock, Paper, Scissors.*/

function playRound (playerSelection, computerSelection) {

    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "You both picked Rock, it's a tie!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "You both picked Paper, it's a tie!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "You both picked Scissors, it's a tie!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors.";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock.";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper.";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors."
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper.";
    }
    }


/*Write a NEW function called game(). 
Use the previous function inside of this one to play 
a 5 round game that keeps score and reports a winner or loser at the end.*/


function game() {

        let computerScore = 0;
        let playerScore = 0;
        let tieScore = 0;

        const result = playRound(player, computer);

         for (let i = 1; i <= 5; i++ ) {

         if (result === "You both picked Rock, it's a tie!" || result === "You both picked Paper, it's a tie!" || result === "You both picked Scissors, it's a tie!") {
            tieScore++;
         } 
         else if (result === "You win! Rock beats Scissors." || result === "You win! Paper beats Rock." || result ===  "You win! Scissors beats Paper.") {
            playerScore++;
         }
         else if (result === "You lose! Paper beats Rock." || result === "You lose! Scissors beats Paper." || result ===  "You lose! Rock beats Scissors.") {
            computerScore++;
         }

    if (computerScore === 1 && tieScore === 4 || computerScore === 2 && tieScore === 3 || computerScore === 3 && tieScore === 2 
        || computerScore === 4 && tieScore === 1|| computerScore === 5 && tieScore === 0 || computerScore > playerScore) {
            return `You lose! Computer Score: ${computerScore} Player Score: ${playerScore} Tie Score: ${tieScore}`;
        }
    else if (playerScore === 1 && tieScore === 4 || playerScore === 2 && tieScore === 3 || playerScore === 3 && tieScore === 2 ||
        playerScore === 4 && tieScore === 1 || playerScore > computerScore) {
            return `You win! Player Score: ${playerScore} Computer Score: ${computerScore} Tie Score: ${tieScore}.` 
        }
    else if ((tieScore === 5) || (computerScore === 2 && playerScore === 2 && tieScore === 1) || 
    (playerScore === 1 && computerScore === 1 && tieScore === 3)) {
        return `It's a tie! Player Score: ${playerScore} Computer Score: ${computerScore} Tie Score: ${tieScore}. `
    }
}
}

// DOM Manipulation

    const chooseButtons = document.querySelectorAll(".choiceBtn");
    chooseButtons.forEach(button => button.addEventListener("click", () => {

        const player = button.textContent;
        const playerChoice = document.querySelector("#playerChoice");
        playerChoice.textContent = `Player: ${player}`;

        const computer = getComputerChoice();
        const computerChoice = document.querySelector("#computerChoice");
        computerChoice.textContent = `Computer: ${computer}`;

        const result = playRound(player, computer);
        const resultText = document.querySelector("#resultText");
        resultText.textContent = `Result: ${result}`;
    }
    ));
