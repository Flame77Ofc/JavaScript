function multiplicacao(HorasTrabalhadasNoMes, RecebimentoPorHoras) {
    console.log(`Você ganha R$${HorasTrabalhadasNoMes * RecebimentoPorHoras}`)
}
multiplicacao(360, 4)


class Work {
    constructor(nome, emprego, idade, salario) {
        this.nome = nome
        this.emprego = emprego
        this.idade = idade
        this.salario = salario
    }
}
const FuncionarioID1 = new Work('John', "Atendente de McDonald's", 32, `${360 * 4}`)
console.log(FuncionarioID1)