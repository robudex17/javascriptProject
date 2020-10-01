/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores, roundScore, activePlayer;

scores = [0,0];
roundScore  = 0;
activePlayer = 0;

//set all to zero value
['score-0','score-1','current-0','current-1'].forEach(id => {
    document.getElementById(id).textContent = 0;
})
document.querySelector('.dice').style.display = 'none';

dice = Math.floor(Math.random() * 6) + 1

const newButton = document.querySelector('.btn-new');
newButton.addEventListener('click', (e) => {
    location.reload()
})

const changeTurn  = () => {
    activePlayer == 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;

    ['current-0', 'current-1'].forEach(id => {
         document.getElementById(id).textContent = "0"
    })

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-roll').addEventListener('click', (e) => {
    let dice = Math.floor(Math.random() * 6) + 1
    let diceImage = document.querySelector('.dice')
    diceImage.style.display = 'block'
    diceImage.src = `dice-${dice}.png`
    roundScore += dice
   
    if(dice !==1) {
        document.querySelector('#current-'+ activePlayer).textContent = roundScore
    }else{
      changeTurn()
       
    }
})

document.querySelector('.btn-hold').addEventListener('click', (e) => {
   // let playerScore =  +document.querySelector('#score-'+ activePlayer).textContent + roundScore
   scores[activePlayer] += roundScore
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    if(playerScore >= 10){
        let winnerDivtag = `<div>YOUR ARE THE WINNER</div>`
        document.querySelector('#score-'+activePlayer).parentElement.insertAdjacentHTML('afterbegin', winnerDivtag)
        document.querySelector('.btn-hold').disabled = true
        document.querySelector('.btn-roll').disabled = true
    }
     changeTurn()
    
})