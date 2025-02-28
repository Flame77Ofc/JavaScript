//Arrays: push(), unshift(), pop(), shift()

const frutas = ['banana', 'kiwi', 'melancia']
//Adicionar novo elemento no último indíce:
console.log(frutas.push('uva')) //agora uva foi adicionado no último indíce. 
// ['banana', 'kiwi', 'melancia', 'uva']

//Adicionar novo elemento no primeiro indíce:
console.log(frutas.unshift('abóbora')) //agora abóbora foi adicionado no primeiro indíce. 
// ['abóbora', 'banana', 'kiwi', 'melancia', 'uva']

//Remover o último elemento:
console.log(frutas.pop()) //agora uva foi removido do último indíce.
// ['abóbora', 'banana', 'kiwi', 'melancia']

//Remover o primeiro elemento:
console.log(frutas.shift()) //agora abóbora foi removido do primeiro indíce.
// ['banana', 'kiwi', 'melancia']
console.log(frutas)

//Concatenar
const frutas2 = ['maca', 'banana', 'morango', 'abacaxi']
const berries = ['strawberry', 'blueberry', 'rasberry']

let x = frutas2.concat(berries)
console.log(x)

//Reverse Array
const array = [34, 55, 95, 20, 15]

array.reverse() //Todo o array irá ter o indíce reverso: 15, 20, 95, 55, 34
console.log(array)