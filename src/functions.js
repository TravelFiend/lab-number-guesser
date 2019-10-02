const compareNumbers = (guess, correctNumber) => {
    if (guess > 20 || guess < 1) {
      return "invalid";
    } else if (guess === correctNumber) {
        return 0;
    } else if (guess > correctNumber) {
        return 1;
    } else if (guess < correctNumber) {
        return -1;
    } else {

    }
};

export default compareNumbers;