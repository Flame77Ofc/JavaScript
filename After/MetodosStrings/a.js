//String Methods
let username = 'gabriel'
console.log(username.charAt(0)) //G
console.log(username.indexOf('e')) //5
console.log(username.length) //7
console.log(username.toUpperCase())//GABRIEL
console.log(username.repeat(3)) //GABRIELGABRIELGABRIEL

let phoneNumber = "123-456-789-012"
phoneNumber = phoneNumber.replaceAll('-', '.')
console.log(phoneNumber)

let fullName = 'Gabriel Goulart'
let firstName = fullName.slice(0, 7)
let lastName = fullName.slice(8, 15)
console.log(firstName, lastName)

//ToLocaleString
let x = '1678.099.648.527'
x.toLocaleString('pt-BR')
console.log(x)

//Métodos: charAt(index), concat(), indexOf(), replace(), toString(), slice()
    //charAt(index)
    //Retorna o caractere localizado no índice especificado.
    let str = "Hello";
    console.log(str.charAt(1)); // Saída: "e"


//concat(string2, string3, ..., stringN):
    //Concatena duas ou mais strings e retorna a nova string.
    let str1 = "Hello";
    let str2 = " World";
    console.log(str1.concat(str2)); // Saída: "Hello World"


//indexOf(searchValue, fromIndex):
    //Retorna o índice da primeira ocorrência do valor especificado, começando a busca a partir do índice fromIndex (opcional). Retorna -1 se o valor não for encontrado.
    let str$ = "Hello World";
    console.log(str$.indexOf("o")); // Saída: 4


//replace(searchValue, newValue):
    //Substitui a primeira ocorrência de searchValue por newValue e retorna a nova string. Se searchValue for uma expressão regular com a flag g, todas as ocorrências serão substituídas.
    let str_ = "Hello World";
    console.log(str_.replace("World", "JavaScript")); // Saída: "Hello JavaScript"

    
//slice(startIndex, endIndex):
    //Extrai uma parte da string e retorna a nova string. O parâmetro startIndex é inclusivo e endIndex é exclusivo. Se endIndex não for fornecido, a extração vai até o final da string.
    let str4 = "Hello World";
    console.log(str4.slice(0, 5)); // Saída: "Hello"


//toString()
    //Converte um valor em uma string. Para strings, retorna a própria string.
    let numero = 42;
    console.log(numero.toString()); // Saída: "42"






//reduce
// .reduce() = reduce the elements of an array
//                     to a single value    

// ----------- EXAMPLE 1 -----------
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

// ----------- EXAMPLE 2 -----------
const scores = [75, 50, 90, 80, 65, 95];
const maximum = scores.reduce(getMax);
const minimum = scores.reduce(getMin);

console.log(maximum);
console.log(minimum);



//ReplaceAll
let telefone = '123-456-789-0'
telefone = telefone.replaceAll("-", '/')
console.log(telefone)