// Initialize default values

let computer_choice
let human_choice

let computer_score = 0
let human_score = 0

let round = 0
let maxRound = 10

const CHOICE_ARRAY = ["rock", "paper", "scissors"] // Array of move choices, that simplifies code


// Computer randomly decides move

function getComputerChoice(){ 
    let random_choice = Math.random()

    if (random_choice < (1/3)){
        computer_choice = CHOICE_ARRAY[0]
    } else if (random_choice > (2/3)){
        computer_choice = CHOICE_ARRAY[2]
    } else{
        computer_choice = CHOICE_ARRAY[1]
    }
    return computer_choice
}


// Old function

// function getHumanChoice(){
//     let human_choice = prompt(`Choose ${CHOICE_ARRAY[0]}, ${CHOICE_ARRAY[1]} or ${CHOICE_ARRAY[2]}!`)
//     human_choice = human_choice.toLowerCase()
//     console.log("HUMAN: "+human_choice)
//     CHOICE_ARRAY.includes(human_choice)
//         ? playRound(computer_choice, human_choice)
//         : console.log("input error")
// }


// Function that compares the player's move with the computer move, calculates score and adds HTML elements to the document

function playRound(computer_choice, human_choice){
    if (computer_choice == human_choice){
        roundWinnerText.textContent=("Tie this round!")
    } else if 
    ( 
    (computer_choice == CHOICE_ARRAY[0] && human_choice == CHOICE_ARRAY[2]) || 
    (computer_choice == CHOICE_ARRAY[1] && human_choice == CHOICE_ARRAY[0]) ||
    (computer_choice == CHOICE_ARRAY[2] && human_choice == CHOICE_ARRAY[1]) 
    ) {
        roundWinnerText.textContent=("Computer wins this round!")
        computer_score+=1
    } else{ 
        roundWinnerText.textContent=("Player wins this round!")
        human_score+=1
    }
    winnerTextContainer.appendChild(roundWinnerText);
    calcRound(round+1, maxRound)
}


// Extension of playRound

function calcRound(roundNum, maxRound){
    if (roundNum < maxRound){
        round+=1
    } else if (roundNum == maxRound) {
        round+=1
        if (computer_score == human_score){
            gameWinnerText.textContent=("Tie this game!")
        } else if (computer_score > human_score){
            gameWinnerText.textContent=("Computer wins this game!")
        } else{
            gameWinnerText.textContent=("Player wins this game!")
        }
        winnerTextContainer.appendChild(gameWinnerText)
        buttons.forEach((button) => {
            button.setAttribute("style", "opacity: 0.6; cursor: not-allowed;")
            button.disabled = true;
        })

    }
    document.getElementById("roundScores").textContent=(`Round: ${round} || Scores: Computer: ${computer_score} | Player: ${human_score}`)
}


const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        human_choice = CHOICE_ARRAY[parseInt(button.id)]
        getComputerChoice()
        playRound(computer_choice, human_choice)
    })
  })

const winnerTextContainer = document.querySelector(".content .container")

const roundWinnerText = document.createElement("p")
roundWinnerText.setAttribute("style", "text-align: center; font-weight: 500")

const gameWinnerText = document.createElement("p")
gameWinnerText.setAttribute("style", "text-align: center; font-weight: bold")