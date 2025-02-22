let numbers = [1,2,3,4,5]
numbers.forEach(function(number) {
    console.log(number)
})

const palavras = ["Olá", "Mundo", "JavaScript"];

palavras.forEach(function(palavra) {
    console.log(palavra);
})

const texto = "Olá";
let indice = 0; // Inicializa o índice

while (indice < texto.length) { // Enquanto o índice for menor que o comprimento da string
    const caractere = texto[indice]; // Acessa o caractere atual
    console.log(caractere); // Executa a ação desejada
    indice++; // Incrementa o índice para o próximo caractere
}

//Quando o JavaScript encontrar a letra 's', ele pará de mostrar no console.
// const texto2 = "JavaScript";
// let indice2 = 0;

// while (indice2 < texto2.length) {
//     const caractere = texto2[indice2];
//     console.log(caractere);

//     if (caractere === "S") { // Condição para parar o loop
//         break;
//     }

//     indice2++;
// }