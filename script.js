

function getComputerChoice() {
    randomVal = Math.random() * 10;
    if (randomVal <= 3) {
        return "rock"
    } else if (randomVal >3 && randomVal <= 6) {
        return "paper"
    } else {
        return "scissors"
    }

}


// function getHumanChoice() {
//     userInput = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
//     return userInput.charAt(0).toUpperCase() + userInput.substring(1);
// }


function getHumanChoice(event) {
    return event.target.id;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors")
            humanScore++
        }
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!")
            computerScore++
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors")
            computerScore++
        }
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper!")
            humanScore++
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock")
            humanScore++
        }
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper!")
            computerScore++
        }}}

        const humanSelection = getHumanChoice();
        console.log(`human selection is ${humanSelection}`)
        const computerSelection = getComputerChoice();
        console.log(`computer selection is ${computerSelection}`)
        playRound(humanSelection, computerSelection);
        console.log(`human score is ${humanScore}`);
        console.log(`computer score is ${computerScore}`);
    
    }

    const userSelection = document.querySelector("#buttons");
    userSelection.addEventListener("click", getHumanChoice);

    

