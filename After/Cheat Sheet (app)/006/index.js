//Class: método estático
class Dog {
    constructor(nome) {
        this._nome = nome
    }

    introduzir() {
        console.log('Esse é ' + this._nome + ' !')
    }

    //um método estátistico
    static latir() {
        console.log('Au au au!')
    }
}

const meuDog = new Dog('Luke')
meuDog.introduzir()
Dog.latir()