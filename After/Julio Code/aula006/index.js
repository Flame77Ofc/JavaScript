let dirigir = false
console.log(`pode dirigir? ${dirigir}`)

let nome1, nome2 = 'Gabriel'
console.log(`os nomes são iguais? ${nome1 == nome2}`)//true

let num1 = 40
let num2 = 39
console.log(`O número ${num1} é igual a ${num2}? ${num1 == num2}`)

let lista = ['A', 'B', 'C']
console.log(lista.includes('C')) //Isso irá mostrar true ou false. Se tiver C, true, se não, false. (nesse caso, true.)

//&&
const nota1 = 90
const nota2 = 67
let passou = (nota1 > 60 && nota2 > 60)
console.log(`O aluno passou de ano? ${passou}`) //true

//||
let passouEnem = false
let passouVest = true
let faculdade = (passouEnem == true || passouVest == true)
console.log(faculdade)

//!
let passouMat = true
console.log(!passouMat)