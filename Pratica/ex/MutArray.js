function Multiplicar() {
    const numsArray = [1, 2, 3, 4, 5, 6, 7];
    let resultado = 1; 

    for (const num of numsArray) {
        resultado *= num;
    }

    return resultado;
}

console.log(Multiplicar());