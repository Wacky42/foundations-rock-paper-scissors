// function getHumanChoice() {
//     let choice = prompt("Choose rock, paper, or scissors")
//     return choice;
// }

// function playGame() {

//     // Play five rounds
//     // for (let i = 0; i < 5; i++) {
//     //     const humanSelection = getHumanChoice();
//     //     const computerSelection = getComputerChoice();
//     //     outcome = playRound(humanSelection, computerSelection);
//     //     if (outcome == -1) {
//     //         computerScore++;
//     //     } else if (outcome == 1) {
//     //         humanScore++;
//     //     }
//     // }

//     if (humanScore > computerScore) {
//         console.log(`You won with a score of ${humanScore} against ${computerScore}`);
//     } else if (humanScore < computerScore) {
//         console.log(`You lost with a score of ${computerScore} against ${humanScore}`);
//     } else {
//         console.log(`You drew with a score of ${computerScore} against ${humanScore}`);
//     }

// }

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



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const rules = {
        'rock' : { 'scissors' : 'win', 'paper': 'lose', 'rock' : 'tie'},
        'paper' : {'rock' : 'win', 'scissors' : 'lose', 'paper' : 'tie'},
        'scissors' : {'paper' : 'win', 'rock' : 'lose', 'scissors' : 'tie'}
    }
    const result = rules[humanChoice][computerChoice];
    const resultList = document.querySelector(".resultList");

    const resultLine = document.createElement("li");
    resultList.append(resultLine);

    switch (result) {
        case 'win':
            resultLine.textContent = `You win! ${humanChoice} beats ${computerChoice}`
            // console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
            humanScoreSpan.textContent = `Human: ${humanScore}, `
            break;
        case 'lose':
            resultLine.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
            // console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
            computerScoreSpan.textContent = `Computer: ${computerScore}`
            break;
        case 'tie':
            resultLine.textContent = `You draw! ${computerChoice} stalemates ${humanChoice}`
            // console.log(`You draw! ${computerChoice} stalemates ${humanChoice}`)
            break;
    }

    checkGameEnd();
}

function checkGameEnd() {
    const finalResult = document.createElement("li");
    if (humanScore >= 5 || computerScore >= 5) {
        const finalResult = document.createElement("li");
        finalResult.textContent = humanScore >= 5 ? 'Game Over! You win the game!' : `Game Over! You lose the game!`
        
        const resultList = document.querySelector('.resultList');
        resultList.append(finalResult);

        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => button.disabled = true);
    }
}

let outcome;

let humanScore = 0;
let computerScore = 0;

const scoreboard = document.querySelector(".scoreboard");
const humanScoreSpan = document.createElement("span");
const computerScoreSpan = document.createElement("span");
scoreboard.append(humanScoreSpan);
scoreboard.append(computerScoreSpan);

humanScoreSpan.textContent = `Human : ${humanScore}, `
computerScoreSpan.textContent = `Computer : ${computerScore}`

const rock = document.createElement("button");
rock.textContent = "rock";
rock.addEventListener("click", () => {
    playRound(rock.textContent, getComputerChoice())
});

const paper = document.createElement("button");
paper.textContent = "paper";
paper.addEventListener("click", () => {
    playRound(paper.textContent, getComputerChoice())
});

const scissors = document.createElement("button");
scissors.textContent = "scissors";
scissors.addEventListener("click", () => {
    playRound(scissors.textContent, getComputerChoice())
});

const buttonList = document.querySelector(".buttons");
buttonList.appendChild(rock);
buttonList.appendChild(paper);
buttonList.appendChild(scissors);

// playGame();