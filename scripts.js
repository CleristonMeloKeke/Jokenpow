const yourScore = document.querySelector("#yourScore")
const machineScore = document.querySelector("#machineScore")
const result = document.querySelector(".result")

let userScore = 0
let machineScr = 0

const choiceMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const choiceHuman = (humanChoice) => {
    playTheGame(humanChoice, choiceMachine())
}

const playTheGame = (human, machine) => {

    if(human === machine){
        result.innerHTML = "Deu empate!"
    } else if( (human === 'paper' && machine === 'rock') || 
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
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
