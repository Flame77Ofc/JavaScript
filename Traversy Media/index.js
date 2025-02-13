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


const person = {
    name: 'Juan',
    age: '23',
    hobbies: ['music', 'paint', 'sports', 'reading']
}
console.log(person)

for (let cont = 1; cont <= 10; cont++) {
    console.log(cont)
}



let age = 9
if (age >= 18) {
    console.log('Adult')
} else if (age >= 15) {
    console.log('Teen')
} else if (age >= 4) {
    console.log('Kid')
} else {
    console.log('Baby')
}




let color = 'blue'
let verify = color == 'blue' ? 'true' : 'false'
console.log(verify) //true




const x = 9
const color2 = x > 10 ? 'red' :'blue'

console.clear()

switch(color) {
    case 'red':
        console.log('red')
    break
    case 'blue':
        console.log('blue')
    break
    default: 
    console.log('Not red or blue')
    break
}