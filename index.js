let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoring = 20;

function giveScore() {
  scoring--;
  document.querySelector(".score").textContent = scoring;
  if (scoring >= 1) {
    document.querySelector(".score").textContent = scoring;
  } else {
    document.querySelector(".anouncement").textContent = "😬You lost the game!";
  }
}

function guess() {
  guessNumber = document.querySelector(".guess-number").value;

  if (+guessNumber === secretNumber) {
    document.querySelector(".anouncement").textContent = "🥳You win the game";
    document.querySelector(".secret-number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(56, 217, 31)";
  } else if (+guessNumber > secretNumber) {
    document.querySelector(".anouncement").textContent = "📈too high!";
    giveScore();
  } else {
    document.querySelector(".anouncement").textContent = "📉too low!";
    giveScore();
  }
}

document.querySelector(".guess").addEventListener("click", guess);
