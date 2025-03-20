// Objetos
const pessoa = {
    nome: 'Gabriel',
    idade: 14,
    hobbies: ['estudar', 'ler'],
        endereço: {
            rua: 'capixabas 123',
            cidade: 'Cidade do Monte Verde'
        }
}
console.log(pessoa.endereço)
console.log(pessoa.endereço.cidade)


const carro = {
    nome: 'Audi',
    modelo: 'Volkshshavaguen',
    cor: 'Amarelo-Bronzeado',
    buzinar() {
        console.log('Audi Buzinou! BIIIIIIIPPPPP')
    }
};
carro.buzinar()