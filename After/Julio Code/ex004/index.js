let listaAlunos = ['João', 'Marcos', 'Antônio', 'Paulo']
let novoAluno = 'Pedro'

if (listaAlunos.length < 10) {
    listaAlunos.push(novoAluno);
    console.log(`Conseguiu adicionar o aluno novo`)
} else {
    console.log(`Atingiu o número máximo de alunos -> ${listaAlunos.length}`)
}