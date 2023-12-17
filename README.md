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
I wrote a function called "getPlayerChoice" that prompts the user for a response first before the computer takes its pick. 

The fourth part involved writing a function called 'game' that plays a 5-round-game, keeps score, and reports a winner or loser at the end.
After much fruitful effort and thought, I managed to write code that works for this last part. I then spent time updating this code to make sure
it covered all outcomes.

The next part of writing this code involved practising what I had learnt in DOM Manipulation and git branching.
The short narration of what I did was to first create the necessary elements in my HTML required to display information on the screen. This included buttons for the choices the player is supposed to pick (Rock, Paper, and Scissors) and the text for displaying the player's and computer choices and the final result.
I then commented out the code that requests the user to type in Rock, Paper, or Scissors via a prompt. The work of prompt would be taken over by the buttons. 

I added an event listener to the buttons after selecting all of them using their class in my JS. For each click, I wanted the game to display what the player had clicked, call the getComputerChoice function and display what the computer randomly picks, and call the function that compares the results of a single round of the game and display the result. This was successfully achieved and the changes committed. 


