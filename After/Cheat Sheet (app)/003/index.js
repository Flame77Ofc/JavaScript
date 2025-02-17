//Escopo
function minhaFuncao() {
    var nomePizza = 'Calabresa'
    //Aqui pode usar nomePizza
}
//Aqui não pode usar nomePizza

//--------------------------------------------------------------------------------------------------------------------------

//Escopo de bloco de variáveis
const logado = true
if (logado == true) {
    const Mensagem = 'Está logado'
}
//Erro de Referência
console.log(Mensagem)

//--------------------------------------------------------------------------------------------------------------------------

//Variáveis globais
const cor = 'azul'
function mostraCor() {
    console.log(cor)
}
cor()
//azul

//--------------------------------------------------------------------------------------------------------------------------

//let vs var
//let:
for (let i = 0; i < 3; i++) {
    //Esse é o escopo máximo para 'let'
    //i é acessível
}
//i não é acessível

//var:
for (var i = 0; i < 3; i++) {
    //i é acessível
}
//i é acessível

//Explicação: var tem escopo no bloco de função mais próximo, e let tem escopo no bloco delimitador mais próximo.
//var é limitado ao escopo da função em que foi declarado, independentemente de blocos internos (como if, for)
//let é limitado ao bloco mais próximo em que foi declarado, ele só é acessível dentro desse bloco específico(como if, for ou qualquer outro bloco {})

