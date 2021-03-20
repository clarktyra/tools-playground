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
buttonEl.addEventListener("click", start);

var listOfSelected = ["a"];

function countdownTimer() {
    clearInterval(countdown)

  time = 6;
  var countdown = setInterval(function () {
    time--;
    timerEl.textContent = time;
    if(time <= 0) {
        clearInterval(countdown)
    }
  }, 1000);
}

function getWord(){
    var array = ["apple", "banana", "pear"]
    var index = Math.floor(Math.random()*3)
    var word = array[index];
    return word;
}

function dispayWord(word){
    var wordEl = document.querySelector("#wordArea")
    var array = []
    
    for (var i = 0; i < word.length; i++){
        if(listOfSelected.includes(word[i])){
            array.push(word[i])
        } else {
            array.push("_")
        }
    }

    wordEl.textContent = array.join(" ")
}

function start(){
    countdownTimer()
    var chosenWord = getWord()
    console.log(chosenWord)
    dispayWord(chosenWord)
}
