function getComputerChoice() {
    // Outputs -1, 0 or 1
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
    return num;
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors")
    return choice;
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const rules = {
        'rock' : { 'scissors' : 'win', 'paper': 'lose', 'rock' : 'tie'},
        'paper' : {'rock' : 'win', 'scissors' : 'lose', 'paper' : 'tie'},
        'scissors' : {'paper' : ' win', 'rock' : 'lose', 'scissors' : 'tie'}
    }
    const result = rules[humanChoice][computerChoice];

    switch (result) {
        case 'win':
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            return 1;
        case 'lose':
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return -1;
        case 'tie':
            console.log(`You draw! ${computerChoice} stalemates ${humanChoice}`)
            return 0;
    }
}

function playGame() {
    let outcome;
    let humanScore = 0;
    let computerScore = 0;

    const body = document.querySelector("body");

    const rock = document.createElement("button");
    rock.textContent = "rock";

    const paper = document.createElement("button");
    paper.textContent = "paper";

    const scissors = document.createElement("button");
    scissors.textContent = "scissors";

    body.appendChild(rock);
    
    rock.addEventListener('click', () => {
        const humanSelection = 'rock';
    });

    paper.addEventListener('click', () => {
        const humanSelection = 'paper';
    });

    scissors.addEventListener('click', () => {
        const humanSelection = 'scissors';
    });



    // Play five rounds
    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     outcome = playRound(humanSelection, computerSelection);
    //     if (outcome == -1) {
    //         computerScore++;
    //     } else if (outcome == 1) {
    //         humanScore++;
    //     }
    // }

    if (humanScore > computerScore) {
        console.log(`You won with a score of ${humanScore} against ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lost with a score of ${computerScore} against ${humanScore}`);
    } else {
        console.log(`You drew with a score of ${computerScore} against ${humanScore}`);
    }

}

playGame();