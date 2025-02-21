//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar números de strings.
function maiorOuIgual(a, b) {
    // Verifica se ambos os argumentos são números
    if (typeof a === 'number' && typeof b === 'number') {
        return a >= b
    } else {
        return false
    }
}

// Exemplos de uso:
console.log(maiorOuIgual(0, 0))