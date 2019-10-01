// IMPORT MODULES under test here:
// import example from '../src/example.js';

import compareNumbers from '../src/functions.js';

const test = QUnit.test;

test('Is the user\'s number less than the computers number?', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const userNumber = 4;
    const computerNumber = 19;

    //Act 
    // Call the function you're testing and set the result to a const

    const comparison = compareNumbers(userNumber, computerNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(comparison, -1);
});

test('Is the user\'s number greater than the computers number?', function(assert) {
//Arrange
// Set up your parameters and expectations

const userNumber = 15;
const computerNumber = 7;

//Act 
// Call the function you're testing and set the result to a const

const comparison = compareNumbers(userNumber, computerNumber);

//Assert
// Make assertions about what is expected valid result
assert.equal(comparison, 1);
});

test('Is the user\'s number equal to the computers number?', function(assert) {
//Arrange
// Set up your parameters and expectations

const userNumber = 15;
const computerNumber = 15;

//Act 
// Call the function you're testing and set the result to a const

const comparison = compareNumbers(userNumber, computerNumber);

//Assert
// Make assertions about what is expected valid result
assert.equal(comparison, 0);
});
