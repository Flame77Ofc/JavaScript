//Normal function
function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(9, 4))



//Arrow Function
const soma2 = (numero1, numero2) => {
    return numero1 + numero2
}
console.log(soma2(2, 7))



//Função sem argumento:
const sayHello = () => {
    console.log('Hello')
}
sayHello()




//Com apenas um argumento:
const VerifPeso = (peso) => {
    console.log(`peso: ${peso}`)
}
VerifPeso(65)



//Funções de Expressões
const dog = function () {
    return 'Au Au Au!'
}




//Função de paramêtro
function dizerOi(nome) {
    return `Olá, ${nome}`
}
console.log(dizerOi('Gabriel'))