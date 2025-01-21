function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

let parametro1 = parseFloat(prompt("Número 1"))
let parametro2 = parseFloat(prompt("Número 2"))
let operacao = prompt("Escolha a operação: 1: soma. 2:subtração; 3: multiplicação; 4: divisão.")

if (operacao === "1") {
    alert(somar(parametro1, parametro2));
} else if (operacao === "2") {
    alert(subtrair(parametro1, parametro2))
} else if (operacao === "3") {
    alert(multiplicar(parametro1, parametro2))
} else if(operacao === "4") {
    alert(dividir(parametro1, parametro2))
} else {
    alert("Tente Novamente")
}