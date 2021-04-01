var choice;
var computerChoice;
var wins = 0;
var attempts = 0;
var winPercentage; 
function calculateWinPercentage(a, b){
    winPercentage = (((a / b) * 100)).toFixed(2) + "%";
    document.getElementById("winPercentage").innerHTML = winPercentage;
}


function printComChoice(){
    var choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * 3)]
    if(computerChoice === "rock"){
     document.getElementById("choiceArea").innerHTML = `<img  src="./5a35c7b6db90f5.0034759615134739748994.png"/>`
    } else if(computerChoice === "paper"){
        document.getElementById("choiceArea").innerHTML = `<img  src="./kisspng-post-it-note-paper-clip-art-post-it-note-png-5ab44be02d5f60.7688322515217653441859.png"/>`
    } else if(computerChoice === "scissors"){
        document.getElementById("choiceArea").innerHTML = `<img  src="./kisspng-scissors-clip-art-scissors-5a80f8a6d8be97.1303518815184017028878.png"/>`
    }
    winner();
}

function userChoice(a){
    choice = a
}

function setAreaBlank(){
    document.getElementById("choiceArea").innerHTML = "";
}

function winner(){
    
    if (choice === computerChoice){
        attempts++;
        document.getElementById("winnerArea").innerHTML = "<h1>Draw</h1>";
        calculateWinPercentage(wins, attempts);
    } else if (choice === "rock" && computerChoice === "scissors" || choice === "scissors" && computerChoice === "paper" || choice === "paper" && computerChoice === "rock" ){
        wins++;
        attempts++;
        document.getElementById("winnerArea").innerHTML = "<h1>You Win!</h1>";
        document.getElementById("wins").innerHTML = wins;
        calculateWinPercentage(wins, attempts);
        
    } else {
        attempts++;
        document.getElementById("winnerArea").innerHTML = "<h1>You Lose</h1>";
        calculateWinPercentage(wins, attempts); 
    } 
    console.log(winPercentage)
}

$("#rock").on("click", function() {
    userChoice("rock");
    setAreaBlank();
    printComChoice();
    
  });
$("#paper").on("click", function() {
    userChoice("paper");
    setAreaBlank();
    printComChoice()
    
  });
$("#scissors").on("click", function() {
    userChoice("scissors");
    setAreaBlank();
    printComChoice();
    
  });
