let win = 0;
let lose = 0;
let tie = 0;

function getComputerSelection() {
    let choice = Math.floor(Math.random() * 3);
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerSelection());
    });
    button.addEventListener('click', () => {
        keepScore(results);
    });
});

function testEventListener(playerSelection, computerSelection) {
    alert(playerSelection);
    alert(computerSelection);
}


function playRound(playerSelection, computerSelection) {

    results = '';
    alert(playerSelection);
    alert(computerSelection);

    if (win === 5) {
        alert("You win!");
    } else if (lose === 5) {
        alert("You lose!");
    }
    if (playerSelection === "rock" && computerSelection === "rock") {
        results = "It's a tie!";
        return results;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        results = "You Lose! Paper covers Rock!";
        return results;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        results = "You Win! Rock beats Scissors!";
        return results;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results = "You Win! Paper covers Rock!";
        return results;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        results = "It's a tie!";
        return results;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        results = "You Lose! Scissors cut Paper";
        return results;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        results = "You Lose! Rock crushes Scissors!";
        return results;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        results = "You Win! Scissors cut Paper!";
        return results;
    } else if (playerSelection === "scissors" && computerSelection === "scissors")
        results = "It's a tie!";
        return results;
}

function keepScore(results) {

    if (results === "You Lose! Paper covers Rock!" || results === "You Lose! Scissors cut Paper" || results === "You Lose! Rock crushes Scissors!") {
        lose++; 
        loses.textContent = `Loses: ${lose}`;
    } else if (results === "You Win! Rock beats Scissors!" || results === "You Win! Paper covers Rock!" || results === "You Win! Scissors cut Paper!") {
        win++;
        wins.textContent = `Wins: ${win}`;
    } else if (results === "It's a tie!") {
        tie++;
        ties.textContent = `Ties: ${tie}`;
    }

    console.log("You won: " + win);
    console.log("You lost: " + lose);
    console.log("You tied: " + tie);
}

function declareOutcome() {
    if (win > lose) {
        console.log("YOU WON IT ALL!")
    } else if (lose > win) {
        console.log("YOU LOSE!")
    } else { 
        console.log("It's a tie game! Play a few more rounds!");
    }
}

function game() {

        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerSelection();
        const results = playRound(playerSelection, computerSelection);

        console.log("Computer plays: " + computerSelection);
        console.log("You play: " + playerSelection);

        console.log(playRound(playerSelection, computerSelection));
        keepScore(results);
    }
    declareOutcome();

const leaderboard = document.querySelector("#leaderboard");

const wins = document.createElement('p');
wins.classList.add('wins');
wins.textContent = `Wins: ${win}`;
leaderboard.appendChild(wins);

const loses = document.createElement('p');
loses.classList.add('loses');
loses.textContent = `Loses: ${lose}`;
leaderboard.appendChild(loses);

const ties = document.createElement('p');
ties.classList.add('ties');
ties.textContent = `Ties: ${tie}`;
leaderboard.appendChild(ties);