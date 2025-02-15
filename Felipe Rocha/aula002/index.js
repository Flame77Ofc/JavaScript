const recebimento = 2800
const fatura = 650
const energia = 250
const lista = {
    mercado: ['maca', 'banana', 'alface', 'macarrão', 'guaraná', 'arroz'],
    despesa: [recebimento - fatura - energia]
}

console.log(`recebimento: ${recebimento.toLocaleString('pt-BR')}\nfatura: ${fatura.toLocaleString('pt-BR')}\nenergia: ${energia.toLocaleString('pt-BR')}`)
console.log(lista.despesa)


console.clear()
//converter para JSON
const converterJSON = JSON.stringify(lista)
console.log(converterJSON)