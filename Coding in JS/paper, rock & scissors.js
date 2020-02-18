const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } 
  else {
    console.log('Wrong item.');
  }
};

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random()*3);
 if (randomNumber === 0) {
    return 'rock';
 }
  else if (randomNumber === 1){
    return 'paper';
  }
  else if (randomNumber === 2){
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'Draw';
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    }
    else {
      return 'You won!';
    }
  }
  else if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  else if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
} 
}

function playGame() {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
 console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();