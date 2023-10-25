# rock-paper-scissors
Rock, Paper, Scissors Game
This exercise requires that I build a game - Rock, Paper, Scissors to test out my JavaScript fundamental skills. 

The first part involves writing a function called 'getComputerChoice' that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
I started by thinking of how I can get the computer to randomly select among the three choices. 
I knew that Math.random is used to generate random numbers between 0 and 1, but excluding 1. 
I decided to find out if it can be used to do the same for other data types apart from numbers. 
After researching, I found a formula related to the method.
The formula allowed me to generate three random integers between two numbers, 1 and 3. 
Each of the three integers will represent either Rock, Paper or Scissors. 

The formula is as follows: 
    function getComputerChoice(min, max) {
        const randomComputerChoice = Math.floor(Math.random()*(max-min + 1) + min);
    }
I used the above and the "if...else" conditional statements to create the function. 
I then tested it on the browser's console using console.log to confirm that it works. 
The function successfully generated Rock, Paper, and Scissors at random. 

The second part involves writing a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock". 
After several tries I finally managed to write code that worked. I tested it on the browser's console and confirmed this. 

The third part involved writing code that asks the user for input. The result is then used to play one round of the game. 
This allowed me to write a function called "getPlayerChoice" that prompts the user for a response first before the computer takes its pick. 


