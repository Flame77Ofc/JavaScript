//Constructor - Um método especial da classe
class Student {
    constructor(name, age, gpa) {
        this.name = name
        this.age = age
        this.gpa = gpa
    }
    study() {
        console.log(`${this.name} is studying`)
    }
}
const student1 = new Student('Gabriel', 14, 758493)
const student2 = new Student('Tiago', 15, 658393)
console.log(student2.name)
student1.study()