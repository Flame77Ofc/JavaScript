// Spread Operator (Operator de Propagação) = ... permite que um iterável, como um array ou uma string seja expandido elementos separados (descompactar os elementos)
let numbers = [1, 2, 3, 4, 5]
// let max = Math.max(numbers) // Erro: NaN
let max = Math.max(...numbers) // Utilizando o Operator de Propagação: retorna 5
let min = Math.min(...numbers)

console.log(min, max)


// Spread Operator com strings
let username = 'Flame'
let letras = [...username].join('-')

console.log(letras)


// O Operador de Propagação também serve para juntar/concatenar strings!
let frutas = ['maça', 'banana', 'uva']
let vegetais = ['cenoura', 'pepino']
let comidas = [...frutas, ...vegetais, 'ovos']

console.log(comidas)