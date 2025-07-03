

function getComputerChoice() {
    randomVal = Math.random() * 10;
    if (randomVal <= 3) {
        return "Rock"
    } else if (randomVal >3 && randomVal <= 6) {
        return "Paper"
    } else {
        return "Scissors"
    }

}


function getHumanChoice() {
    userInput = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    return userInput.charAt(0).toUpperCase() + userInput.substring(1);
}





function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
    if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            console.log("You win! Rock beats Scissors")
            humanScore++
        }
        if (computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock!")
            computerScore++
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors")
            computerScore++
        }
        if (computerChoice === "Paper") {
            console.log("You win! Scissors beats Paper!")
            humanScore++
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("You win! Paper beats Rock")
            humanScore++
        }
        if (computerChoice === "Scissors") {
            console.log("You lose! Scissors beats Paper!")
            computerScore++
        }}}

    for (let i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        console.log(`human selection is ${humanSelection}`)
        const computerSelection = getComputerChoice();
        console.log(`computer selection is ${computerSelection}`)
        playRound(humanSelection, computerSelection);
        console.log(`human score is ${humanScore}`);
        console.log(`computer score is ${computerScore}`);
    }
    }

    playGame();

