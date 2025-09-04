
const humanChoiceDisplay = document.getElementById("human-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const resultDisplay = document.getElementById("result");
    const finalDisplay = document.getElementById("final");
    const roundDisplay = document.getElementById("round");
    const buttons = document.querySelectorAll("button");
    const resetButton = document.getElementById("reset");
    
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    const maxRounds = 5;

    function resetGame() {
      humanScore = 0;
      computerScore = 0;
      round = 1;
      roundDisplay.textContent = `Round: ${round} / ${maxRounds}`;
      humanChoiceDisplay.textContent = "You chose: ";
      computerChoiceDisplay.textContent = "Computer chose: ";
      resultDisplay.textContent = "";
      finalDisplay.textContent = "";
    }

    resetButton.addEventListener("click", resetGame);
//computer choice function
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
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
          return "It's a Tie!";
       } 
       else if (humanChoice === "paper" && computerChoice === "scissors") {
          computerScore++;
          return "Computer WINS! Scissors cuts paper.";
       } 
      else if (humanChoice === "scissors" && computerChoice === "rock") {
          computerScore++;
          return "Computer WINS! Rock breaks scissors.";
       } 
       else if (humanChoice === "rock" && computerChoice === "paper") {
          computerScore++;
          return "Computer WINS! Paper wraps rock.";
       } 
       else if (humanChoice === "scissors" && computerChoice === "paper") {
          humanScore++;
          return "YOU WIN! Scissors cuts paper.";
       } 
       else if (humanChoice === "rock" && computerChoice === "scissors") {
          humanScore++;
          return "YOU WIN! Rock breaks scissors.";
       } 
       else if (humanChoice === "paper" && computerChoice === "rock") {
          humanScore++;
          return "YOU WIN! Paper wraps rock.";
       } 
       else {
          return "Invalid input, try again.";
       }
    }

    function endGame() {
      if (humanScore > computerScore) {
        finalDisplay.textContent = `Game Over! 🎉 You win! Final Score: You ${humanScore} - ${computerScore} Computer`;
      } else if (computerScore > humanScore) {
        finalDisplay.textContent = `Game Over! 💻 Computer wins! Final Score: You ${humanScore} - ${computerScore} Computer`;
      } else {
        finalDisplay.textContent = `Game Over! 🤝 It's a tie! Final Score: You ${humanScore} - ${computerScore} Computer`;
      }
    }

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        if (round > maxRounds) return; 

        const userChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();

        humanChoiceDisplay.textContent = "You chose: " + userChoice;
        computerChoiceDisplay.textContent = "Computer chose: " + computerChoice;

        const result = playRound(userChoice, computerChoice);
        resultDisplay.textContent = `${result} | Score: You ${humanScore} - ${computerScore} Computer`;

        if (round === maxRounds) {
          endGame();
        }

        round++;
        roundDisplay.textContent = `Round: ${Math.min(round, maxRounds)} / ${maxRounds}`;
      });
    });