//Formatar um número com uma quantidade específica de casas decimais
const num1 = 123.456789;
console.log(num1.toFixed(2)); // Isso vai imprimir "123.46"



//Formatar valores com as configurações regionais
const num2 = 1234567.89;
// Formatação para o Brasil (pt-BR)
console.log(num2.toLocaleString('pt-BR')); // "1.234.567,89"
// Formatação para os Estados Unidos (en-US)
console.log(num2.toLocaleString('en-US')); // "1,234,567.89"


//converter um valor em uma string
const num3 = 42;
console.log(num3.toString); // "42"