function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    else if (randomNumber < 0.67) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        return `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Create a results display element
    const resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    document.body.appendChild(resultsDiv); // Append to body or container

    // Function to handle a round of play
    function handleRound(playerSelection) {
        const computerSelection = getComputerChoice();
        const resultMessage = playRound(playerSelection.toLowerCase(), computerSelection);

        // Update scores based on the result
        if (resultMessage.includes("win")) {
            humanScore++;
        } else if (resultMessage.includes("lose")) {
            computerScore++;
        }

        // Update results display
        resultsDiv.innerHTML = `
            <p>${resultMessage}</p>
            <p>Scores => You: ${humanScore}, Computer: ${computerScore}</p>
        `;

        // Check if the game is over
        if (humanScore === 5 || computerScore === 5) {
            let finalMessage;
            if (humanScore > computerScore) {
                finalMessage = "🎉 Congratulations, you win the game!";
            } else {
                finalMessage = "💻 The computer wins the game. Better luck next time!";
            }
            resultsDiv.innerHTML += `<p>${finalMessage}</p>`;
            // Disable buttons or reset scores (optional)
            disableButtons();
        }
    }

    // Create buttons for player choices
    const container = document.querySelector("#container");

    const rockButton = document.createElement("button");
    rockButton.textContent = "Rock";
    rockButton.addEventListener("click", () => handleRound("Rock"));

    const paperButton = document.createElement("button");
    paperButton.textContent = "Paper";
    paperButton.addEventListener("click", () => handleRound("Paper"));

    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";
    scissorsButton.addEventListener("click", () => handleRound("Scissors"));

    // Append buttons to the container
    container.appendChild(rockButton);
    container.appendChild(paperButton);
    container.appendChild(scissorsButton);
}

// Function to disable buttons after game ends
function disableButtons() {
    const buttons = document.querySelectorAll("#container button");
    buttons.forEach(button => button.disabled = true);
}

// Start the game
playGame();