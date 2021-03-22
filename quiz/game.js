// game logic psuedo code

// GAME PAGE
// press start quiz button
//countdown timer starts
//display countdown timer
//hide the start screen
//display first question, with 4 possible answers as buttons
//click on an answer button
//if answer is incorrect, subtract time from timer
//new question appears
// if all questions answered or timer reaches 0
// game over
//save initials and score
//go to highscores page

// HIGHSCORES PAGE
// diplay high scores and initials in a list

// VARIABLES
// timer, questions array of objects, initials, score

// FUNCTIONS
// start, startTimer, displayQuestion, checkAnswer, quizOverDisplay

const timerEl = document.getElementById("time");
const startBtn = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("questions");
const questionTitleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScrArea = document.getElementById("final-score");
const initialsBtn = document.getElementById("submit");
// var imageContainer = document.querySelector(".img-container");
const choiceButtons = document.getElementsByClassName('buttons')


questionScreen.hidden = true;
endScreen.hidden = true

let timer = 20;
const questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];
let initials;
let score;
var timeTicking;
let questionIndex = 0
let timeTicker

displayQuizOver = () => {
  console.log("displayQuizOver");
  questionScreen.hidden = true;
  clearInterval(timeTicker);
  if (timer > 0){
    finalScrArea.textContent = timer
  } else {
    timer = 0
    finalScrArea.textContent = timer

  }
  endScreen.hidden = false
};

checkAnswer = (event) => {
    event.preventDefault()
  console.log("checkAnswer");
  console.log(event.target)
  console.log("index: ", )
  if(event.target.textContent != questions[questionIndex].answer){
    timer -= 5
  }
  questionIndex++;
  if (questionIndex < questions.length){
    displayQuestion(questionIndex)
  } else {
    displayQuizOver()
  }
  
};

displayQuestion = (questionIndex) => {
  console.log("displayQuestion");
  choicesEl.innerHTML = ""
  questionTitleEl.textContent = questions[questionIndex].title
  for (let i = 0; i < 4 ; i++){
    let button = document.createElement("button")
    button.textContent = questions[questionIndex].choices[i]
    button.setAttribute("class", "buttons")
    button.onclick = checkAnswer
    choicesEl.append(button)
  }
//   checkAnswer();
//   displayQuizOver();
};

startTimer = () => {
  console.log("startTimer");
  startScreen.hidden = true;
  questionScreen.hidden = false;
    timeTicker = setInterval(() => {
    timer--;
    console.log(timer);
    if (timer >= 0){
        timerEl.textContent = timer;
    }
    if (timer < 0) {
        timerEl.textContent = 0;

    //   clearInterval(timeTicker);
    //   questionScreen.hidden = true;
    //   endScreen.hidden = false;
    displayQuizOver()
    }
  }, 1000);
};

start = () => {
  console.log("start");
  startTimer();
  displayQuestion(questionIndex);
};

startBtn.onclick = start;
// choiceButtons.onclick = checkAnswer
