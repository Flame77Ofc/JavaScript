const pessoa = new Promise((resolve, reject) => {
    let soma = 1 + 2
    if (soma == 3) {
        resolve('Deu Certo')
    } else {
        reject('Deu Errado')
    }
})
console.log(pessoa)