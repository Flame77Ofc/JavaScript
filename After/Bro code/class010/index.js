//Classes
//Servem para criar modelos de objetos que agrupam dados e ações (métodos). Facilitam organização, reutilização e herança de código.

class Player{
    score = 0

    pause() {
        console.log('You paused the game')
    }
    exit() {
        console.log('You exited the game')
    }
}
const player1 = new Player()
player1.score += 1
console.log(player1.score)