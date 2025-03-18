// Metodo de encadeamento de strings: Uma sequência de métodos que são executados em uma única linha de código.
// Sem encadeamento
let nome = 'gabriel';
nome = nome.trim();
console.log(nome);
let letra = nome.charAt(0);
letra = letra.toUpperCase();
console.log(letra);

let extraChars = nome.slice(1);
extraChars = extraChars.toLowerCase();
console.log(extraChars);
nome = letra + extraChars;
console.log(nome);


// Com encadeamento
console.log('Com encadeamento');
nome = nome.trim().toUpperCase().charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
console.log(nome);