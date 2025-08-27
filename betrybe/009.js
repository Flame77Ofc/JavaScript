// for loop
let brinquedos = ["Boneca", "Carrinho", "Caminhão", "Casa", "Controle"]
for (let brinquedo in brinquedos) {  // for in -> percorre o índice
    console.log(brinquedo)  // 0, 1, 2, 3, 4
}
for (let brinquedo of brinquedos) { // for of -> percorre cada elemento
    console.log(brinquedo)  // Boneca, Carrinho, Caminhão, Casa, Controle
}

for (let index = 1;index != 10;index++) { // for normal (contador) -> Apenas conta
    console.log(index)
}


let animais = ["Gato", "Cobra", "Pássaro", "Leão", "Tigre", "Elefante", "Macaco", "Cachorro", "Cavalo"]
for (let animal of animais) {
    if (animal === "Gato" || animal === "Cachorro") {
        console.log(`Que fofinho! Quero adotar um ${animal}!`)
    }
}


let sucos = ["Laranja", "Maçã com Limão", "Limão com Laranja", "Abacaxi", "Pera", "Goiaba"]
for (let suco of sucos) {
    if (suco[0] < "K") {
        console.log(`Hummm! Suco de ${suco} é delicioso!`)
    } else {
        console.log(`Eca! Não gosto de suco de ${suco}!`)
    }
}


let idades = [15, 67, 23, 56, 15, 34, 96, 45, 32, 26, 79, 13, 65, 34, 54, 18, 24]
let idadesProibidas = []
let idadesPermitidas = []

for (let idade of idades) {
    if (idade >= 18 && idade <= 60) {
        idadesPermitidas.push(idade)
        console.log(`É possível entrar. Idade: ${idade}`)
    } else {
        idadesProibidas.push(idade)
        console.log(`Você tem ${idade} anos. Só é possível entrar com as idade entre 18 a 60.`)
    }
}

console.log(`Lista de Idades permitidas: ${idadesPermitidas}`)
console.log(`Lista de Idades proibidas: ${idadesProibidas}`)

