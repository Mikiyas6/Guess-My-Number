'use strict';
let correctNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const resetGame = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  correctNumber = Math.trunc(Math.random() * 21);
};

// #################### Check Button ##############
document.querySelector('.check').addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);
  if (!guessedNumber) {
    displayMessage('⛔ No Number');
  } else {
    if (score <= 0) {
      displayMessage('💀 You Lose!');
    } else {
      if (guessedNumber === correctNumber) {
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent = guessedNumber;
        document.querySelector('.highscore').textContent = Math.max(
          Number(document.querySelector('.highscore').textContent),
          Number(document.querySelector('.score').textContent)
        );
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // Setting a timer to reset the game after 10 seconds (100000 milliseconds)
        setTimeout(resetGame, 10000);
      } else if (guessedNumber < correctNumber) {
        displayMessage('📉 Too Low');
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guessedNumber > correctNumber) {
        displayMessage('📈 Too High');
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
  }
});

// ################# Play Again Button ##############
document.querySelector('.again').addEventListener('click', resetGame);
