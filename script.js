let options = ["Rock", "Paper", "Scissors"];
let computerMoves = Math.floor(Math.random() * 3);
console.log(computerMoves);
console.log(options[computerMoves]);

let rockButton = document.getElementById("rock");
//rockButton.addEventListener("click", console.log(`your move: ${option[0]}`)); attempted to make a button click output a message(ERROR)
//rockButton = options[0];
console.log(rockButton.value);
let paperButton = document.getElementById("paper");
//paperButton = options[1];
console.log(paperButton.value);
let scissorsButton = document.getElementById("scissors");
//scissorsButton = options[2];
console.log(scissorsButton.value);
let move = options[computerMoves];
function play() {
  let message = `Computer chose ${move}`;
  if (
    move == rockButton.value || //the conditional works but cannot differentiate between the buttons and is therefore assigning the same value("rock") to all of them
    move == paperButton.value ||
    move == scissorsButton.value
  ) {
    console.log(
      `You and the computer guessed the same move: ${move}. Try again!`,
    );
  } else if (
    (move == "Rock" && move == scissorsButton.value) || //the logic after && needs to relate to the user's move and this line refers to "move" which was declared as the computer's move
    (move == "Scissors" && move == paperButton.value) || //store the user's move in a different variable and use it after &&
    (move == "Paper" && move == rockButton.value) //add an event listener such that the value of the button is fetched when the specific button is clicked (this should replace the "move" after &&, name it userMove in the declaration)
  ) {
    console.log(message.concat(" You lose!"));
  }

  else{
  console.log(message.concat(" You Win!"));} 
}
//if (move == userMove) {
//console.log("Congratulations! You win!");
// }
