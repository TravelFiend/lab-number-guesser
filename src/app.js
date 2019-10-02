import compareNumbers from './functions.js';

const userGuess = document.getElementById('user-number');

function randomComputerNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

let computerGuess = randomComputerNumber(21);

console.log(computerGuess);

const computerNumber = document.getElementById('computer-number');
computerNumber.textContent = computerGuess;



const triesRemaining = document.getElementById('tries-remaining');
const numberComparison = document.getElementById('number-comparison');

let tries = 4;

const guessingSection = document.getElementById('guessing-section');
const resultsSection = document.getElementById('results-section');
const gameOverHeading = document.getElementById('game-over-heading');

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    tries = tries - 1;

    triesRemaining.textContent = tries;

    const userNumber = parseInt(userGuess.value, 10);
    userGuess.textContent = userNumber;
    
    const theNumbers = compareNumbers(userNumber, computerGuess);
    if (theNumbers === "invalid") {
      console.log(theNumbers)
      numberComparison.textContent = "That doesn't seem to be a number between 1 and 20.";
      
    } else if (tries === 0) {
      submitButton.disabled = true;
      gameOverHeading.textContent = "Womp Womp";
      numberComparison.style.display = "none";
      resultsSection.style.display = "block";
      guessingSection.style.display = "none";

    } else if (theNumbers === 0) {
      guessingSection.style.display = "none";
      submitButton.disabled = true;
      resultsSection.style.display = "block";
      gameOverHeading.textContent = "You Got It!";

    } else if (theNumbers === -1) {

      numberComparison.textContent = 'Hmm... too low.';

    } else {
      numberComparison.textContent = 'Nope, that\'s too high.';
    };

    

    
});