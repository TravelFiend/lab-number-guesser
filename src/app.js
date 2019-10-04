//Important the compareNumbers function from './functions.js
import compareNumbers from './functions.js';

const userGuess = document.getElementById('user-number');
const guessingSection = document.getElementById('guessing-section');
const resultsSection = document.getElementById('results-section');
const gameOverHeading = document.getElementById('game-over-heading');
const submitButton = document.getElementById('submit-button');
const computerNumber = document.getElementById('computer-number');
const triesRemaining = document.getElementById('tries-remaining');
const numberComparison = document.getElementById('number-comparison');

const randomComputerNumber = max => {
    return Math.floor(Math.random() * Math.floor(max) + 1);
};

let computerGuess = randomComputerNumber(20);

console.log(computerGuess);

let tries = 4;

computerNumber.textContent = computerGuess;

const displayOutput = () => {
    const userNumber = parseInt(userGuess.value, 10);
    userGuess.textContent = userNumber;

    const theNumbers = compareNumbers(userNumber, computerGuess);

    if (theNumbers === 'invalid') {
        numberComparison.textContent = "That doesn't seem to be a number between 1 and 20.";

    } else if (theNumbers === 0) {
        guessingSection.style.display = 'none';
        submitButton.disabled = true;
        resultsSection.style.display = 'block';
        gameOverHeading.textContent = 'You Got It!';
        tries--;

    } else if (tries === 0) {
        submitButton.disabled = true;
        gameOverHeading.textContent = 'Womp Womp';
        numberComparison.style.display = 'none';
        resultsSection.style.display = 'block';
        guessingSection.style.display = 'none';

    } else if (theNumbers === -1) {

        numberComparison.textContent = 'Hmm... too low.';
        tries--;

    } else {
        numberComparison.textContent = 'Nope, that\'s too high.';
        tries--;
    }
};

submitButton.addEventListener('click', () => {

    displayOutput();

    triesRemaining.textContent = tries;
    
});