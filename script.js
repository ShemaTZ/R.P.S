function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    else if (randomNumber < 0.67) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
        return "human";
    } else {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}

function getUserChoice() {
    while (true) {
        const input = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
        if (["rock", "paper", "scissors"].includes(input)) {
            return input;
        } else {
            alert("Invalid choice! Please enter rock, paper, or scissors.");
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}:`);

        const humanChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);

        const result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        console.log(`Score after Round ${round}: You - ${humanScore}, Computer - ${computerScore}`);
    }

    console.log("\nFinal Results:");
    if (humanScore > computerScore) {
        console.log("🎉 Congratulations, you win the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 The computer wins the game. Better luck next time!");
    } else {
        console.log("🤝 It's a tie overall!");
    }
}

// Start the game
playGame();
