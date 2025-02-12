let listaCompras = []
let listaFrutas = ['Maçã', 'Banana', 'Kiwi', 'Ameixa', 'Abacaxi']

listaCompras.push('Coxinha')
listaCompras.push('Banana')
listaCompras.push('Kiwi')
listaCompras.push('Pão')

let numeroFrutas = 0

listaCompras.map(elemento => {
    if(listaFrutas.includes(elemento)) {
        numeroFrutas += 1
    }
})

if (numeroFrutas >= 3) {
    console.log('3 ou mais frutas')
} else {
    console.log('precisa de mais frutas')
}