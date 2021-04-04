const buttonEl = document.querySelector("#startBtn");
const timerEl = document.querySelector(".timer");
const winsEl = document.querySelector("#wins");
const lossesEl = document.querySelector("#losses");
const wordEl = document.querySelector("#wordArea");
const wrongEl = document.querySelector("#wrong-words");
const guessesLeftEl = document.querySelector(".guessesRemaining");
const lettersElement = document.querySelector("#letters");
const letterButton = document.getElementById("calculate-button");

let word;
let listOfSelected = [];
let wordArray = [];
let wins = localStorage.getItem("wins") || 0;
let losses = localStorage.getItem("losses") || 0;
winsEl.textContent = wins;
lossesEl.textContent = losses;
let lisfOfWrongLetters = [];
let guessesLEft = 10;
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

alphabet.forEach(function (letter) {
  const element1 = document.createElement("option");
  element1.text = letter;
  element1.value = letter;
  lettersElement.append(element1);
});

buttonEl.addEventListener("click", (event) => {
  event.preventDefault();
  getWord();
});

letterButton.addEventListener("click", (event) => {
  event.preventDefault();
  const selectLetter = lettersElement.value;
  listOfSelected.push(selectLetter);
  // lisfOfWrongLetters.push(keyPressed)
  dispayWord(word);
});

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  const keyPressed = event.key.toLowerCase();
  listOfSelected.push(keyPressed);
  // lisfOfWrongLetters.push(keyPressed)
  dispayWord(word);
});

dispayWord = (apiWord) => {
  wordArray = [];
  lisfOfWrongLetters = [];

  for (var i = 0; i < apiWord.length; i++) {
    listOfSelected.includes(apiWord[i])
      ? wordArray.push(apiWord[i])
      : wordArray.push("_");
  }
  wordEl.textContent = wordArray.join(" ");

  for (let char1 of listOfSelected) {
    if (!wordArray.includes(char1)) {
      lisfOfWrongLetters.push(char1);
    }
  }
  lisfOfWrongLetters = [...new Set(lisfOfWrongLetters)];
  wrongEl.textContent = lisfOfWrongLetters.join(" ");
  guessesLeftEl.textContent = guessesLEft - lisfOfWrongLetters.length;
};

countdownTimer = () => {
  clearInterval(countdown);
  let time = 120;
  timerEl.textContent = time;
  var countdown = setInterval(function () {
    time--;
    timerEl.textContent = time;
    if (wordArray.join("") === word) {
      wins++;
      localStorage.setItem("wins", wins);
      winsEl.textContent = localStorage.getItem("wins");
      clearInterval(countdown);
    }
    if (time <= 0) {
      losses++;
      localStorage.setItem("losses", losses);
      lossesEl.textContent = localStorage.getItem("losses");
      clearInterval(countdown);
    }
  }, 1000);
};

getWord = () => {
  listOfSelected = [];
  fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then((response) => response.json())
    .then((y) => {
      word = y[0];
      dispayWord(word);
      countdownTimer();
    });
};
