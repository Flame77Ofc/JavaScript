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