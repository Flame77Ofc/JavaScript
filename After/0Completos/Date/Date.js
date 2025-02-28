const data = new Date()
console.log(data.toLocaleString('pt-BR'))

//Todos os tipos de Manipular datas
//Pegar a data completa
let Data = new Date()
console.log(Data.toLocaleString('pt-BR'))

//Pegar o ano completo
let ano = data.getFullYear()
console.log(ano.toLocaleString('pt-BR'))

//Pegar o mês completo (começa do 0 (janeiro) até 11 (dezembro))
let mes = data.getMonth()
console.log(mes.toLocaleString('pt-BR'))

//Pegar dia do mês
let dia = data.getDate()
console.log(dia.toLocaleString('pt-BR'))

//Pegar a hora
let hora = data.getHours()
console.log(hora.toLocaleString('pt-BR'))

//Pegar os minutos
let mins = data.getMinutes()
console.log(mins.toLocaleString('pt-BR'))

//Pegar os segundos
let segs = data.getSeconds()
console.log(segs.toLocaleString('pt-BR'))

//Pegar os milisegundos
let miliseg = data.getMilliseconds()
console.log(miliseg.toLocaleString('pt-BR'))

//pegar data no padrão brasileiro
let dataBR = data.toLocaleString('pt-BR')
console.log(dataBR.toLocaleString('pt-BR'))