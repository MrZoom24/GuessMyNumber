"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayStatus(status) {
  document.querySelector(".status").textContent = status;
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".input").value);

  if (!guess) {
    displayStatus("⛔ შეიყვანე რიცხვი!");
  } else if (guess === randomNumber) {
    displayStatus("🎉 სწორი რიცხვია!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("#box").textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayStatus(
        guess > randomNumber
          ? "📉 ჩემი რიცხვი ნაკლებია"
          : "📈 ჩემი რიცხვი მეტია"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayStatus("თამაში წააგე! 💥");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayStatus("⏳ დაიწყე გამოცნობა...");
  document.querySelector("#box").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".input").value = "";
  document.querySelector("body").style.backgroundColor = "#2f2f4b";
});
