setTimeout(() => {
    console.log('Timeout')
}, 1200)

setInterval(() =>  {
    console.log(`Interval`)
}, 1200)

//Diferença entre setTimeout e setInterval:
//setTimeout acaba depois de declarar o tempo que você colocou. Já o setInterval depois que passa aquele tempo, ele se repete.