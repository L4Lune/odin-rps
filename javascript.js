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
// Get the user input and store that value in a variable button.id
// Get the computers choice and store that value in a variable computerSelection
// Create a conditional AND statement for all possible combinations of result and print a comment to the console

function playRound(button.id, computerSelection) {

    let button.idLower = button.id.toLowerCase();

    if (button.idLower === "rock" && computerSelection === "rock") {
        return("It's a tie!");
    } else if (button.idLower === "rock" && computerSelection === "paper") {
        return("You Lose! Paper beats Rock!");
    } else if (button.idLower === "rock" && computerSelection === "scissors") {
        return("You Win! Rock beats Scissors!");
    } else if (button.idLower === "paper" && computerSelection === "rock") {
        return("You Win! Paper covers Rock!");
    } else if (button.idLower === "paper" && computerSelection === "paper") {
        return("It's a tie!");
    } else if (button.idLower === "paper" && computerSelection === "scissors") {
        return("You Lose! Scissors cut Paper");
    } else if (button.idLower === "scissors" && computerSelection === "rock") {
        return("You Lose! Rock crushes Scissors!");
    } else if (button.idLower === "scissors" && computerSelection === "paper") {
        return("You Win! Scissors cut Paper!");
    } else if (button.idLower === "scissors" && computerSelection === "scissors")
        return("It's a tie!");
}

// Create a function called game()
// Call playRound() inside of game()
// Create an iterative loop that plays a total of five games

function game() {
    for (let i = 0; i < 5; i++) {
        let button.id = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(button.id, computerSelection));
    }
}

game();