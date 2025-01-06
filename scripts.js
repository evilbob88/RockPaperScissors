function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } 
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase()
    if(!(choice == 'rock' || choice == 'paper' || choice == 'scissors')) {
        console.log("This is not a valid choice.");
        round -= 1
        return null;
    }
    return choice;    
}

let humanScore = 0
let computerScore = 0
let round = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log("No one wins!");
        }
        else if (computerChoice == 'paper') {
            console.log("You lose! Paper beats rock.");
            computerScore += 1
        }
        else if (computerChoice == 'scissors') {
            console.log("You win! Rock beats scissors.");
            humanScore += 1
        }
    }
    else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log("You win! Paper beats rock.");
            humanScore += 1
        }
        else if (computerChoice == 'paper') {
            console.log("No one wins!");
        }
        else if (computerChoice == 'scissors') {
            console.log("You lose! Scissors beats paper.");
            computerScore += 1
        }
    }
    else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            console.log("You lose! Rock beats scissors.");
            computerScore += 1
        }
        else if (computerChoice == 'paper') {
            console.log("You win! Scissors beats paper.");
            humanScore += 1
        }
        else if (computerChoice == 'scissors') {
            console.log("No one wins!");
        }
    }
}

function playGame() {
    while (round < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        round += 1
    }
    console.log(`Game Over! You scored ${humanScore} and the computer scored ${computerScore}`);
}

playGame()

