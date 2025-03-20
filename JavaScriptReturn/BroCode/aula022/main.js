// Arrays: são listas que permitem armazenar mais de uma informação em uma variável. É possível utilizar múltiplos tipos de dados num array.
let fruta = 'maçã'
console.log(fruta)


let frutas = ['maçã', 'morango', 'banana', 'abacaxi', 'uva']
console.log(frutas)

// Manipulando Arrays
// Acessando um elemento do array pelo seu índice (começa do 0)
console.log(frutas[0])

// Adicionando um elemento no final da lista
frutas.push('mamão')
console.log(frutas)

// Adicionando um elemento no início da lista
frutas.unshift('abóbora')
console.log(frutas)

// Removendo o último elemento da lista
frutas.pop()
console.log(frutas)

// Remove o primeiro elemento da lista
frutas.shift
console.log(frutas)

// Retorna quantos elementos tem na lista
console.log(frutas.length)

// Acessando o índice pelo nome do elemento (se o elemento não existir, retorna -1)
console.log(frutas.indexOf('morango'))

// Iterando sobre uma lista com o loop for: Exibindo cada elemento individualmente
for (let fruta of frutas) {
    console.log(fruta)
}

// Acessando os índices de um array
for (let index in frutas) {
    console.log(index)
}


// Ordenando a lista em ordem alfábetica crescente ou númerica crescente
console.log(frutas.sort())

// Ordenando a lista em ordem alfábetica decrescente ou númerica decrescente
console.log(frutas.sort().reverse())