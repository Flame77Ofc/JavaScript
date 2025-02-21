//Inheritance
class Animal {
    alive = true

    eat() {
        console.log(`This ${this.name} is eating`)
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}
class Rabbit extends Animal {
    name = 'Rabbit'
}
class Fish extends Animal {
    name = 'Fish'
}
class Cat extends Animal {
    name = 'Cat'
}

const rabbit = new Rabbit()
const fish = new Fish()
const cat = new Cat()
console.log(rabbit.alive)
rabbit.eat()