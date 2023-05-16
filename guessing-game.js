function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100);
    let attempts = 0;
    let hasWon = false;
  
    return function guess(number) {
      if (hasWon) {
        return "The game is over, you already won!";
      }
      attempts++;
      if (number === secretNumber) {
        hasWon = true;
        return `You win! You found ${number} in ${attempts} guesses.`;
      } else if (number < secretNumber) {
        return `${number} is too low!`;
      } else {
        return `${number} is too high!`;
      }
    };
  }

module.exports = { guessingGame };
