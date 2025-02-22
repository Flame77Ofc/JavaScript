//Boolean -> true ou false
var isEnabled = true
var teste = 'Pedro'

console.log(isEnabled)

//Array
let names = ['Gabriel', 'Pedro', 'João', 'Maria']
console.log(names[3]) //Maria

var teams = new Array()
teams.push('Brasil')
console.log(teams.length)

console.clear()
//Condicional
function testName(name) {
    if (name.length > 10) {
        console.log('Nome grande')
    } else {
        console.log('Nome pequeno')
    }
    return name.length
}

console.log(testName('Gabriel'))





// let nomes = ['Gabriel', 'Pedro', 'João', 'Maria']
// nomes.map(nomes => {
//     console.log(nomes)
// })