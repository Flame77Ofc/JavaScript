function tabuada(numeroTabuada) {
    if (numeroTabuada < 1 || numeroTabuada > 1000) {
        console.log("O número da tabuada deve estar entre 1 a 1000.")
    }
    else {
        for (let numero = 0; numero <= 10; numero++) {
            console.log(`${numeroTabuada} x ${numero} = ${numero * numeroTabuada}`)
        }
    }
}

tabuada(5)
tabuada(50)
tabuada(456)
tabuada(879)
tabuada(0)  // O número da tabuada deve estar entre 1 a 1000.
tabuada(10000000000)  // O número da tabuada deve estar entre 1 a 1000.