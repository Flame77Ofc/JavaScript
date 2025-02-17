//If, else.
let a = 7
let b = 8
let c = 6
let soma = (a + b + c) / 3


if (soma > 6) {
    console.log(`Passou com ${soma}`)
} else if (soma > 5) {
    console.log(`Recuperação com ${soma}`)
} else {
    console.log(`Reprovou com ${soma}`)
}


let frutas = ['Banana', 'Maçã', 'Pera', 'Uva']

if (frutas.includes("Abacaxi")) {
    console.log('Tem abacaxi')
} else {
    console.log('Não tem abacaxi')
}