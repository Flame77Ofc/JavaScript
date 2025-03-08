function PosNeg(num) {
    if (num < 0) { 
        return 'Negativo'
    } else if (num > 0) { 
        return 'Positivo'
    } else { 
        return 'Zero'
    }
}

console.log(PosNeg(7))