let nomeCachorro = "BullDog"
console.log(nomeCachorro == "BullDog")  // true

let numeroString = "5"
let numeroReal = 5

console.log(numeroReal == numeroString)  // true
console.log(numeroReal === numeroString)  // false

// == compara apenas o valor; === compara o VALOR e o TIPO (string != number)

console.log(5 == 11)  // false
console.log(12 == 12)  // true

console.log(5 != 5)  // false
console.log(7 != 2)  // true

console.log(5 > 12)  // false
console.log(25 > 8)  // true

console.log(12 < 4)  // false
console.log(3 < 5)  // true

console.log(12 >= 12)  // true
console.log(80 >= 45)  // true

console.log(12 <= 45)  // true
console.log(93 <= 25)  // false

console.log(12 !== 5)  // true
console.log(25 != 90)  // true
