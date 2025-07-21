let humanScore = 0;
let computerScore = 0;


const userSelection = document.querySelector("#buttons");
const results = document.querySelector("#results");
const humanScoreP = document.querySelector("#humanScore");
const computerScoreP = document.querySelector("#computerScore");
const computerMove = document.querySelector("#computerMove");
const finalResult = document.querySelector("#finalResult");


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

    
function playRound(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
    computerMove.innerText = `The computer played ${computerChoice}`;
    results.innerText = "It's a tie!";
}
if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
        computerMove.innerText = `The computer played ${computerChoice}`;
        results.innerText = "You win! Rock beats Scissors"
        humanScore++
    }
    if (computerChoice === "paper") {
        computerMove.innerText = `The computer played ${computerChoice}`;
        results.innerText = "You lose! Paper beats Rock!"
        computerScore++
    }
} else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
        computerMove.innerText = `The computer played ${computerChoice}`;
        results.innerText = "You lose! Rock beats Scissors"
        computerScore++
    }
    if (computerChoice === "paper") {
        computerMove.innerText = `The computer played ${computerChoice}`;
        results.innerText = "You win! Scissors beats Paper!"
        humanScore++
    }
} else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
        computerMove.innerText = `The computer played ${computerChoice}`;
        results.innerText = "You win! Paper beats Rock"
        humanScore++
    }
    if (computerChoice === "scissors") {
        computerMove.innerText = `The computer played ${computerChoice}`;
        results.innerText = "You lose! Scissors beats Paper!"
        computerScore++
    }}}


    
    userSelection.addEventListener("click", (event) => {
        if (humanScore < 5 && computerScore < 5) {
            playRound(event.target.id, getComputerChoice());
            humanScoreP.innerText = `Your score is ${humanScore}`;
            computerScoreP.innerText = `The  computer's score is ${computerScore}`;
        } 
        if (humanScore === 5) {
            finalResult.innerText = "Congratulations, you won! Game over!";
        } else if (computerScore === 5) {
            finalResult.innerText = "Sorry, you lost. Game over!";
        }

        })
    

    



    