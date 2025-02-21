//Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. 
/* function numero() {
    var mes = Math.random() * 12 + 1;
    var arredondar = Math.floor(mes); // Arredonda para o número inteiro mais próximo

    if (arredondar == 1) {
        console.log('O mês é Janeiro');
    } 
    else if (arredondar == 2) {
        console.log('O mês é Fevereiro');
    } 
    else if (arredondar == 3) {
        console.log('O mês é Março');
    } 
    else if (arredondar == 4) {
        console.log('O mês é Abril');
    } 
    else if (arredondar == 5) {
        console.log('O mês é Maio');
    } 
    else if (arredondar == 6) {
        console.log('O mês é Junho');
    } 
    else if (arredondar == 7) {
        console.log('O mês é Julho');
    } 
    else if (arredondar == 8) {
        console.log('O mês é Agosto');
    } 
    else if (arredondar == 9) {
        console.log('O mês é Setembro');
    } 
    else if (arredondar == 10) {
        console.log('O mês é Outubro');
    } 
    else if (arredondar == 11) {
        console.log('O mês é Novembro');
    } 
    else if (arredondar == 12) {
        console.log('O mês é Dezembro');
    } 
}

numero();
*/
function numero() {
    var mes = Math.floor(Math.random() * 12) + 1; // Gera um número inteiro entre 1 e 12
    var meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    console.log('O mês é ' + meses[mes - 1]); // mes - 1 porque arrays começam em 0
}

numero();