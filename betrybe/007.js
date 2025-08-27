// Arrays / Listas
let lista = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5", "Elemento 6"]
console.log(lista)


let frutas = ["Maçã", "Abacaxi", "Melancia", "Morango", "Uva", "Banana", "Laranja", "Mamão"]
console.log(frutas)
console.log(frutas[0])  // Laranja
console.log(frutas[7])  // Mamão


let alimentos = ["Arroz", "Feijão", "Macarrão", "Carne"]

// lista.push("Elemento") -> Adiciona um elemento ao final da lista
alimentos.push("Peixe")
alimentos.push("Frango")
alimentos.push("Leite")

// lista.pop() -> Remove o último elemento da lista
alimentos.pop()
alimentos.pop()

// Substituir elementos
alimentos[3] = "Ovo"  // Carne -> Ovo

// Tamanho da lista
console.log(alimentos.length)  // 5

// Retornando o último elemento da lista
let tamanho = alimentos.length
console.log(alimentos[tamanho - 1])  // Peixe (É o último elemento da lista)
