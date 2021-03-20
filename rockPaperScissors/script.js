game = () => {
  let userScore = 0;
  let computerScore = 0;
  let numOfGames = 0;
  let wantToPlay = confirm("Would you like to play Rock, Paper, Scissors?");
  
  letsPlay = (wantToPlay) => {
    getUserChoice = () => {
      const choice = prompt("what is your choice? (R, P, or S)");
      if (choice !== "R" && choice !== "P" && choice !== "S") {
        alert("Sorry, choice has to be R, P, or S");
        getUserChoice();
      }
      return choice;
    };
    getComputerChoice = () => {
      const choiceArray = ["R", "P", "S"];
      const index = Math.floor(Math.random() * 3);
      const choice = choiceArray[index];
      return choice;
    };
    findWinner = (choice1, choice2) => {
      if (choice1 === choice2) {
        alert("Tie");
        return "tie";
      } else if (
        (choice1 === "R" && choice2 === "S") ||
        (choice1 === "P" && choice2 === "R") ||
        (choice1 === "S" && choice2 === "P")
      ) {
        alert("User Win");
        return "user";
      } else {
        alert("Computer Win");
        return "computer";
      }
    };
    makeCalculations = (winner) => {
      numOfGames++;
      if (winner === "user") {
        userScore++;
      } else if (winner === "computer") {
        computerScore++;
      }
    };
    printStats = () => {
      alert(
        "numOfGames: " +
          numOfGames +
          "\n" +
          "userScore: " +
          userScore +
          "\n" +
          "computerScore: " +
          computerScore
      );
    };
    playAgain = () => {
      const wantToPlayAgain = confirm("Would you like to play again");
      letsPlay(wantToPlayAgain);
    };

    if (wantToPlay) {
      const userChoice = getUserChoice();
      const computerChoice = getComputerChoice();
      const winner = findWinner(userChoice, computerChoice);
      makeCalculations(winner);
      printStats();
      playAgain();
    } else {
      return;
    }
  };

  letsPlay(wantToPlay);
};
game();
