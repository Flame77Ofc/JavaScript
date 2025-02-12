const nome = 'Pedro'
const sobrenome = 'Silva'
const nascimento = '02/01/1989'

const pessoaA = {
    nome: 'Pedro',
    sobrenome: 'Silva',
    nascimento: new Date('8-2-90')
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}` //this: significa que vai retornar o próprio objeto.
    },
    obterAnoNascimento() {
        return this.nascimento.getFullYear
    }
}

console.log(pessoaA.nome, pessoaA.sobrenome, pessoaA.nascimento.getFullYear, pessoaA.obterNomeCompleto)