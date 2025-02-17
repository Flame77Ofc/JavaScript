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