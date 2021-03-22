const timerEl = document.getElementById("time");
const startBtn = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("questions");
const questionTitleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScrArea = document.getElementById("final-score");
const initialsBtn = document.getElementById("submit");
const initialsTxt = document.getElementById("initials");
const choiceButtons = document.getElementsByClassName("buttons");

questionScreen.hidden = true;
endScreen.hidden = true;

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
let timer = 60;
let questionIndex = 0;
let timeTicker;

saveInitials = (event) => {
  event.preventDefault();
  let initialsArray = [];
  let userInitials = initialsTxt.value;
  let userScore = timer;
  if (localStorage.getItem("info")) {
    initialsArray = JSON.parse(localStorage.getItem("info"));
  }
  localStorage.removeItem("info");
  initialsArray.push({
    userInitials: userInitials,
    score: userScore,
  });
  localStorage.setItem("info", JSON.stringify(initialsArray));
  console.log(JSON.parse(localStorage.getItem("info")));
  window.location.href = "scores.html";
};

displayQuizOver = () => {
  questionScreen.hidden = true;
  clearInterval(timeTicker);
  if (timer > 0) {
    timerEl.textContent = timer;
    finalScrArea.textContent = timer;
  } else {
    timer = 0;
    finalScrArea.textContent = timer;
  }
  endScreen.hidden = false;
};

checkAnswer = (event) => {
  event.preventDefault();
  if (event.target.textContent != questions[questionIndex].answer) {
    timer -= 5;
  }
  questionIndex++;
  questionIndex < questions.length
    ? displayQuestion(questionIndex)
    : displayQuizOver();
};

displayQuestion = (questionIndex) => {
  choicesEl.innerHTML = "";
  questionTitleEl.textContent = questions[questionIndex].title;
  for (let i = 0; i < 4; i++) {
    let button = document.createElement("button");
    button.textContent = questions[questionIndex].choices[i];
    button.setAttribute("class", "buttons");
    button.onclick = checkAnswer;
    choicesEl.append(button);
  }
};

startTimer = () => {
  startScreen.hidden = true;
  questionScreen.hidden = false;
  timeTicker = setInterval(() => {
    timer--;
    if (timer >= 0) {
      timerEl.textContent = timer;
    }
    if (timer < 0) {
      timerEl.textContent = 0;
      displayQuizOver();
    }
  }, 1000);
};

start = () => {
  startTimer();
  displayQuestion(questionIndex);
};

startBtn.onclick = start;
initialsBtn.onclick = saveInitials;
