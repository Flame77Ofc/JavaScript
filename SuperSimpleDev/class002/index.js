const name = 'Gabriel'
console.log(name + 3) //Gabriel3

const number = '10'
console.log(Number(number) + 5) //15


//How to do: '$' 20.95 + 7.99
console.log('$' + 20.95 + 7.99) //Incorrect: $20.957.99
console.log('$' + (20.95 + 7.99)) //Half correct: $28.939999999999998
console.log('$' + (2095 + 799) / 100) //100% Correct: $28.94

//The \n command
console.log('some\ntext')

//Ways to create a string:
//Both 3 has the same result.
console.log("Hello, world")
console.log('Hello, world')
console.log(`Hello, world`) //This one is most used to create interpolations: See an example:
console.log(`Hello, ${name}`)