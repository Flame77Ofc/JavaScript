// Código Síncrono vs. Código Assíncrono  
// Código Síncrono  
//O código síncrono é executado de forma sequencial, linha por linha. Cada instrução deve ser concluída antes que a próxima seja executada. Isso significa que, se uma operação demorar muito, ela bloqueará a execução do restante do código.  
console.log("Início");
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log("Fim");
// Início
// 0
// 1
// 2
// Fim
//Neste caso, todas as instruções são executadas de forma ordenada e bloqueiam a execução até serem concluídas.  


// Código Assíncrono  
// O código assíncrono permite que certas operações, como requisições de rede ou leituras de arquivos, sejam executadas sem bloquear o fluxo principal do programa. Isso melhora o desempenho em tarefas demoradas.  
console.log("Início");
setTimeout(() => {
    console.log("Executado depois de 2 segundos");
}, 2000);
console.log("Fim");
// Início
// Fim
// Executado depois de 2 segundos

// Aqui, `setTimeout` agenda a execução da função após 2 segundos, mas o restante do código continua sendo executado sem esperar.  