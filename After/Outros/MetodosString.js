//String methods
let username = 'Flame'

console.log(username.charAt(3))//m
console.log(username.indexOf('m'))//3
console.log(username.lastIndexOf('m'))//3
console.log(username.length) //5
console.log(username.toUpperCase())//FLAME
console.log(username.toLowerCase())//flame
console.log(username.repeat(3))//FlameFlameFlame


const phone = '123-456-789-0-1-2-3-4-5-6-7-8-9-0'
console.log(phone.replaceAll('-', 'TEST'))