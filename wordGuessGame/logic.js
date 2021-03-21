var time;
var buttonEl = document.querySelector("#startBtn");
var timerEl = document.querySelector(".timer");
var winsEl = document.querySelector("#wins");
var lossesEl = document.querySelector("#losses");

buttonEl.addEventListener("click", function (event) {
  event.preventDefault();
  start();
});

var word;
var listOfSelected = ["a", "e"];
var wordArray =[];
var wins = 0;
var losses = 0;

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  var key = event.key.toLowerCase();
  console.log(key);
  listOfSelected.push(key);
  dispayWord(word);
});

function countdownTimer() {
  clearInterval(countdown);

  time = 15;
  var countdown = setInterval(function () {
    time--;
    timerEl.textContent = time;
    if (wordArray.join("") === word) {
      wins++;
      winsEl.textContent = wins;
      clearInterval(countdown);
    }
    if (time <= 0) {
      losses++;
      lossesEl.textContent = losses;
      clearInterval(countdown);
    }
  }, 1000);
}

function getWord() {
  //   var array = ["apple", "banana", "pear"];
  //   var index = Math.floor(Math.random() * 3);
  //   word = array[index];
  fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then(function (response) {
      return response.json();
    })
    .then(function(y){
        word = y[0];
        dispayWord(word)
    })
    .then(countdownTimer())
    
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
