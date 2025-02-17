const animal = {
    Spike: {
        nomeAnimal: 'gato',
        nomeDefinido: 'Spike',
        barulho: 'miau',
        idade: 3,
        genero: 'macho',
        cor: 'branco',
        namorada: 'Berry',

        filho: {
            filhote1: {
                nome: 'Jake',
                genero: 'macho'
            },
            filhote2: {
                nome: 'Rosa',
                genero: 'femea'
            }
        }       
    },
    Berry: {
        nomeAnimal: 'gato',
        nomeDefinido: 'Berry',
        barulho: 'miau',
        idade: 2,
        genero: 'femea',
        cor: 'cinza-claro',
        namorado: 'Spike',

        filho: {
            filhote1: {
                nome: 'Jake',
                genero: 'macho'
            },
            filhote2: {
                nome: 'Rosa',
                genero: 'femea'
            }
        }   
    }
}
console.log(animal.Spike, animal.Berry)