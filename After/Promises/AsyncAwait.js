// Async/Await = Async = faz uma função retornar uma promessa
//                            Await = faz uma função assíncrona esperar por uma promessa

function passearComOCachorro() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Você passeou com o cachorro 🐕"), 1500);
    });
}

function limparCozinha() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Você limpou a cozinha 🧹"), 2500);
    });
}

function tirarLixo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Você tirou o lixo ♻"), 500);
    });
}

async function fazerTarefas() {
    try {
        console.log(await passearComOCachorro());
        console.log(await limparCozinha());
        console.log(await tirarLixo());
        console.log("Você terminou todas as tarefas!");
    } catch (erro) {
        console.error(erro);
    }
}

fazerTarefas();