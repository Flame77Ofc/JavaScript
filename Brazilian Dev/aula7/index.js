//Callbacks em JavaScript são funções que são passadas como argumentos para outras funções.
//Este código espera 5 segundos e imprime "Done!" quando os 5 segundos acabam.
const callback = function() {
    console.log("Done!");
}
setTimeout(callback, 5000);

//Também é possível definir retornos de chamada como funções anônimas, assim:
setTimeout(function() {
    console.log("Done!");
}, 5000);   