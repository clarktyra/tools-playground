var time;
var buttonEl = document.querySelector("#startBtn");
var timerEl = document.querySelector(".timer");
var winsEl = document.querySelector("#wins");
var lossesEl = document.querySelector("#losses");

winsEl.textContent = localStorage.getItem('wins')
lossesEl.textContent = localStorage.getItem('losses');

buttonEl.addEventListener("click", function (event) {
  event.preventDefault();
  start();
});

var word;
var listOfSelected = ["a", "e"];
var wordArray =[];
var wins = localStorage.getItem('wins') || 0;
var losses = localStorage.getItem('losses') || 0;

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  var key = event.key.toLowerCase();
  console.log(key);
  listOfSelected.push(key);
  dispayWord(word);
});

function countdownTimer() {
  clearInterval(countdown);

  time = 30;
  timerEl.textContent = time;
  var countdown = setInterval(function () {
    time--;
    timerEl.textContent = time;
    if (wordArray.join("") === word) {
      wins++;
      localStorage.setItem('wins', wins);
      winsEl.textContent = localStorage.getItem('wins');

      clearInterval(countdown);
    }
    if (time <= 0) {
      losses++;
      localStorage.setItem('losses', losses);
      lossesEl.textContent = localStorage.getItem('losses');
    //   lossesEl.textContent = losses;

      clearInterval(countdown);
    }
  }, 1000);
}

function getWord() {
  fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then(function (response) {
      return response.json();
    })
    .then(function(y){
        word = y[0];
        dispayWord(word)
        countdownTimer()
    })
}

function dispayWord(apiWord) {
  var wordEl = document.querySelector("#wordArea");
  wordArray = [];
  
    for (var i = 0; i < apiWord.length; i++) {
      if (listOfSelected.includes(apiWord[i])) {
        wordArray.push(apiWord[i]);
      } else {
        wordArray.push("_");
      }
    }
    wordEl.textContent = wordArray.join(" ");
  
}

function start() {
  listOfSelected = [];
  //   countdownTimer();
  getWord();
  //   dispayWord();
}
