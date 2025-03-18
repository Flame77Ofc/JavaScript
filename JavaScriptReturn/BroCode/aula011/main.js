/* Operador Ternário
É uma simplificação para o if, else
Sintaxe
condição ? true : false */


// Ternário
let nome = 'Gabriel'
nome == 'Gabriel' ? console.log('Olá, Gabriel') : console.log('Olá, desconhecido')
// If, else
if (nome == 'Gabriel') {
    console.log('Olá, Gabriel')
} else {
    console.log('Olá, desconhecido')
}

// Ternário
let age = 17
console.log(age > 18 ? 'Maior de idade' : 'Menor de idade')
// If, else
if (age > 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}

// Outra forma
let car = true
car = true ? 'Você tem um carro!' : 'Você não tem um carro'
console.log(car)


let time = 16
let greeting = time < 12 ? 'Good Morning' : 'Good Afternoon'
console.log(greeting)


let isStudent = true
let message = isStudent ? 'Você é um estudante' : 'Você não é um estudante'
console.log(message)

let purchaseAmount = 125
let discount = purchaseAmount >= 100 ? 10 : 0
console.log(`Desconto: ${discount}%`)