const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const playerScore = document.querySelector('.player-score p');
const computerScore = document.querySelector('.computer-score p');
const results = document.querySelector('.results p');

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection) {
  const options = ['rock', 'paper', 'scissors'];
  const computerSelection = options[Math.floor(Math.random() * 3)];
  let result = '';

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = 'You win!';
    playerWins++;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = 'Computer wins!';
    computerWins++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = 'You win!';
    playerWins++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result = 'Computer wins!';
    computerWins++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = 'You win!';
    playerWins++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = 'Computer wins!';
    computerWins++;
  } else {
    result = "It's a tie!";
  }

  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;
  results.textContent = `You played ${playerSelection}, the computer played ${computerSelection}. ${result}`;
}

rockButton.addEventListener('click', () => {
  playRound('rock');
});

paperButton.addEventListener('click', () => {
  playRound('paper');
});

scissorsButton.addEventListener('click', () => {
  playRound('scissors');
});

