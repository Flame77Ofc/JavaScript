class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}

class Cachorro extends Animal {
    constructor(raca) {
        this.raca = raca; // Erro: super() é necessário antes de usar "this"
    }
}

const dog = new Cachorro("Labrador");
console.log(dog.raca);
