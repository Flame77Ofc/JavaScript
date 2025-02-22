//Classe
class Carro {
    constructor(nome, ano) {
        this.nome = nome
        this.ano = ano
    }
}
const carro1 = new Carro('Audi', 2020)
const carro2 = new Carro('Ferrari', 2018)
console.log(carro1, carro2)