/*let options = ["Rock", "Paper", "Scissors"];
let computerMoves = Math.floor(Math.random() * 3);
let move = options[computerMoves]; */

//let rockButton = document.getElementById("rock");

//let paperButton = document.getElementById("paper");

//let scissorsButton = document.getElementById("scissors");

/*let userMoveRock = rockButton.value;
let userMovePaper = paperButton.value;
let userMoveScissors = scissorsButton.value; */
//let message = `Computer chose ${move}`;
//let outcome = document.getElementById("outcome");

function playRock() {
  let options = ["Rock", "Paper", "Scissors"];
  let computerMoves = Math.floor(Math.random() * 3);
  let move = options[computerMoves];
  let rockButton = document.getElementById("rock");
  let userMoveRock = rockButton.value;
  let message = `Computer chose ${move}`;
  let outcome = document.getElementById("outcome");
  if (move == userMoveRock) {
    outcome.innerHTML = `You and the computer guessed the same move: ${move}. It's a tie!`;
  } else if (move == "Paper" && userMoveRock) {
    outcome.innerHTML = message.concat(" You lose!😞");
  } else {
    outcome.innerHTML = message.concat(" You Win!🎆🎊🎉");
  }
}

function playPaper() {
  let options = ["Rock", "Paper", "Scissors"];
  let computerMoves = Math.floor(Math.random() * 3);
  let move = options[computerMoves];
  let paperButton = document.getElementById("paper");
  let userMovePaper = paperButton.value;
  let message = `Computer chose ${move}`;
  let outcome = document.getElementById("outcome");
  if (move == userMovePaper) {
    outcome.innerHTML = `You and the computer guessed the same move: ${move}. Try again!`;
  } else if (move == "Scissors" && userMovePaper) {
    outcome.innerHTML = message.concat(" You lose!😞");
  } else {
    outcome.innerHTML = message.concat(" You Win!🎆🎊🎉");
  }
}
function playScissors() {
  let options = ["Rock", "Paper", "Scissors"];
  let computerMoves = Math.floor(Math.random() * 3);
  let move = options[computerMoves];
  let scissorsButton = document.getElementById("scissors");
  let userMoveScissors = scissorsButton.value;
  let message = `Computer chose ${move}`;
  let outcome = document.getElementById("outcome");
  if (move == userMoveScissors) {
    outcome.innerHTML = `You and the computer guessed the same move: ${move}. Try again!`;
  } else if (move == "Rock" && userMoveScissors) {
    outcome.innerHTML = message.concat(" You lose!😞");
  } else {
    outcome.innerHTML = message.concat(" You Win!🎆🎊🎉");
  }
}
