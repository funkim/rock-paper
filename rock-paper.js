const Hand = ['Rock','Paper','Scissors']
function game() {
function playRound(){
    const computerSelection = getComputerChoice();
    function getComputerChoice() {
    const randomElement = Hand[Math.floor(Math.random() * Hand.length)]
    return randomElement;
    }
    computerSelection;
    let playerSelection = document.querySelector('input[type=text]').value;
    playerSelection = playerSelection.toLowerCase();
    const win = `You Won! They Chose ${computerSelection}.`
    const lose = `You lost =( They Chose ${computerSelection}.`
    const tie = `It was a tie! They also chose ${computerSelection}.`
    switch (playerSelection) {
    case "scissors":
        if  (computerSelection === 'Rock' ) {
            showdown = lose;
        }
        else if (computerSelection === 'Paper') {
        showdown = win;
        }
        else {
            showdown = tie
        }
        break;
    case "rock":
        if (computerSelection === 'Rock') {
            showdown = tie;
        }
        else if (computerSelection === 'Paper') {
            showdown = lose
        }
        else {
            showdown = win
        }
        break;
    case "paper":
        if (computerSelection === 'Rock') {
            showdown = win;
        }
        else if (computerSelection === 'Paper') {
            showdown = tie;
        }
        else {
            showdown = lose; 
        }
    } 
    document.getElementById("result").innerHTML = showdown;
}
function getComputerChoice() {
    const randomElement = Hand[Math.floor(Math.random() * Hand.length)]
    return randomElement;
}
}
