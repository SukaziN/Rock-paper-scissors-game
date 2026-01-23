let options = ["Rock", "Paper", "Scissors"];
let computerMoves = Math.floor(Math.random() * 3);
console.log(computerMoves);
console.log(options[computerMoves]);

let rockButton = document.getElementById("rock");
//rockButton.addEventListener("click", console.log(`your move: ${option[0]}`)); attempted to make a button click output a message(ERROR)
rockButton = options[0];
console.log(rockButton);
let paperButton = document.getElementById("paper");
paperButton = options[1];
console.log(paperButton);
let scissorsButton = document.getElementById("scissors");
scissorsButton = options[2];
console.log(scissorsButton);
function play() {
  let move = options[computerMoves];
  let message = `Computer chose ${move}`;
  switch (move) {
    case move === rockButton:
    case move === paperButton:
    case move === scissorsButton:
      console.log(
        `You and the computer guessed the same move: ${move}. Try again!`,
      );
      break;
    case move === "Rock" && move === scissorsButton:
    case move === "Scissors" && move === paperButton:
    case move === "Paper" && move === rockButton:
      console.log(message.concat(" You lose!"));
      break;
    //default:
    //console.log(message.concat(" You Win!")); so far this is the only logic going through when the function is invoked (meaning the logic above either isn't linking to any specific buttons or it's invalid or both)
    //break;
  }
  //if (move == userMove) {
  //console.log("Congratulations! You win!");
  // }
}
