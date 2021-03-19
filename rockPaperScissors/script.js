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
      console.log("userChoice: ", userChoice);
      getComputerChoice();
      console.log("computerChoice: ", computerChoice);
      findWinner(userChoice, computerChoice);
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
        console.log("tie");
        numOfGames++;
        alert("Tie");
        printStats();
        playAgain()
      } else if (
        (choice1 === "R" && choice2 === "S") ||
        (choice1 === "P" && choice2 === "R") ||
        (choice1 === "S" && choice2 === "P")
      ) {
        console.log("User Win");
        alert("User Win");
        userScore++;
        numOfGames++;
        printStats();
        playAgain()
      } else {
        console.log("ComputerWin");
        alert("Computer Win");
        computerScore++;
        numOfGames++;
        printStats();
        playAgain()
      }
    }

    function printStats() {
      alert(
        "numOfGames: " +
          numOfGames +
          " userScore: " +
          userScore +
          " computerScore: " +
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

//confirm if you like to play
//  if true play game
// else end game

// pick a user choice
// if choice isn't a possible, ask for user choice again

// generate computer choice

//compare userChoice to computer choice
//add userScore if user wins
// add computerScore is computer wins
//add games played regarless who wins

// ask user if they would like to play again
//if yes, run playgame, else stop game
