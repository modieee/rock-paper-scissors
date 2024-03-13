// Global Variables
// let playerScore = 0;
// let compScore = 0;

// Second get player input or choice of rock paper scissors.
const playerSelection = prompt('rock, paper or scissors?')

// computer choice input of rock paper scissors
function getComputerChoice (){
    const choices = [ 'rock', 'paper', 'scissors'];
    
    let randomIndex = Math.floor(Math.random() * choices.length);

    let compChoice = choices[randomIndex];

    return compChoice;
}

// Game Logic
function playRound(getComputerChoice, playerSelection) {
    let compChoice = getComputerChoice();

    if (playerSelection == 'rock') {
        if (compChoice == 'paper') {
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            console.log("You Lose!, Paper beats Rock!");
            compScore += 1;
        } else if (compChoice == 'scissors') {
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            console.log("You Win!, Rock beats Scissors!");
            playerScore += 1;
        } else {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log('Draw!, Rock cannot beat Rock!');
        }
    } else if (playerSelection == 'paper') {
        if (compChoice == 'rock') {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log("You Win!, Paper beats Rock!")
            playerScore += 1;
        } else if (compChoice == 'scissors') {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log("You Lose!, Scissors cuts Paper!")
            compScore += 1;
        } else {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log('Draw!, Paper cannot beat Paper!')
        }
    } else if (playerSelection == 'scissors') {
        if (compChoice == 'rock') {
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            console.log('You Lose!, Rock beats Scissors!');
            compScore += 1;
        } else if (compChoice == 'paper') {
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            console.log('You Win!, Scissors cuts Paper!');
            playerScore += 1;
        } else {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log("Draw!, Scissors can't cut Scissors!")
        }
    }
}


// function playGame() {
//     playRound(getComputerChoice, playerSelection);
//     for (let i = 5; i < 1; i--) {
//         console.log(playerScore[i]);
//         console.log(compScore[i]);
//     }
// }

// playGame();