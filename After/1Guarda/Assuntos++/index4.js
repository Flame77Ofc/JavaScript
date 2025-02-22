//Object
//An object groups multiple values together
const product = {
    name: 'socks',
    price: 2.5
}
console.log(product)
console.log(product.name)
console.log(product.price + '$')


product.name = 'cotton socks'
console.log(product)

const product2 = {
    name: 'shirt',
    rating: {
        stars: 67
    },
    fun: function function1() {
        console.log('function inside the object')
    }
}
console.log(product2)
console.log(product2.name)
console.log(product2.rating.stars)

console.log(product2.fun())

console.clear()
//Using the JSON
console.log(JSON.stringify(product2))

//Converting the JSON to the JavaScript file again
const JSONString = JSON.stringify(product2)
console.log(JSON.parse(JSONString)) //Result