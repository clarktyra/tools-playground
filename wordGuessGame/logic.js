//click button
//starts timer
//starts game

//game
//get a random word
//display blanks of word
//press keys
//if keypress exists in word, then letter shows up in that spot
//if the whole word is displayed
//timer stops
//save user win
//if timer hits 0
//save user lose
//timer stops

//game over
//dipsplay wins and lossws

//refresh page
//still display wins and losses

var time;

var buttonEl = document.querySelector("button");
var timerEl = document.querySelector(".timer");
buttonEl.addEventListener("click", countdownTimer);

function countdownTimer() {
  time = 6;
  var countdown = setInterval(function () {
    time--;
    timerEl.textContent = time;
    if(time <= 0) {
        clearInterval(countdown)
    }
  }, 1000);
}
