//classes, class - criar objetos 'prontos'
class Carro {
    constructor(valor1, valor2, valor3){
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }
    buzina() {
        return this.modelo + ' buzinou: Biiiiiiiiiiiiii'
    }
}
const uno = new Carro('fiat', 'uno', 2008)
const gol = new Carro('gol', 'volkswagen', 2015)
console.log(uno)
console.log(gol.buzina())