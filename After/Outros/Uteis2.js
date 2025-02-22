//Operadores
const a = 1
const b = 2
//aritméticos (+, -, *, /)
a + b //3
a - b //-1
a * b //2
a / b //0.5

//concatenação 
let nome = 'Gabriel'
console.log('Meu nome é ' + nome)

//comparação
a > b //false
a >= b //false
a < b //true
a <= b //true
a == b //false
a != b //true

//Operador Ternário
let verify = a > b || a < b ? console.log(true) : console.log(false)

//Operador Lógico
if (a > b || a < b) {
    console.log(true)
} else {
    console.log(false)
}