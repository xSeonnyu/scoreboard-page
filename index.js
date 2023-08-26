// Home side

let scoreH = document.getElementById("score-H")
let scoreG = document.getElementById("score-G")

let HPoints = 0
let GHPoints = 0

function one(){
    HPoints += 1
    scoreH.textContent = HPoints
}

function two(){
    HPoints += 2
    scoreH.textContent = HPoints
}

function three(){
    HPoints += 3
    scoreH.textContent = HPoints
}

// Guest section

function Gone(){
    GHPoints += 1
    scoreG.textContent = GHPoints
}

function Gtwo(){
    GHPoints += 2
    scoreG.textContent = GHPoints
}

function Gthree(){
    GHPoints += 3
    scoreG.textContent = GHPoints
}