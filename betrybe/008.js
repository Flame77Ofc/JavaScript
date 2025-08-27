let cores = ["Azul", "Vermelho", "Roxo", "Amarelo", "Verde"]
console.log(cores)

let tamanhoCores = cores.length
console.log(tamanhoCores)

cores.push("Laranja")
cores.push("Bege")
cores.push("Branco")
console.log(cores)

// lista.shift() -> Remove o primeiro elemento de um array
cores.shift()
console.log(cores)

// lista.unshift("Elemento") -> Adiciona um elemento no primeiro índice
cores.unshift("Preto")
console.log(cores)

// lista.slice(start, end) -> Fatia elementos do início até o fim.
console.log(cores.slice(0, 3))


let flores = ["Rosa", "Verde", "Amarelo", "Lilás", "Violeta", "Azul"]
flores.unshift("Branca")
console.log(flores)
