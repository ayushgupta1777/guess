// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        showMessage("Please enter a valid number between 1 and 100.");
    } else if (guess === secretNumber) {
        showMessage(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
        document.getElementById('guessInput').disabled = true;
    } else if (guess < secretNumber) {
        showMessage("Try a higher number.");
    } else {
        showMessage("Try a lower number.");
    }
}

function resetGame() {
    // Generate a new random number
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').innerText = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}
