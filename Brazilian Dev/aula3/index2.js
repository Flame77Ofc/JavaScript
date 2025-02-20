class Dev{
    constructor(nome, idade, lingua, profissao) {
        this.nome = nome
        this.idade = idade
        this.lingua = lingua
        this.profissao = profissao
    }

    saudacao() {
        console.log(`Oi, sou ${this.nome}, tenho ${this.idade} anos, trabalho com ${this.profissao} e falo ${this.lingua}`)
    }
}

const dev = new Dev('Gabriel', 15, 'Português do Brasil', 'FrontEnd')
console.log(dev)