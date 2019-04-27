/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6 + 1);

// rolling the button and changing the dice value

//1 invisible dice at the start

document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
//2 Seclecting the button and adding event listener

btnRoll = document.querySelector(".btn-roll").addEventListener("click", () => {
  // 1. Random Number
  let dice = Math.floor(Math.random() * 6 + 1);
  //2. Making the btn visible
  let diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = `./img/dice-${dice}.png`;

  //3 update the score if the number is NOT 1
  if (dice !== 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
    document.querySelector(`.player-1-panel`).classList.toggle("active");
    document.querySelector(`.player-0-panel`).classList.toggle("active");
    diceDOM.style.display = "none";
  }
  // the function which will be returned when the event is called
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  // Add current score to GLOBAL SCORE
  scores[activePlayer] += roundScore;

  // Update the UI
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // check if the player won the game
  if (scores[activePlayer] >= 100) {
    document.querySelector;
  }
});
