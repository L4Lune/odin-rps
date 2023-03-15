// Create a function that gets the computers choice for Rock, Paper, or Scissors
// Get a random number that we will use to assign a conditional based on the value of the number
// Return Rock, Paper, or Scissors based off the random number conditional

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
   switch(randomNumber) {
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
// Get the user input and store that value in a variable playSelection
// Get the computers choice and store that value in a variable computerSelection
// Create a conditional AND statement for all possible combinations of result and print a comment to the console

function playRound(playerSelection, computerSelection) {
    const playerSelection = prompt("What are you throwing? ");
    const computerSelection = getComputerChoice();
}

// Create a function called game()
// Call playRound() inside of game()
// Create an iterative loop that plays a total of five games