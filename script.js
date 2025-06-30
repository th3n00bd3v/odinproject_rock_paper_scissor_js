let humanScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

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

function playRound(humanChoice, computerChoice) {
  // Case-insensitive comparison
  humanChoice = humanChoice.toLowerCase();

  let resultMessage = '';

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! You both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
  }

  // Update the result on the page
  resultDiv.textContent = resultMessage;
  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  // Check if someone has reached 5 points
  if (humanScore >= 5) {
    resultDiv.textContent = 'Congratulations! You win the game!';
    disableButtons();
  } else if (computerScore >= 5) {
    resultDiv.textContent = 'Sorry, you lost the game. Better luck next time!';
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById('rockBtn').disabled = true;
  document.getElementById('paperBtn').disabled = true;
  document.getElementById('scissorsBtn').disabled = true;
}

// Event Listeners for buttons
document.getElementById('rockBtn').addEventListener('click', function() {
  const computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

document.getElementById('paperBtn').addEventListener('click', function() {
  const computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

document.getElementById('scissorsBtn').addEventListener('click', function() {
  const computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});
