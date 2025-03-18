// Operadores Lógicos: &&, ||, !
// && = AND: Todas as expressões precisam ser verdadeiras para retornar true, caso contrário retorna false
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && false); // false
// || = OR: Apenas uma expressão precisa ser verdadeira para retornar true, caso contrário retorna false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// ! = NOT: Inverte o valor da expressão, se for true vira false e se for false vira true
console.log(!false); // true
console.log(!true); // false


// Um exemplo de uso &&:
const temperatura = 26
const tempo = 'ensolarado'
if (temperatura >= 25 && tempo === 'ensolarado') {
    console.log('Vou ao parque')
} else {
    console.log('Vou ao cinema')
}


// Um exemplo de uso ||:
const nome = 'João'
const idade = 18
if (nome === 'João' || idade >= 18) {
    console.log('Você é maior de idade')
} else {
    console.log('Você é menor de idade')
}

// Um exemplo de uso !:
const numero = 10
if (numero !== 10) {
    console.log('O número é diferente de 10')
} else {
    console.log('O número é igual a 10')
}