//global var Rock Paper Scissors
const rps = ["rock", "paper", "scissors"];
//const prompt = require('prompt-sync')();
let gameOpen = false;
let numGames = 5;

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const cScore = document.querySelector('#cscore');
const hScore = document.querySelector('#hscore');

const startBtn = document.getElementById('start-btn');

let win = document.getElementById("winner");
let endRes = document.querySelector('#game-res-fil');


/* Event listeners */

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
})

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

startBtn.addEventListener("click", () => {
  gameOpen = true;
  numGames = 0;
  cScore.textContent = 0;
  hScore.textContent = 0;
  win.textContent = "Let's Begin!"
  endRes.textContent = " ";
})

/*Typing Effect */

async function typeSentence(sentence, eleRef, delay=50){
  //alert(eleRef.innerHTML);
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    //async await pattern will allow code to execute line-by-line
    //$(eleRef).append(letters[i]);
    eleRef.innerHTML += letters[i];
    i++;
  }
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//var i = 0;
//var txt = 'a winner happens.'; /* The text */
//var speed = 50; /* The speed/duration of the effect in milliseconds */

/*function typeWriter() {
  if (i < txt.length) {
    document.getElementById("winner").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//typeWriter();*/

//return Rock, Paper, or Scissors


const getComputerChoice = () => {
  cChoice = rps[Math.floor(Math.random() * rps.length)];
  return cChoice;  
}

const typeRes = (a, b) => {
  text = `The ${a} has won with ${b} victories.`
  //endRes.textContent = `The ${a} has won with ${b} victories.`
}

//run a round between players and computers
function playRound(playerSelection, computerSelection) {
  if (gameOpen == true && numGames < 5){
    win.innerHTML = " ";
    let p = parseInt(hScore.textContent);
    let c = parseInt(cScore.textContent);
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
    if(result == "win") {
      win.textContent = "Player Wins"
      p+=1;
      hScore.textContent = p;
    }
    else if (result == "tie") {
      win.textContent = "Tie Game"
    }
    else {
      win.textContent = "Computer Wins"
      c+=1;
      cScore.textContent = c;
    }
    numGames += 1;
    if (numGames == 5){
      c > p ? typeSentence(`Computers have won with ${c} victories.`, endRes) : typeSentence(`Humans have won with ${p} victories.`, endRes);
    }
  } else {
    win.innerHTML = "Click Start"
  }
  //result == "win" ? hScore.textContent = p+=1 : cScore.textContent = c+=1;
}

function BeginGame() {
  
  /*
  Add an ON / OFF condition to the game
  ON is triggered by the start game button
  Add a tracker to the # of games played
  If the tracker is 5, then the game switches to OFF
  The winner is displayed at this time
  
  
  //OLD CODE
  console.log("5 games of rock paper scissors");
  compScore = 0;
  playScore = 0;
  /*for (let i=0; i<5; i++){
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
  compScore > playScore ? console.log(`Computer won with ${compScore} victories...`)
    : playScore > compScore ? console.log(`Player Won with ${playScore} victories!`)
      : console.log("Tie Game");*/
}

game();
