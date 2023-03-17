// Create a function that gets the computers choice for Rock, Paper, or Scissors
// Get a random number that we will use to assign a conditional based on the value of the number
// Return Rock, Paper, or Scissors based off the random number conditional

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
   switch(choice) {
    case 0:
        return "rock"
        break;
    case 1: 
        return "paper"
        break;
    case 2:
        return "scissors"
        break;
   }
}

// Create a function that plays a single round of Rock, Paper, Scissors
// Get the user input and store that value in a variable playerSelection
// Get the computers choice and store that value in a variable computerSelection
// Create a conditional AND statement for all possible combinations of result and print a comment to the console

function playRound(playerSelection, computerSelection) {

    let playerSelectionLower = playerSelection.toLowerCase();

    if (playerSelectionLower === "rock" && computerSelection === "rock") {
        return("It's a tie!");
    } else if (playerSelectionLower === "rock" && computerSelection === "paper") {
        return("You Lose! Paper beats Rock!");
    } else if (playerSelectionLower === "rock" && computerSelection === "scissors") {
        return("You Win! Rock beats Scissors!");
    } else if (playerSelectionLower === "paper" && computerSelection === "rock") {
        return("You Win! Paper covers Rock!");
    } else if (playerSelectionLower === "paper" && computerSelection === "paper") {
        return("It's a tie!");
    } else if (playerSelectionLower === "paper" && computerSelection === "scissors") {
        return("You Lose! Scissors cut Paper");
    } else if (playerSelectionLower === "scissors" && computerSelection === "rock") {
        return("You Lose! Rock crushes Scissors!");
    } else if (playerSelectionLower === "scissors" && computerSelection === "paper") {
        return("You Win! Scissors cut Paper!");
    } else if (playerSelectionLower === "scissors" && computerSelection === "scissors")
        return("It's a tie!");
}

// Create a function called game()
// Call playRound() inside of game()
// Create an iterative loop that plays a total of five games

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();