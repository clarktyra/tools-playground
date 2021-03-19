function game(){
    var userChoice;
    var userScore;
    var computerChoice;
    var computerScore;
    var numOfGames;
    var wantToPlay = confirm("Would you like to play Rock, Paper, Scissors?");
    if(wantToPlay) {
        getUserChoice();
    } else{
        return
    }

    function getUserChoice(){
        userChoice = prompt("what is your choice? (R, P, or S)")
        console.log(userChoice)
        console.log(typeof(userChoice))
        if (userChoice !== "R" && userChoice !== "P" && userChoice !== "S" ){
            alert("Sorry, choice has to be R, P, or S")
            getUserChoice()
        }
    }
}
game()

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