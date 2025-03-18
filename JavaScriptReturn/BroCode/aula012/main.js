// Switch
// O switch é uma estrutura de controle de fluxo que permite verificar uma expressão e executar um bloco de código correspondente a um valor específico. Ele substitui a estrutura if-else-if para casos em que há várias opções possíveis.
let dia = 8;
switch(dia){
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
    break;
    default:
        console.log(`${dia} não é um dia válido`);
        break;
}

let estudante = false
switch (estudante) {
    case true:
        console.log('Olá, estudante!');
        break
    case false:
        console.log(`Olá, desconhecido!`);
        break
    default:
    console.log('Não foi possível identificar sua situação.');
    break
}

