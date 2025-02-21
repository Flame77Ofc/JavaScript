//Callback: uma função passada como um argumento para outra função
let total = sum(3, 6)
mostrarConsole(total)

function sum(x, y) {
    let result = x + y
    return result
}
function mostrarConsole(saida) {
    console.log('saída')
}