const hand = ['Rock','Paper' ,'Scissors'];
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    if (playerScore < 3 && computerScore < 3) {
        const roundResult = playRound();
        if (roundResult === 'win') {
            playerScore++;
        } else if (roundResult === 'lose') {
            computerScore++;
        }
    document.getElementById("result").innerHTML = `Player score = ${playerScore}, Computer score = ${computerScore}`;
    console.log(roundResult)
    const winner = playerScore === 3 ? "Player wins!" : "Computer wins!";
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
        let   win = `You Won! They Chose ${computerSelection}.`
        let   lose = `You lost =( They Chose ${computerSelection}.`
        let   tie = `It was a tie! They also chose ${computerSelection}.`
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
            break;
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
            break;
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
            break;
                default:
                    return showdown = "THATS NOT A ANSWER!!!!!"
            break;
        } 
    }


    document.getElementById("showdown").innerHTML 
}
