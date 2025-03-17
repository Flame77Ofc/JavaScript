// Conversão de tipo = mudar o valor de um tipo para outro (string, número, booleano)
// Exemplo com erro: concatenando um número com uma string
let age = prompt('How old are you?');
age += 1;  // Isso vai concatenar a string com o número
console.log(age); // Resultado será uma string

// Solução usando conversão de tipo para número
let age2 = parseFloat(prompt('How old are you?'));
age2 += 1;
console.log(age2); // Agora é um número e a soma acontece corretamente

// Conversão direta
let x = Number(x)
let y = String(y)
let z = Boolean(z)

console.log(x, typeof(x));
console.log(y, typeof(y));
console.log(z, typeof(z));

// Conversões de tipos de dados
// String para Número
var str = '45';
var num = Number(str);  // Converte a string '45' para o número 45
console.log(num); 
w
// Número para String
var num2 = 42;
var str2 = String(num2);  // Converte o número 42 para a string "42"
console.log(str2);

// Booleano para Número
var bool = true;
var num3 = Number(bool);  // Converte o booleano true para o número 1
console.log(num3); 

// Número para Booleano
let num4 = 0;
let bool4 = Boolean(num4);  // 0 é considerado false
console.log(bool4); // false

// String para Booleano
let bool1 = Boolean("");  // false
let bool2 = Boolean("Hello"); // true (qualquer string não vazia é true)
console.log(bool1, bool2);

// Operações com tipos diferentes
// String + Número = String (concatenação)
console.log("42" + 8); // "428" (concatenação)
console.log(8 + "42"); // "842" (concatenação)

// String - Número = Número (conversão)
console.log("42" - 8); // 34
console.log("42" * 2); // 84
console.log("42" / 2); // 21

// Diferença entre Number, parseFloat e parseInt
// Number: converte diretamente para número, retornando NaN se a string for inválida
console.log(Number("42"));     // 42
console.log(Number("42.5"));   // 42.5
console.log(Number("42abc"));  // NaN

// parseInt: converte para número inteiro, descarta a parte decimal
console.log(parseInt("42"));      // 42
console.log(parseInt("42.9"));    // 42
console.log(parseInt("42abc"));   // 42
console.log(parseInt("abc42"));   // NaN
console.log(parseInt("0010"));    // 10

// parseFloat: converte para número decimal, mantendo a parte decimal
console.log(parseFloat("42.5"));    // 42.5
console.log(parseFloat("42.99abc"));// 42.99
console.log(parseFloat("42"));      // 42
console.log(parseFloat("abc42"));   // NaN