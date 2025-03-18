// Metodos de String
let frase = "O rato roeu a roupa do rei de roma"
// charAt: retorna o caractere na posição especificada
console.log(frase.charAt(0)) // O esta no indice 0
// indexOf: retorna o indice da primeira ocorrencia do caractere especificado
console.log(frase.indexOf('r')) // r esta no indice 2
// length: retorna o tamanho da string
console.log(frase.length) // frase tem 34 caracteres


let nome = '     João'
// trim: remove os espaços em branco do inicio e do fim da string
console.log(nome.trim()) // João
// toUpperCase: converte a string para maiusculo
console.log(nome.toUpperCase()) // JOÃO
// tolowerCase: converte a string para minusculo
console.log(nome.toLowerCase()) // joão


let userName = 'Flame'
// includes: verifica se a string contem o caractere especificado retorna um booleano
console.log(userName.includes('a')) // true


let phoneNumber = '123-456-7890'
// replaceAll: substitui todas as ocorrencias do caractere especificado por outro caractere
console.log(phoneNumber.replaceAll('-', ' ')) // 123 456 7890
// repleace: substitui a primeira ocorrencia do caractere especificado por outro caractere
console.log(phoneNumber.replace('-', ' ')) // 123-456-7890