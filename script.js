"use strict"

const player0El=document.querySelector(".player-0");
const player1El=document.querySelector(".player-1");
const score0El=document.querySelector("#score-0");
const score1El=document.querySelector("#score-1");
const current0El=document.querySelector("#current-0");
const current1El=document.querySelector("#current-1");
const diceEl=document.querySelector(".dice");
const btnRoll=document.querySelector(".roll");
const btnHold=document.querySelector(".hold");
const btnRestart=document.querySelector(".restart")
const btnRestart1=document.querySelector(".restart")
let score,currentScore,activePlayer,playing;

const startingCondititon=()=>{
score=[0,0];
currentScore=0;
activePlayer=0;

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');
player0El.classList.remove("player-winner");
player1El.classList.remove("player-winner");
}


function switchPlayer(){
    document.querySelector('#current-${activePlayer}').textContent=0;
    currentScore=0;
    activePlayer=activePlayer===0?1:0;
    player0El.classList.toggle("player-active");
    player1El.classList.toggle("player-active");
}


btnRoll.addEventListener("click",()=>{
    let dice=Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove("hidden");
    diceEl.src=`./Images/dice-${dice}.svg`;
});


