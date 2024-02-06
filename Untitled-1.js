const hand = ['Rock','Paper' ,'Scissors'];
let playerScore = 0;
let computerScore = 0;
function playerSelection() {
        document.querySelectorAll(`.playerChoice`).forEach(button => {
        button.addEventListener("click", (e) => {
        const playerChoice = e.target.getAttribute(`id`);
        game(playerChoice);
        console.log(`Player: ${playerChoice}, Computer: ${computerChoice}`);
        })
    });
}

function game() {
    if (playerScore < 5 && computerScore < 5) {
        const roundResult = playRound(playerChoice);
        if (roundResult === 'win') {
            playerScore++;
        } else if (roundResult === 'lose') {
            computerScore++;
        }
    document.getElementById("result").innerHTML = `Player score = ${playerScore}, Computer score = ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? "Player wins!" : "Computer wins!";
    document.getElementById("winner").innerHTML = winner;
    }
}
}

    function computerSelector() {
        const randomChoice = hand[Math.floor(Math.random() * hand.length)]
        return randomChoice;
    }

function playRound() {
        const computerChoice = computerSelector();
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

button.addEventListener("click", (e) =>{
    playerSelection()
    playRound(playerChoice)
});
