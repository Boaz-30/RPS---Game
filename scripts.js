
function getComputerChoice() { 
   const random = Math.random();
   if (random <= 0.33) {
      return "rock";
   } else if (random <= 0.66) {
      return "paper";
   } else {
      return "scissors";
   }
}

console.log(getComputerChoice());

function getHumanChoice() {
   const humanChoice = window.prompt("What's your choice (rock, paper, or scissors)?");
   return humanChoice;
}
console.log(getHumanChoice());

function playGame() {
   let humanScore = 0;
   let computerScore = 0;

   function playRound(humanChoice, computerChoice) {
       humanChoice = humanChoice.toLowerCase();
     computerChoice = computerChoice.toLowerCase();

      if (humanChoice === computerChoice) {
         console.log("It's a Tie!");
      } 
      else if (humanChoice === "paper" && computerChoice === "scissors") {
         computerScore++;
         console.log("Computer WINS! Scissors cuts paper.");
      } 
      else if (humanChoice === "scissors" && computerChoice === "rock") {
         computerScore++;
         console.log("Computer WINS! Rock breaks scissors.");
      } 
      else if (humanChoice === "rock" && computerChoice === "paper") {
         computerScore++;
         console.log("Computer WINS! Paper wraps rock.");
      } 
      else if (humanChoice === "scissors" && computerChoice === "paper") {
         humanScore++;
         console.log("YOU WIN! Scissors cuts paper.");
      } 
      else if (humanChoice === "rock" && computerChoice === "scissors") {
         humanScore++;
         console.log("YOU WIN! Rock breaks scissors.");
      } 
      else if (humanChoice === "paper" && computerChoice === "rock") {
         humanScore++;
         console.log("YOU WIN! Paper wraps rock.");
      } 
      else {
         console.log("Invalid input, try again.");
      }
   }

   // Play 5 rounds
   for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
   }

   console.log(`Final Score → You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();


