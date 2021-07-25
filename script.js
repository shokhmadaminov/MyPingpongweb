const h1score1 = document.getElementById('score1')
const h1score2 = document.getElementById('score2')
const btnplayer1 = document.getElementById('player1')
const btnplayer2 = document.getElementById('player2')
const selector = document.getElementById('select')
const btnreset = document.getElementById('btnreset')
const p = document.getElementById('p')


let playerscore1 = 0
let playerscore2 = 0 
let gamescore = +selector.value
let gameover = true

btnplayer1.addEventListener('click', () => {
    if(gameover){
        playerscore1++
        if(playerscore1 == gamescore){
            gameover = false
            h1score1.style.color = 'green'
            h1score2.style.color = 'red'
            p.textContent = 'Player-1 wins'
            let audio = new Audio('./sound/sound1.mp3')
            audio.play()
        }
        h1score1.textContent = playerscore1
    }
})
btnplayer2.addEventListener('click', () => {
    if(gameover){
        playerscore2++
        if(playerscore2 == gamescore){
            gameover = false
            h1score1.style.color = 'red'
            h1score2.style.color = 'green'
            p.textContent = 'Player-2 wins'
            let audio = new Audio('./sound/sound1.mp3')
            audio.play()
        }
        h1score2.textContent = playerscore2
    }
})

selector.addEventListener('change', () => {
    let selectvalue = +selector.value
    gamescore = selectvalue
    reset()
})

btnreset.addEventListener('click', reset)

function reset(){
    playerscore1 = 0
    h1score1.textContent = playerscore1
    playerscore2 = 0 
    h1score2.textContent = playerscore2
    gameover = true
    h1score1.style.color = '#353535'
    h1score2.style.color = '#353535'
    let audio1 = new Audio('./sound/sound2.mp3')
    audio1.play()
}
