// Global Variable
// player and computer scores
let playerScore = 0;
let computerScore = 0;

// Game Logic
function playRound(compChoice, playerSelection) {

    if (playerSelection == 'rock') {
        if (compChoice == 'paper') {
            computerScore++;
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            // console.log("You Lose!, Paper beats Rock!");
        } else if (compChoice == 'scissors') {
            playerScore++;
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            // console.log("You Win!, Rock beats Scissors!");
        } else {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log('Draw!, Rock cannot beat Rock!');
        }
    } else if (playerSelection == 'paper') {
        if (compChoice == 'rock') {
            playerScore++;
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            // console.log("You Win!, Paper beats Rock!")
        } else if (compChoice == 'scissors') {
            computerScore++;
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            // console.log("You Lose!, Scissors cuts Paper!")
        } else {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log('Draw!, Paper cannot beat Paper!')
        }
    } else if (playerSelection == 'scissors') {
        if (compChoice == 'rock') {
            computerScore++;
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            // console.log('You Lose!, Rock beats Scissors!');
        } else if (compChoice == 'paper') {
            playerScore++;
            console.log('You chose: ', playerSelection);
            console.log('Computer chose: ', compChoice);
            // console.log('You Win!, Scissors cuts Paper!');
        } else {
            console.log('You chose: ', playerSelection)
            console.log('Computer chose: ', compChoice)
            console.log("Draw!, Scissors can't cut Scissors!")
        }
    }
}

//  Game Run
function playGame() {
    if (computerScore <= 0 && playerScore <= 0) {
        for (let i = 1; i <= 5; i++) {
            // get player input or choice of rock paper scissors.
            const playerSelection = prompt('rock, paper or scissors?')
            console.log(i);
            // computer choice input of rock paper scissors
            function getComputerChoice (){
                const choices = [ 'rock', 'paper', 'scissors'];
                
                let randomIndex = Math.floor(Math.random() * choices.length);
                return choices[randomIndex];
            }
            // computer choice of rock paper scissors stored in the compChoice variable
            let compChoice = getComputerChoice();
            
            // run the game
            playRound(compChoice, playerSelection);
            // print game scores
            console.log("Your Score: ", playerScore);
            console.log("Computer Score: ", computerScore);
            
            // check game scores for winner
            if (computerScore === 3) {
                if (i === 5) {
                    console.log("Game Over Computer Wins!");
                    console.log("Computer Score: " + computerScore)
                    console.log("Player Score: " + playerScore)
                    break
                } else if (i < 5) {
                    console.log("Game Over Computer Wins!");
                    console.log("Computer Score: " + computerScore)
                    console.log("Player Score: " + playerScore)
                    break
                }
            } else if (playerScore === 3) {
                if (i === 5) {
                    console.log("You've Won!");
                    console.log("Player Score: " + playerScore)
                    console.log("Computer Score: " + computerScore)
                    break
                } else if (i < 5) {
                    console.log("You've Won!");
                    console.log("Player Score: " + playerScore)
                    console.log("Computer Score: " + computerScore)
                    break
                }
            } else if (computerScore < 3 && i === 5) {
                if (computerScore > playerScore) {
                    console.log("Game Over Computer Wins!")
                    console.log("Computer Score: " + computerScore)
                    console.log("Player Score: " + playerScore)
                    break
                }
            } else if (playerScore < 3 && i === 5) {
                if (playerScore > computerScore) {
                    console.log("You've Won!");
                    console.log("Player Score: " + playerScore)
                    console.log("Computer Score: " + computerScore)
                    break
                } else if (playerScore === computerScore && i === 5) {
                    console.log("Game Draw!");
                }
            }
            
        }
        
    }
    
};

// Invoke the game / Run the game
playGame();