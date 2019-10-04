const compareNumbers = (guess, correctNumber) => {
    if (guess > 20 || guess < 1 || typeof guess !== 'number') {
        return 'invalid';
    } else if (guess === correctNumber) {
        return 0;
    } else if (guess > correctNumber) {
        return 1;
    } else {
        return -1;
    }
};

export default compareNumbers;