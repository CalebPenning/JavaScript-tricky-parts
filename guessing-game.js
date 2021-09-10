function guessingGame() {
    // high order function that returns a guessing game instance
    const rand = Math.floor(Math.random() * 100)
    let guess = 0
    let hasWon = false
    return function(guessNum) {
        if (hasWon) return "The game is over, you already won!"
        guess++
        if (guessNum === rand) {
            hasWon = true
            return `You win! You found ${guessNum} in ${guess} guesses.`
        }
        else if (guessNum > rand) return `${guessNum} is too high!`
        else return `${guessNum} is too low!`
    }
}

module.exports = { guessingGame };
