let gameResult = document.getElementById("gameResultText");
let displayGameResult = document.querySelector(".game-result");
let userInput = document.getElementById("userInput");
let gameDescription = document.querySelector(".game-description");
let resetBtn = document.querySelector(".reset-btn");
let attemptDisplay= document.getElementById("attemptCount");
let bestScoreDisplay = document.getElementById("bestScore");
let newNumBtn = document.getElementById("newNumBtn");

let userRange;
let randomNumber;
let attempts = 0;
let bestScore = null;

function generateRange() {
    userRange = parseInt(prompt("Enter a number for range!"));

    if (!isNaN(userRange) && userRange > 0) {
      gameDescription.innerHTML = `I have generated a random number between <span style= "color: blue;"><b>1 to ${userRange}</b></span> Find out the right number!`;
      randomNumber = Math.floor(Math.random() * userRange) + 1;
      attempts = 0;
      displayGameResult.style.display = "block";
    }else{
        alert("Please enter a valid positive number!");
    }
}

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (isNaN(guessedNumber)) {
      gameResult.textContent = "⚠️ Please enter a valid number!";
      gameResult.style.color = "red";
      return;
    }

    attempts++;
    attemptDisplay.textContent = `Number of Attempts : ${attempts}`;

    if(guessedNumber > randomNumber){
        gameResult.textContent = "Your guess was too large, please try agian!";
        gameResult.style.color = "White";
       
    }else if(guessedNumber < randomNumber) {
        gameResult.textContent = "Your guess was too small, please try agian!";
        gameResult.style.color = "White";
        
    }else{
        gameResult.textContent = `Congratulations! 🥳 You Got it Right number in ${attempts} atempt! The number was ${randomNumber}`;
        gameResult.style.color = "White";

        if (bestScore === null || attempts < bestScore) {
            bestScore = attempts;
            bestScoreDisplay.textContent = `🏆 Best Score : ${bestScore}`;
        }
        newNumBtn.style.display = "block";
    }

    userInput.value = "";
}


function generateNewNum() {
    generateRange();
    attempts = 0;
    gameResult.textContent = "New random number generated! Try guessing the new number 🎯";
    gameResult.style.color = "white";
}
