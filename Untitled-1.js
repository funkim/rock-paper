const hand = ['Rock','Paper' ,'Scissors'];
function playRound() {
let   win = `You Won! They Chose ${computerSelection}.`
let   lose = `You lost =( They Chose ${computerSelection}.`
let   tie = `It was a tie! They also chose ${computerSelection}.`
let showdown = 'The Result is...'
    function computerSelection() {
        const randomElement = hand[Math.floor(Math.random() * hand.length)]
        return randomElement;
    }
    function playerSelection() {
        document.querySelector('input[type=text]').value;
        return value.toLowerCase();
    }
    switch (playerSelection()) {
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
        break;
            default:
                showdown = "THATS NOT A ANSWER!!!!!"
        break;
    } 
    document.getElementById("result").innerHTML = showdown;
}