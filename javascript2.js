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
    button.addEventListener('click', () => {
        declareOutcome();
    })
});

function playRound(playerSelection, computerSelection) {

    results = '';
    const youPlayed = document.createElement('p')
    youPlayed.textContent = ("You played " + playerSelection + " and the computer played " + computerSelection); 
    leaderboard.appendChild(youPlayed);

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
        const loseDisplay = document.createElement('p');
        loseDisplay.textContent = `${results}`;
        leaderboard.appendChild(loseDisplay);
    } else if (results === "You Win! Rock beats Scissors!" || results === "You Win! Paper covers Rock!" || results === "You Win! Scissors cut Paper!") {
        win++;
        wins.textContent = `Wins: ${win}`;
        const winDisplay = document.createElement('p');
        winDisplay.textContent = `${results}`;
        leaderboard.appendChild(winDisplay);
    } else if (results === "It's a tie!") {
        tie++;
        ties.textContent = `Ties: ${tie}`;
        const tieDisplay = document.createElement('p');
        tieDisplay.textContent = `${results}`;
        leaderboard.appendChild(tieDisplay);
    }

    console.log("You won: " + win);
    console.log("You lost: " + lose);
    console.log("You tied: " + tie);
}

function declareOutcome() {
    if (win === 5) {
        const winAnnounce = document.createElement('p');
        winAnnounce.textContent = 'YOU WON IT ALL!';
        leaderboard.appendChild(winAnnounce);
        
    } else if (lose === 5) {
        const loseAnnounce = document.createElement('p');
        loseAnnounce.textContent = 'YOU LOST IT ALL!';
        leaderboard.appendChild(loseAnnounce);
    } else if (tie === 5) { 
        const tieAnnounce = document.createElement('p');
        tieAnnounce.textContent = 'YOU TIED! PLAY AGAIN';
        leaderboard.appendChild(tieAnnounce);
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