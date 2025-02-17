function notas() {
    let frequencia = 56
    let notaA = 7
    let notaB = 9
    let media = (notaA + notaB) / 2
    if (frequencia >= 75 && media >= 6)  {
        console.log(`Passou com frequencia de ${frequencia} e media de ${media}`)
    } else {
        console.log(`Reprovou com frequencia de ${frequencia} e media de ${media}`)
    }
}
notas()