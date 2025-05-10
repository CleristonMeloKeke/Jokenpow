const yourScore = document.querySelector("#yourScore")
const machineScore = document.querySelector("#machineScore")
const result = document.querySelector(".result")

let userScore = 0
let machineScr = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const choiceMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const choiceHuman = (humanChoice) => {
    playTheGame(humanChoice, choiceMachine())
}

const playTheGame = (human, machine) => {

    if(human === machine){
        result.innerHTML = "Deu empate!"
    } else if( (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) || 
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ){
        result.innerHTML = "Você ganhou!"
        userScore++
        yourScore.innerHTML = userScore
    } else {
        result.innerHTML = "Você perdeu para a Alexa!"
        machineScr++
        machineScore.innerHTML = machineScr
    }
}
