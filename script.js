'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNum);
// document.querySelector('.number').textContent = secretNum;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no number
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

    //when the player win
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Congrats, You won!';
    document.querySelector('.number').textContent = secretNum;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.body.style.backgroundColor = '#60b347';
  }
  //when guess is wrong
  else if (guess !== secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNum ? 'Too high!' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNum = Math.trunc(Math.random() * 20) + 1;
  //   console.log(secretNum);

  document.querySelector('.number').textContent = '?';
  const guess = Number((document.querySelector('.guess').value = ''));

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
});
