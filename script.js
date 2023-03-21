"use strict";

// Selecting Elements
const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");
const score0El = document.querySelector("#score-0");
const score1El = document.getElementById("score-1");
const current0El = document.querySelector("#current-0");
const current1El = document.querySelector("#current-1");
const diceEl = document.querySelector(".dice");

const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const btnRestart = document.querySelector(".restart");

// Starting Condition
let score, currentScore, activePlayer, playing;
const startingCondition = () => {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player-winner");
  player1El.classList.remove("player-winner");
  player0El.classList.add("player-active");
  player1El.classList.remove("player-active");
};

function switchPlayer() {
  document.querySelector(`#current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player-active");
  player1El.classList.toggle("player-active");
}

startingCondition();

// Roll Dice Click
btnRoll.addEventListener("click", () => {
  if (playing) {
    // Random Dice number Generate
    let dice = Math.trunc(Math.random() * 6) + 1;

    // Display Dice
    diceEl.classList.remove("hidden");
    diceEl.src = `./Images/dice-${dice}.svg`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold Click
btnHold.addEventListener("click", () => {
  if (playing) {
    // Add Current score to Total score
    score[activePlayer] += currentScore;
    document.querySelector(`#score-${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      // active player wins the game
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      // finish the game
    } else {
      // switch the player
      switchPlayer();
    }
  }
});

//todo: add the new game functionality in the current file. when click on the new game button all the value will revert back to their original states including the playing variable.

btnRestart.addEventListener("click", () => {
  startingCondition();
});

