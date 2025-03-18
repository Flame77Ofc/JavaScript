// Função: Uma estrutura de código para reutilizar mais tarde. Apenas chame a função pelo nome. Se houver parâmetros, chame o nome da função e entre parentêses coloque os determinados parâmetros. Se não, coloque apenas o nome da função + parentêses
function aniversario(dia, mes, ano) {
    console.log(ano, mes, dia)
    return 'O dia é ' + dia + ', o mês é ' + mes + ', o ano é ' + ano
}
console.log(aniversario(21, 4, 1998))



function ola() {
    console.log('Olá!')
}
ola()


function felizAniversario() {
    console.log('Parabéns pra você')
    console.log('Nessa data querida')
}
felizAniversario()



function soma(x, y) {
    let resultado = x + y
    return resultado
}
console.log(soma(6, 7))


function par(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}


function impar(number) {
    if (number % 2 !== 0) {
        return true
    } else {
        return false
    }
}

console.log(par(10))
console.log(impar(9))