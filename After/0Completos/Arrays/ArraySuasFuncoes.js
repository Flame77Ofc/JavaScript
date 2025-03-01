//Arrays: push(), unshift(), pop(), shift()
const frutas = ['banana', 'kiwi', 'melancia']

//Adicionar novo elemento no último indíce:
console.log(frutas.push('uva')) // ['banana', 'kiwi', 'melancia', 'uva']

//Adicionar novo elemento no primeiro indíce:
console.log(frutas.unshift('abóbora')) // ['abóbora', 'banana', 'kiwi', 'melancia', 'uva']

//Remover o último elemento:
console.log(frutas.pop()) // ['abóbora', 'banana', 'kiwi', 'melancia']

//Remover o primeiro elemento:
console.log(frutas.shift()) // ['banana', 'kiwi', 'melancia']


//Concatenar listas
const frutas2 = ['maca', 'banana', 'morango', 'abacaxi']
const berries = ['strawberry', 'blueberry', 'rasberry']

let x = frutas2.concat(berries)
console.log(x)

//Reverse Array
const array = [34, 55, 95, 20, 15]
array.reverse() //15, 20, 95, 55, 34
console.log(array)