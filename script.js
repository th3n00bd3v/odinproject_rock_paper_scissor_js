console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 0.33) {
    return "rock";
  } else if (randomNum < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Enter rock, paper, or scissors").toLowerCase();
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  // Case-insensitive comparison
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Declare the final winner
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lost the game. Better luck next time!");
  } else {
    console.log("The game is a tie!");
  }

  // Display final score
  console.log(`Final score: You: ${humanScore} | Computer: ${computerScore}`);
}

// Call the playGame function to start the game
playGame();
