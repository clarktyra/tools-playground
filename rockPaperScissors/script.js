function game() {
  var userChoice;
  var userScore = 0;
  var computerChoice;
  var computerScore = 0;
  var numOfGames = 0;
  var wantToPlay = confirm("Would you like to play Rock, Paper, Scissors?");
  function letsPlay(wantToPlay) {
    if (wantToPlay) {
      getUserChoice();
      getComputerChoice();
      var winner = findWinner(userChoice, computerChoice);
      makeCalculations(winner)
      printStats();
      playAgain()
    } else {
      return;
    }

    function getUserChoice() {
      userChoice = prompt("what is your choice? (R, P, or S)");
      console.log(userChoice);
      console.log(typeof userChoice);
      if (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") {
        alert("Sorry, choice has to be R, P, or S");
        getUserChoice();
      }
    }

    function getComputerChoice() {
      var choiceArray = ["R", "P", "S"];
      var index = Math.floor(Math.random() * 3);
      computerChoice = choiceArray[index];
    }

    function findWinner(choice1, choice2) {
      if (choice1 === choice2) {
        alert("Tie");
        return "tie"
      } else if (
        (choice1 === "R" && choice2 === "S") ||
        (choice1 === "P" && choice2 === "R") ||
        (choice1 === "S" && choice2 === "P")
      ) {
        alert("User Win");
        return "user"
      } else {
        alert("Computer Win");
        return "computer"
      }
    }

    function makeCalculations(winner){
        numOfGames++;
        if(winner === "user"){
            userScore++;
        } else if (winner === "computer"){
            computerScore++;
        } 
    }

    function printStats() {
      alert(
        "numOfGames: " +
          numOfGames +
          "\n" + "userScore: " +
          userScore +
          "\n" +"computerScore: " +
          computerScore
      );
    }

    function playAgain(){
        var wantToPlayAgain = confirm("Would you like to play again")
        letsPlay(wantToPlayAgain)
    }
  }

  letsPlay(wantToPlay)
}
game();
