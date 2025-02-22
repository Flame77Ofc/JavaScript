//Static - Importante método
class Car {
    static numeroCarros = 0
    constructor(modelo) {
        this.modelo = modelo
        Car.numeroCarros++
    }
}

const car1 = new Car("Buggati")
const car2 = new Car("Camaro")
const car3 = new Car("Mustang")
const car4 = new Car("BMW")
console.log(Car.numeroCarros)