
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")

const startBtn = document.getElementById('start-btn')
const newCardBtn = document.getElementById("new-btn") 
const heading = document.getElementById("heading")
let firstCard = Math.floor(Math.random()*11) +1
let secondCard = Math.floor(Math.random()*11) +1
let extraCard = Math.floor(Math.random()*11) +1
let sum = firstCard + secondCard


startBtn.addEventListener('click', function(){
})


function newGameCard(){    
    cardsEl.textContent += firstCard + ' ' + secondCard
    sumEl.textContent = "Sum: " + sum
}

function extraCard(){
    cardsEl.textContent += extraCard
    sumEl.textContent = "Sum: " + sum

}

function cardLogic(){

    if (sum < 21) {
        heading.textContent = "Pick a new card"
    } else if (sum > 21) {
        heading.textContent = "Game Over"
    } else {
        heading.textContent = "You've got Blackjack!"
    }

}