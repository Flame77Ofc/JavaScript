const nome = 'Gabriel'
//.toUpperCase
console.log(nome.toUpperCase()) //GABRIEL
//.toLowerCase
console.log(nome.toLowerCase()) //gabriel


let a = 'Hello little world, how are you?'
console.log(a.split('e')) // cortará todos os 'e's da frase.


let list = ['Number1', 'Number2', 'Number3']
list.push('Number4') //Adiciona um valor
list.pop() //remove um valor
console.log(list)

console.clear()

const person = {
    name: 'Juan',
    age: '23',
    hobbies: ['music', 'paint', 'sports', 'reading']
}
console.log(person)

for (let cont = 1; cont <= 10; cont++) {
    console.log(cont)
}