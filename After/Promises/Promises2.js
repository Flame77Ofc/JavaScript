// Promessa = Um objeto que gerencia operações assíncronas.
//                    Envolva um objeto Promise em torno de {código assíncrono}
//                    "Eu prometo retornar um valor"
//                    PENDENTE -> RESOLVIDO ou REJEITADO
//                   new Promise((resolve, reject) => {código assíncrono})

// FAÇA ESSAS TAREFAS EM ORDEM

// 1. PASSEAR COM O CACHORRO
// 2. LIMPAR A COZINHA
// 3. LEVAR O LIXO PARA FORA

function passearComOCachorro() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cachorroPasseado = false;
            cachorroPasseado ? resolve("Você passeou com o cachorro 🐕") : reject("Você NÃO passeou com o cachorro");
        }, 1500);
    });
}

function limparCozinha() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cozinhaLimpa = true;
            cozinhaLimpa ? resolve("Você limpou a cozinha 🧹") : reject("Você NÃO limpou a cozinha");
        }, 2500);
    });
}

function levarLixoParaFora() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lixoLevadoParaFora = true;
            lixoLevadoParaFora ? resolve("Você levou o lixo para fora ♻") : reject("Você NÃO levou o lixo para fora");
        }, 500);
    });
}

passearComOCachorro()
    .then(valor => { console.log(valor); return limparCozinha(); })
    .then(valor => { console.log(valor); return levarLixoParaFora(); })
    .then(valor => { console.log(valor); console.log("Você terminou todas as tarefas!"); })
    .catch(erro => console.error(erro));