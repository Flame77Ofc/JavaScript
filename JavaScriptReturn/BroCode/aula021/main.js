// Escopo de Variável: É o local aonde uma variável é armazenada. Se não estiver no lugar certo, pode gerar erros.
// Escopo Local: Qualquer variável declarada dentro de uma função tem um escopo local
// Escopo global: Qualquer variável declarada fora de uma função é um escopo global

// 001: Jeitos certo
// function function1() {
//     let x = 1
//     console.log(x)
// }
// function function2() {
//     let x = 2
//     console.log(x)
// }
// function1()
// function2()
// 001: Jeito errado
/*
function function1() {
    let x = 1
    console.log(y)
}
function function2() {
    let y = 2
    console.log(x)
}
function1()
function2()
*/
// 002: Jeito certo
// let a = 4
// function test() {
//     console.log(a)
// }    
// test()

// 002: Jeito errado
let a = 4
function function3() {
    let a = 1
    console.log(a)
}
// Será exibido: 1