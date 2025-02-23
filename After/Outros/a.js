//String Methods
let username = 'GABRIEL'
console.log(username.charAt(0)) //G
console.log(username.toLocaleLowerCase().indexOf('e')) //5
console.log(username.length) //7
console.log(username.repeat(3)) //GABRIELGABRIELGABRIEL

let phoneNumber = "123-456-789-012"
phoneNumber = phoneNumber.replaceAll('-', '.')
console.log(phoneNumber)

let fullName = 'Gabriel Goulart'
let firstName = fullName.slice(0, 7)
let lastName = fullName.slice(8, 15)
console.log(firstName, lastName)