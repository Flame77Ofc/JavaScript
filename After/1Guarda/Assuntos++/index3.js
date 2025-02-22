//&& - AND Operator
// The && operator will only compare a value that is false. If only one is false and the rest are true, it will be false anyway. To be true, all values ​​must be true.

var HaveDog = true
var HaveiPhone = false
var online = false
var light = true

console.log(HaveiPhone && online) //false - Two values false and zero true
console.log(HaveDog && HaveiPhone) //false - One value false and one true
console.log(light && HaveiPhone) //false - One value false aod one true
console.log(HaveDog && light) // true - Two values true and zero false




//||
//Already in the operator || it only needs a true value for the result to be true. if one is true and the other is false, then the result is true. To be false, all values ​​must be false.

var HaveDog = true
var HaveiPhone = false
var online = false
var light = true

console.log(HaveiPhone && online) //false - Two values false and zero true
console.log(HaveDog && HaveiPhone) //true - One value true and one false
console.log(light && HaveiPhone) //true - One value true aod one false
console.log(HaveDog && light) // true - Two values true and zero false

console.clear()
//!
//Negation is always used when you want to deny something. If something is true and you use negation, then it will become false.
console.log(!true) //false
console.log(!false) //true