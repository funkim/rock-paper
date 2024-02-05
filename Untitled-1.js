const hand = ['Rock','Paper' ,'Scissors'];
let playerScore = 0;
let computerScore = 0;

function game() {
    if (playerScore < 5 && computerScore < 5) {
        const roundResult = playRound();
        if (roundResult === 'win') {
            playerScore++;
        } else if (roundResult === 'lose') {
            computerScore++;
        }
    document.getElementById("result").innerHTML = `Player score = ${playerScore}, Computer score = ${computerScore}`;
    console.log(roundResult)
    const winner = playerScore === 5 ? "Player wins!" : "Computer wins!";
    }
}
function playerSelection() {
    const value = document.querySelector('input[type=text]').value;
    return value.toLowerCase();
}
function playRound() {
    function computerSelector() {
        const randomChoice = hand[Math.floor(Math.random() * hand.length)]
        return randomChoice;
    }
    let computerSelection = computerSelector();
    let   win = `You Won! They Chose ${computerSelection}.`
    let   lose = `You lost =( They Chose ${computerSelection}.`
    let   tie = `It was a tie! They also chose ${computerSelection}.`
        // These must be initiated here so cChoice can be defined within the string.
    let showdown = 'The Result is...'
    switch (playerSelection()) {
    case "scissors":
        if  (computerSelection === 'Rock' ) {
        return  showdown = lose;
        }
        else if (computerSelection === 'Paper') {
        return showdown = win;
        }
        else {
        return showdown = tie
        }
    case "rock":
        if (computerSelection === 'Rock') {
            return showdown = tie;
        }
        else if (computerSelection === 'Paper') {
            return showdown = lose
        }
        else {
            return showdown = win
        }
    case "paper":
        if (computerSelection === 'Rock') {
            return showdown = win;
        }
        else if (computerSelection === 'Paper') {
            return showdown = tie;
        }
        else {
            return showdown = lose; 
        }
    } 
}
    document.getElementById("showdown").innerHTML 

