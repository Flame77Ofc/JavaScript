//Estruturas de Repetição
// console.log('Vez')
// console.log('Vez')
// console.log('Vez')
// console.log('Vez')
// console.log('Vez')


let contador = 0
while (contador < 3) {
    console.log('teste')
    contador++
}

let a = 0
while (a < 2) {
    console.log('Teste')
    a++
}

const nomes = ['Paulo', 'João', 'Arthur']

for (const nome of nomes) {
    console.log(nome)
}

//For: implementa a variavel, a operação lógica, e o incremento do valor da variável(a++) dentro da condição for.
for (let a = 1;a <= 3;a++) {
    console.log(a)
}

//while: precisa declarar a variavel fora da condição while, dentro da condição é colocado a operação lógica, e entre chaves é colocado o incremento do valor da variável (a2++)
let a2 = 1
while(a2 <= 3) {
    console.log(a2)
    a2++
}