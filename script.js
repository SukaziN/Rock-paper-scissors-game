let options = ["Rock", "Paper", "Scissors"];
let computerMoves = Math.floor(Math.random() * 3);
console.log(computerMoves);
console.log(options[computerMoves]);

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
function play() {
  let move = options[computerMoves];
  let message = `Computer chose ${move}`;
  //if (move == userMove) {
  //console.log("Congratulations! You win!");
  // }
}
