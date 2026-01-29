let options = ["Rock", "Paper", "Scissors"];
let computerMoves = Math.floor(Math.random() * 3);
console.log(computerMoves);
console.log(options[computerMoves]);
let move = options[computerMoves];

let rockButton = document.getElementById("rock");
//rockButton.addEventListener("click", console.log(`your move: ${option[0]}`)); attempted to make a button click output a message(ERROR)
//rockButton = options[0];

let paperButton = document.getElementById("paper");

let scissorsButton = document.getElementById("scissors");

let userMoveRock = rockButton.value;
console.log(userMoveRock);
let userMovePaper = paperButton.value;
console.log(userMovePaper);
let userMoveScissors = scissorsButton.value;
console.log(userMoveScissors);
let message = `Computer chose ${move}`;
let outcome = document.getElementById("outcome");

function playRock() {
  if (move == userMoveRock) {
    console.log(
      `You and the computer guessed the same move: ${move}. Try again!`,
    );
    outcome.innerHTML = `You and the computer guessed the same move: ${move}. Try again!`;
  } else if (move == "Paper" && userMoveRock) {
    console.log(message.concat(" You lose!😞"));
    outcome.innerHTML = message.concat(" You lose!😞");
  } else {
    console.log(message.concat(" You Win!🎆🎊🎉"));
    outcome.innerHTML = message.concat(" You Win!🎆🎊🎉");
  }
}

function playPaper() {
  if (move == userMovePaper) {
    console.log(
      `You and the computer guessed the same move: ${move}. Try again!`,
    );
    outcome.innerHTML = `You and the computer guessed the same move: ${move}. Try again!`;
  } else if (move == "Scissors" && userMovePaper) {
    console.log(message.concat(" You lose!😞"));
    outcome.innerHTML = message.concat(" You lose!😞");
  } else {
    console.log(message.concat(" You Win!🎆🎊🎉"));
    outcome.innerHTML = message.concat(" You Win!🎆🎊🎉");
  }
}
function playScissors() {
  if (move == userMoveScissors) {
    console.log(
      `You and the computer guessed the same move: ${move}. Try again!`,
    );
    outcome.innerHTML = `You and the computer guessed the same move: ${move}. Try again!`;
  } else if (move == "Rock" && userMoveScissors) {
    console.log(message.concat(" You lose!😞"));
    outcome.innerHTML = message.concat(" You lose!😞");
  } else {
    console.log(message.concat(" You Win!🎆🎊🎉"));
    outcome.innerHTML = message.concat(" You Win!🎆🎊🎉");
  }
} //OK so now the separate functions helped differentiate which button was clicked but the only valid conditional is the if block coz the functions only respond when the computer move is the same as the userMove
//Noticing that the error message targets the specific line of code it should be running in case of the clicked button versus the computer's move (i.e, it is correctly identifying the outcome (win or lose) but does not log it)
//crisis averted! turns out the the message was still stuck in the old function I commented out and was not globally accessible

/*function play() {
 
  if (
    move == userMoveRock || //the conditional works but cannot differentiate between the buttons and is therefore assigning the same value("paper") to all of them
    move == userMovePaper ||
    move == userMoveScissors
  ) {
    console.log(
      `You and the computer guessed the same move: ${move}. Try again!`,
    );
  } else if (
    (move == "Rock" && userMoveScissors) || //the logic after && needs to relate to the user's move and this line refers to "move" which was declared as the computer's move
    (move == "Scissors" && userMovePaper) || //store the user's move in a different variable and use it after &&
    (move == "Paper" && userMoveRock) //add an event listener such that the value of the button is fetched when the specific button is clicked (this should replace the "move" after &&, name it userMove in the declaration)
  ) {
    console.log(message.concat(" You lose!"));
  } else {
    console.log(message.concat(" You Win!"));
  }
} */
//if (move == userMove) {
//console.log("Congratulations! You win!");
// }
