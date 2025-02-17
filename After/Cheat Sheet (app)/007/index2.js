//Função de Executador
const executadorFn = (resolve, reject) => {
    resolve('resolvido')
}
const promise = new Promise(executadorFn)