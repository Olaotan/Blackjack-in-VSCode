
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")
const startBtn = document.getElementById('start-btn')
const newCardBtn = document.getElementById("new-btn") 
let firstCard = Math.floor(Math.random()*11) +1
let secondCard = Math.floor(Math.random()*11) +1
let sum = firstCard + secondCard

