
const Hand = ['Rock','Paper','Scissors']
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    let playerSelection = document.querySelector('input[type=text]').value
    function getComputerChoice() {
    const randomElement = Hand[Math.floor(Math.random() * Hand.length)]
    return randomElement;
}
    switch (playerSelection) {
    case "Scissors":
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
    case "Rock":
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
    case "Paper":
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
const win = `You Won! They Chose ${computerSelection}.`
const lose = `You lost =( They Chose ${computerSelection}.`
const tie = `It was a tie! They also chose ${computerSelection}.`