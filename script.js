//global var Rock Paper Scissors
const rps = ["rock", "paper", "scissors"];

const prompt = require('prompt-sync')();

//return Rock, Paper, or Scissors
function getComputerChoice() {
    return rps[Math.floor(Math.random()*rps.length)];
}

//run a round between players and computers
function playRound(playerSelection, computerSelection){
    let result;
    if (computerSelection === playerSelection) {
        result = "tie";
    }
    else if (computerSelection === "rock" && playerSelection === "scissors" ||
            computerSelection === "paper" && playerSelection === "rock" ||
            computerSelection === "scissors" && playerSelection === "paper") {
        result = "lose"
    } else {
        result = "win";
    }
    return result;
}

function game(){
    console.log("5 games of rock paper scissors");
    compScore = 0;
    playScore = 0;
    for (let i=0; i<5; i++){
        console.log(`Round ${i+1}: Choose Rock, Paper or Scissors`);
        var uInput = prompt(">").toLowerCase();
        var cInput = getComputerChoice();
        let play = playRound(uInput, cInput);
        console.log(play);
        switch (play) {
            case "win": 
                playScore +=1;
                break;
            case "lose": 
                compScore +=1;
                break;
            default:
                break;
        }
        console.log(`Player: ${playScore} vs Computer: ${compScore}`);
    }
    compScore > playScore ? console.log(`Computer won with ${compScore} voctories...`)
        : playScore > compScore ? console.log(`Player Won with ${playScore} victories!`)
        : console.log("Tie Game");
}

game();
