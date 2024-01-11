const hand = ['Rock','Paper' ,'Scissors'];
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let   win = `You Won! They Chose ${computerSelection}.`
    let   lose = `You lost =( They Chose ${computerSelection}.`
    let   tie = `It was a tie! They also chose ${computerSelection}.`
    let showdown = 'The Result is...'
    if (showdown === win) {
        playerScore = playerScore++;
    } else if (showdown === lose) {
        computerScore = computerScore++;
    }
    function playRound() {
        function computerSelector() {
            const randomElement = hand[Math.floor(Math.random() * hand.length)]
            return randomElement;
        }
        let computerSelection = computerSelector();
        function playerSelection() {
            const value = document.querySelector('input[type=text]').value;
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
    }


    document.getElementById("result").innerHTML = showdown;
}
