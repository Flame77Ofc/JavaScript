const Pessoa1 = {
    firstName: 'Gabriel',
    lastName: 'Goulart',
    age: 30,
    sayHello: function() {
        console.log(`Olá, meu nome é ${this.firstName} ${this.lastName}`)
    }
}
Pessoa1.sayHello()

class Pessoa2 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    nomeSobrenomeIdade() {
        console.log(`Olá, meu nome é ${this.firstName} ${this.lastName} e tenho ${this.age} anos`)
    }
}
const ID2 = new Pessoa2('Gabriel', 'Goulart', 14)
console.log(ID2)