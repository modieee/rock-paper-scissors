// Global Variable
// player and computer scores
let playerScore;
let computerScore;

// get player input or choice of rock paper scissors.
const playerSelection = prompt('rock, paper or scissors?')

// computer choice input of rock paper scissors
function getComputerChoice (){
    const choices = [ 'rock', 'paper', 'scissors'];
    
    let randomIndex = Math.floor(Math.random() * choices.length);
    return randomIndex;
}

// computer choice of rock paper scissors stored in the compChoice variable
let compChoice = getComputerChoice();


// Game Logic
function playRound(getComputerChoice, playerSelection) {

    if (playerSelection == 'rock') {
        if (compChoice == 'paper') {
            computerScore += 1;
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            console.log("You Lose!, Paper beats Rock!");
        } else if (compChoice == 'scissors') {
            playerScore += 1;
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            console.log("You Win!, Rock beats Scissors!");
        } else {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log('Draw!, Rock cannot beat Rock!');
        }
    } else if (playerSelection == 'paper') {
        if (compChoice == 'rock') {
            playerScore += 1;
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log("You Win!, Paper beats Rock!")
        } else if (compChoice == 'scissors') {
            computerScore += 1;
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log("You Lose!, Scissors cuts Paper!")
        } else {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log('Draw!, Paper cannot beat Paper!')
        }
    } else if (playerSelection == 'scissors') {
        if (compChoice == 'rock') {
            computerScore += 1;
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            console.log('You Lose!, Rock beats Scissors!');
        } else if (compChoice == 'paper') {
            playerScore += 1;
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            console.log('You Win!, Scissors cuts Paper!');
        } else {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log("Draw!, Scissors can't cut Scissors!")
        }
    }
}

//  Game Run
function playGame (times) {
    if (computerScore <= 0 && playerScore <= 0) {
        for (let i = 1; i <= times; i++) {
            playRound(getComputerChoice, playerSelection);
        }
    } else if (computerScore == 3){
        console.log("Game Over Computer Wins!");
        console.log("Computer Score: " + computerScore)
        console.log("Player Score: " + playerScore)
    } else if (playerScore == 3){
        console.log("You've Won!");
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
    }
};

playGame(5);