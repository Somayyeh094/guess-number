let randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let anounce = function (message) {
  return (document.querySelector(".anouncement").textContent = message);
};
let secretNumber = randomNumber();
console.log(secretNumber);
let scoring = 20;
let highestScoring = 0;
function giveScore() {
  scoring--;
  document.querySelector(".score").textContent = scoring;
  if (scoring < 1) {
    anounce("😬You lost the game!");
  }
}

function guess() {
  guessNumber = document.querySelector(".guess-number").value;
  if (!+guessNumber || +guessNumber > 20 || +guessNumber < 1) {
    anounce("😉You must choose number in range!!!");
  } else if (+guessNumber === secretNumber) {
    anounce("🥳Correct Number!!!");
    document.querySelector(".secret-number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(56, 217, 31)";
    document.querySelector(".secret-number").style.width = "200px";
    if (highestScoring < scoring) {
      highestScoring = scoring;
      document.querySelector(".highest-score").textContent = highestScoring;
    }
  } else if (+guessNumber !== secretNumber) {
    anounce(+guessNumber > secretNumber ? "📈too high!" : "📉too low!");
    giveScore();
  }
}
function repeatGame() {
  anounce("🫣 Starting to guess...");
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "rgb(16, 16, 16)";
  document.querySelector(".guess-number").value = "";
  document.querySelector(".score").textContent = 20;
  scoring = 20;
  secretNumber = randomNumber();
}

document.querySelector(".guess").addEventListener("click", guess);
document.querySelector(".again").addEventListener("click", repeatGame);
