//Funções reduzem o código.
function receita() {
    console.log('Passo 1')
    console.log('Passo 2')
    console.log('Passo 3')
    console.log('Passo 4')
    console.log('Passo 5')
}

function rotina() {
    console.log('Passo1.1')
    console.log('Passo1.2')
    console.log('Passo1.3')
    console.log('Passo1.4')
}
receita()

function soma() {
    let a = 25
    let b = 43
    let c = 32
    let soma = (a + b) * c
}

soma()

function soma2(A, B) {
    let soma2 = A + B 
} 
//Observe que nenhum valor para A e B foi declarado, diferente do exemplo de soma. Então, teremos que declarar isso chamando a própria função, mas agora teremos que colocar os valores de A e B.

soma2(23, 56)



function liquidificador (igredientes) {
    console.log(`Estou misturando ${igredientes}`)
}
liquidificador('banana')