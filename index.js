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
  console.log(guessNumber);

  if (!+guessNumber || +guessNumber > 20 || +guessNumber < 1) {
    document.querySelector(".anouncement").textContent =
      "😉You must choose number in range!!!";
  } else if (+guessNumber === secretNumber) {
    document.querySelector(".anouncement").textContent = "🥳You win the game";
    document.querySelector(".secret-number").textContent = secretNumber;
    document.querySelector(".secret-number").style.width = "200px";
    document.querySelector(".secret-number").style.height = "200px";
    document.querySelector("body").style.backgroundColor = "rgb(56, 217, 31)";
    document.querySelector(".highest-score").textContent = scoring;
  } else if (+guessNumber > secretNumber) {
    document.querySelector(".anouncement").textContent = "📈too high!";
    giveScore();
  } else if (+guessNumber < secretNumber) {
    document.querySelector(".anouncement").textContent = "📉too low!";
    giveScore();
  }
}

document.querySelector(".guess").addEventListener("click", guess);
