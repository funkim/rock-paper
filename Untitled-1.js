const hand = ['Rock','Paper' ,'Scissors'];
let playerScore = 0;
let computerScore = 0;
function playerSelection() {
        document.querySelectorAll(`.playerChoice`).forEach(button => {
        button.addEventListener("click", (e) => {
        const playerChoice = e.currentTarget.getAttribute(`id`);
        const roundResult = playRound(playerChoice);
        game(roundResult);
        })
    });
}

function game(roundResult) {
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


    function computerSelector() {
        const randomChoice = hand[Math.floor(Math.random() * hand.length)]
        return randomChoice;
    }


function showComputerChoice(computerChoice) {
    if (computerChoice === 'Scissors') {
        cCSide.appendChild(cCScissors);
    } else if (computerChoice === 'Rock') {
        cCSide.appendChild(cCRock);
    } else cCSide.appendChild(cCPaper);
}
function playRound(playerChoice) {
        const computerChoice = computerSelector();
        showComputerChoice(computerChoice)
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


document.addEventListener('DOMContentLoaded', (event) => {
    playerSelection();
});

const field = document.querySelector('div.battlefield');
const cCSide = document.createElement('div');
cCSide.id = 'CC';
const cCScissors = document.createElement('img')
const cCRock = document.createElement('img')
const cCPaper = document.createElement('img')
cCRock.src= 'https://b.fssta.com/uploads/application/wwe/headshots/dwayne-the-rock-johnson.png'
cCPaper.src = 'https://t3.ftcdn.net/jpg/04/93/12/02/360_F_493120276_kdpx5zM8on0aDnwsKHUMjX6horS61vhH.jpg'
cCScissors.src = 'https://www.artnews.com/wp-content/uploads/2022/07/AdobeStock_507713455.jpeg'
field.appendChild(cCSide);