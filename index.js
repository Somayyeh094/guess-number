let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoring = 20;
let highestScoring = 0;
function giveScore() {
  scoring--;
  document.querySelector(".score").textContent = scoring;
  if (scoring < 1) {
    document.querySelector(".anouncement").textContent = "😬You lost the game!";
  }
}

function guess() {
  guessNumber = document.querySelector(".guess-number").value;

  if (!+guessNumber || +guessNumber > 20 || +guessNumber < 1) {
    document.querySelector(".anouncement").textContent =
      "😉You must choose number in range!!!";
  } else if (+guessNumber === secretNumber) {
    document.querySelector(".anouncement").textContent = "🥳You win the game";
    document.querySelector(".secret-number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(56, 217, 31)";
    if (highestScoring < scoring) {
      highestScoring = scoring;
    }
    document.querySelector(".highest-score").textContent = highestScoring;
  } else if (+guessNumber > secretNumber) {
    document.querySelector(".anouncement").textContent = "📈too high!";
    giveScore();
  } else if (+guessNumber < secretNumber) {
    document.querySelector(".anouncement").textContent = "📉too low!";
    giveScore();
  }
}

function repeatGame() {
  document.querySelector(".anouncement").textContent = "🫣 Starting to guess...";
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "rgb(16, 16, 16)";
  document.querySelector(".guess-number").value = "";
  document.querySelector(".score").textContent = 20;
  scoring = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

document.querySelector(".guess").addEventListener("click", guess);
document.querySelector(".again").addEventListener("click", repeatGame);
