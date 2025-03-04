const users = ['Maria', 'Pedro', 'João']
for (const index in users) {
    console.log(index)
}


class Pessoas {
    constructor(name) {
        this.name = name;
    }
}

// Criando um array de pessoas
const listaPessoas = [
    new Pessoas('Lucas'),
    new Pessoas('Gabriel'),
    new Pessoas('Ana')
];

// Iterando corretamente
for (const pessoa of listaPessoas) {
    console.log(pessoa.name);
}
