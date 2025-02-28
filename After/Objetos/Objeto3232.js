//para simplificar esse tanto de dados, existe os objetos.
let nome = 'Pedro'
let sobrenome = 'Silva'
let idade = 15
let passaTempos = ['jogar', 'assistir']
let endereco = 'Avenida dos Cabixos'
let cidade = 'Vitória'
let estado = 'AM'

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Silva',
    idade: 15,
    passaTempos: ['jogar', 'assistir'],
    endereco: {
        rua: 'Avenida dos Cabixos',
        cidade: 'Vitória',
        estado: 'AM',
    }
}
//Acessando
console.log(pessoa.endereco.rua)

//Informações mais detalhadas
console.log(JSON.stringify(pessoa))
//Resultado: {"nome":"Pedro","sobrenome":"Silva","idade":15,"passaTempos":["jogar","assistir"],"endereco":{"rua":"Avenida dos Cabixos","cidade":"Vitória","estado":"AM"}}


//Sintaxe de um objeto:
objeto = {
    propriedade1: 'Valor1', //String
    propriedade2: ['valor1', 'valor2', 'valor3'], //Array/Vetor
    propriedade3: {
        x: '1',
        y: '2'
    } //Objeto (dentro do objeto pai)
}

//Acessar o objeto:
console.log(objeto)

//Acessar uma propriedade(valor) do objeto:
console.log(objeto.propriedade1)