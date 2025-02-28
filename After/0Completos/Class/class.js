//Classe
//Exemplo 1:
class Carro {
    constructor(nome, ano) {
        this.nome = nome
        this.ano = ano
    }
}
const carro1 = new Carro('Audi', 2020)
const carro2 = new Carro('Ferrari', 2018)
console.log(carro1, carro2)


//Exemplo 2:
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    saudacao() {
        console.log('Olá, ' + this.nome)
    }
}
const Usuario1 = new Pessoa('Gabriel')
//Imprimir o Objeto
console.log(Usuario1)
//Imprimir apenas a saudação>
Usuario1.saudacao()