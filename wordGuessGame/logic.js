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

var buttonEl = document.querySelector("#startBtn");
var timerEl = document.querySelector(".timer");
var winsEl = document.querySelector("#wins")
var lossesEl = document.querySelector("#losses")


buttonEl.addEventListener("click", function(event){
    event.preventDefault()
    start();
});
var word = "test";
var listOfSelected = ["a", "e"];
var wordArray;
var wins = 0;
var losses = 0;

document.addEventListener("keydown", function(event){
    event.preventDefault();
    var key = event.key.toLowerCase();
    console.log(key)
    listOfSelected.push(key);
    dispayWord()
})

function countdownTimer() {
    clearInterval(countdown)

  time = 15;
  var countdown = setInterval(function () {
    time--;
    timerEl.textContent = time;
    if (wordArray.join('') === word){
        wins++;
        winsEl.textContent = wins;
        clearInterval(countdown)
    }
    if(time <= 0) {
        losses++;
        lossesEl.textContent = losses;
        clearInterval(countdown)
    }
  }, 1000);
}

function getWord(){
    var array = ["apple", "banana", "pear"]
    var index = Math.floor(Math.random()*3)
    word = array[index];
    
}

function dispayWord(){
    var wordEl = document.querySelector("#wordArea")
     wordArray = []
    
    for (var i = 0; i < word.length; i++){
        if(listOfSelected.includes(word[i])){
            wordArray.push(word[i])
        } else {
            wordArray.push("_")
        }
    }
    wordEl.textContent = wordArray.join(" ")
    
}


function start(){
    listOfSelected = [];
    countdownTimer()
    getWord()
    dispayWord()
}
