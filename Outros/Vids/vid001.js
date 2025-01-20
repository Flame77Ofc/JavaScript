// ^ Variáveis
// Tipos de variáveis: Number, String, Boolean

let idade = 14 // Number: Apresenta números
let nome = "Gabriel" // String: Apresenta letras, "" Obrigatóriamente deve ser utilizado
let log = true // Boolean: Apresenta se é verdadeiro ou falso


    // ~ Arrays e Objetos
// Muitas Variáveis: Jeito demorado (muitos itens)
/* let ingrediente1 = "agua"
let ingrediente2 = "arroz"
let ingrediente3 = "massa" */

// pode se transformar assim:
let ingredientes = ["agua", "arroz", "massa"]
console.log (ingredientes[0])

let personagem = {
    nome: "Flame", 
    idade: 20,
    forca: 778-1,
    vida: 323-54,
    nivel: 231-43
    }
console.log (personagem.nome, personagem.idade, personagem.forca, personagem.vida, personagem.nivel)


//! Funções : Input, Processo, Output
function somar(a, b) {
    let resultado = a * b;
    return resultado
}

let numeros = somar(500, 12)