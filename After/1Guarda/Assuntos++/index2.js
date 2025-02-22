//Truthy and Falsy Values
//Falsy are all those values ​​that, within an if condition, act as if they were false.
/*
false, 0, '', NaN, undefined, null
*/

if (0) {
    console.log('truthy')
}

//Truthy, conversely, are all those values ​​that, within an if condition, act as if they were true.
//here is an example:
//it i'll compares if cartQuantity is > 0, but you don't definity this, so this is a truthy value.
//It is a shortcut to the code
const cartQuantity = 5

if (cartQuantity) {
    console.log('cart has products')
}



//Ternary Operator
//Ternary operator substitues an if else.
const result = true ? 'truthy' : 'falsy'

// if (true) {
//     console.log('truthy')
// } else {
//     console.log('falsy')
// }