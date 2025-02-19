const arrowFunction = (param, param2) => {
    console.log('Arrow Function')
    return 5
}

const regularFunction = function(param, param2) {
    console.log('Regular Function')
    return 5
}

const UmParametro = param => {
    console.log(`Função de apenas um paramêtro ${param + 1}`)
}

// const umaLinha = () {
//     return 2**4
// }
const umaLinha = () => 2**4


arrowFunction()
regularFunction()
UmParametro(4)
console.log(umaLinha())