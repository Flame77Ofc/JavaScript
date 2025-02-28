//Operador Ternário
let color = 'blue'
let verify = color == 'blue' ? 'true' : 'false'

// Operador Lógico e (&&)
    //O e(&&) precisa das duas afirmações corretas.
    // Para que o e(&&) seja verdadeiro, todos os valores precisam ser verdadeiros. Caso apenas 1 valor ser falso, a operação é falsa.

    console.log(true && false) //false
    let MaiorDeIdade = true
    let carteira = true
    let Aplicar = MaiorDeIdade && carteira
    console.log(Aplicar) // true

//Operador Lógico ou (||)
    //O ou(||) precisa de apenas que uma das afirmações seja correta.
    // Para que ou(||) seja verdadeiro, apenas 1 valor precisa ser verdadeiro. Se um valor for falso e outro for verdadeiro, então a operação é verdadeiro

    let MaiorDeIdade2 = true
    let carteira2 = true
    let Aplicar2 = MaiorDeIdade2 || carteira2
    console.log(Aplicar2) // true

    console.clear()
    //Operador NOT(!)
    // Faz uma negação.
    let candidatoRecusado = !Aplicar
    console.log(candidatoRecusado)

    // Comparadores de Comparação

console.log(10 > 20) //10 é maior que 20? false
console.log(20 < 10) //20 é menor que 10? false
console.log(20 > 20) //20 é maior que 20? false (Igual)
console.log(20 >= 20) //20 é maior ou igual que 20? true
console.log(20 <= 20) //20 é maior ou igual que 20? true
console.log(10 == 10) //10 é igual a 10? true
console.log(20 != 20) //20 é diferente de 20? false

    /*operadores aritméticos
    + adição
    - subtração
    * multiplicação
    / divisão
    % modulação/resto da divisão
    ++ incrementação
    -- decrementação
    */