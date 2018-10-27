// Game values
let min         = 1,
    max         = 10,
    winningNum  = getRandomNumber(min, max),
    guessesLeft = 3;

// UI Elements
const game     = document.querySelector('#game'),
      minNum   = document.querySelector('.min-num'),
      maxNum   = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message  = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
    console.log(e.target);
   if(e.target.className === 'play-again') {
       location.reload();
   }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    console.log(guess);

    if (isNaN(guess) || guess < min || guess > max) {
        guessInput.style.borderColor = 'red';
        setMessage('Please enter a number between ' + min + ' and ' + max, 'red');
        return;
    }

    // Check if won
    if (guess === winningNum) {
        // Game over - won
        gameOver(true, winningNum + ' is correct! YOU WIN!');
    } else {
        // Wrong number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(false, 'Game Over, you lost. The correct number was ' + winningNum);
        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(guess + ' is not correct. ' + guessesLeft + ' guesses left', 'red');
        }
    }
});

// Game over
function gameOver(won, msg) {
    const color = won === true ? 'green' : 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set message
    setMessage(msg, color);

    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get Random Number
function getRandomNumber(min, max) {
    return Math.floor(Math.random()* (max-min + 1) + min);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
