// && (and), || (or), !(boolean) (not)
let chuva = true
let temperatura = 18.5

if (chuva && temperatura < 20) {
    console.log("Chuva e Frio")
}


let idade = 25
let carteira = false

if (idade >= 18 && carteira) {
    console.log("Pode Dirigir")
}


function verifica_velocidade(velocidade) {
    if (velocidade >= 150) {
        console.log("Multa de R$350")
    } else if (velocidade >= 100) {
        console.log("Multa de R$75")
    } else {
        console.log("Parabéns!")
    }
}

verifica_velocidade(150)
verifica_velocidade(115)
verifica_velocidade(95)
verifica_velocidade(45)


let saldo = 125000
let valorCasa = 450000

if (saldo >= valorCasa) {
    console.log("É possível realizar o pagamento")
} else {
    console.log("Saldo Insuficiente")
}


let batatas = 12
if (batatas > 10) {
    console.log("É possível cozinhar")
} else {
    console.log("Ir ao mercado comprar batatas")
}


let temperaturaPanela = 75
if (temperaturaPanela < 100) {
    console.log("A água não pode ebulir")
} else {
    console.log("A água está ebulindo")
}


let planeta = "Terra"
let populacao = 8_450_325_000
if (planeta === "Terra" && populacao >= 1_000_000_000) {
    console.log("Bem-vindo à Terra!")
} else {
    console.log("Planeta desconhecido chamado Terra")
}


let objetos = 250
let armarios = 4
let espaco = objetos / armarios

if (espaco >= 50) {
    console.log("O espaço é suficiente")
} else {
    console.log("O espaço é insuficiente")
}


let animalDeEstimacao = true
animalDeEstimacao = !(animalDeEstimacao)

if (animalDeEstimacao) {
    console.log("Tem animal de estimação")
} else {
    console.log("Não tem animal de estimação")
}


let dinheiro = 125
let fome = true

if (dinheiro >= 12 && fome) {
    console.log("É possível comprar comida")
} else {
    console.log("É possível comprar comida")
}

function verificar_cidade_desenvolvida(cidade, farmacias, mercados, shoppings, cabeleireiros) {
    let estabelecimentos = farmacias + mercados + shoppings + cabeleireiros
    console.log(`A cidade ${cidade} possui ${estabelecimentos} estabelecimentos.`)

    if (estabelecimentos >= 250) {
        console.log("Cidade Altamente Desenvolvida")
    } else if (estabelecimentos >= 175) {
        console.log("Cidade Moderadamente Desenvolvida")
    } else if (estabelecimentos >= 100) {
        console.log("Cidade Desenvolvida")
    } else if (estabelecimentos >= 50) {
        console.log("Cidade Fracamente Desenvolvida")
    } else {
        console.log("Cidade não Desenvolvida")
    }
}

verificar_cidade_desenvolvida("Itapicuru", 25, 18, 5, 7)
verificar_cidade_desenvolvida("Balneário Camburiú", 87, 34, 12, 14)
verificar_cidade_desenvolvida("São Paulo", 56, 14, 35, 7)
