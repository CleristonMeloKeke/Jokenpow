/* 
    1 -> rock
    2 -> paper
    3 -> scissors
*/

const yourScore = document.querySelector("#yourScore")
const machineScore = document.querySelector("#machineScore")
let userScore = 0
let machineScr = 0

function chooceMachine() {
    const chooce = (Math.floor(Math.random() * 3) + 1).toFixed(0)
    return chooce
}

function chooce(selected) {
    if(selected == 1) {
        chooceRock(selected)
    } else if (selected == 2) {
        choocePaper(selected)
    } else {
        chooceScissors(selected)
    }
}

function chooceRock(selected) {
    const user = selected
    const machine = chooceMachine()
    if (user == 1 && machine == 1) {
        alert("Pedra é igual a Pedra -> EMPATE")
    } else if (user == 1 && machine == 2) {
        alert("Pedra perde para Papel -> Ponto para Alexa")
        machineScr++
        machineScore.innerHTML = machineScr
    } else {
        alert("Pedra ganha de Tesoura -> Ponto para você")
        userScore++
        yourScore.innerHTML = userScore
    }
}

function choocePaper(selected) {
    const user = selected
    const machine = chooceMachine()
    if (user == 2 && machine == 1) {
        alert("Papel ganha de Pedra -> Ponto para você")
        userScore++
        yourScore.innerHTML = userScore
    } else if (user == 2 && machine == 2) {
        alert("Papel é igual a Papel -> EMPATE")
    } else {
        alert("Papel perde para Tesoura -> Ponto para Alexa")
        machineScr++
        machineScore.innerHTML = machineScr
    }
}

function chooceScissors(selected) {
    const user = selected
    const machine = chooceMachine()
    if (user == 3 && machine == 1) {
        alert("Tesoura perde de Pedra -> Ponto para Alexa")
        machineScr++
        machineScore.innerHTML = machineScr
    } else if (user == 3 && machine == 2) {
        alert("Tesoura ganha de Papel -> Ponto para você")
        userScore++
        yourScore.innerHTML = userScore    
    } else {
        alert("Tesoura igual a Tesoura -> EMPATE")
    }
}