class Animal {
    constructor(name, age) {
        this.name = name        
        this.age = age        
    }

    move(speed) {
        console.log(`The ${this.name} moves at speed of ${speed}km/h`)
    }

}
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age)
        this.runSpeed = runSpeed        
    }

    run() {
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
    }


}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age)
        this.swimSpeed = swimSpeed          
    }

    swim() {
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }

}
const rabbit = new Rabbit('Jorge', 6, 20)
const fish = new Fish('Rex', 2, 120)

console.log(rabbit.name, rabbit.age, rabbit.runSpeed)
console.log(fish.name, fish.age, fish.swimSpeed)

rabbit.run()
fish.swim()