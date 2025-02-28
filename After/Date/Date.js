const data = new Date()
console.log(data.toLocaleString('pt-BR'))

//Todos os tipos de Manipular datas
//Pegar a data completa
let Data = new Date()
console.log(Data)

//Pegar o ano completo
let ano = data.getFullYear()
console.log(ano)

//Pegar o mês completo (começa do 0 (janeiro) até 11 (dezembro))
let mes = data.getMonth()
console.log(mes)

//Pegar dia do mês
let dia = data.getDate()
console.log(dia)

//Pegar a hora
let hora = data.getHours()
console.log(hora)

//Pegar os minutos
let mins = data.getMinutes()
console.log(mins)

//Pegar os segundos
let segs = data.getSeconds()
console.log(segs)

//Pegar os milisegundos
let miliseg = data.getMilliseconds()
console.log(miliseg)

console.clear()
//pegar data no padrão brasileiro
let dataBR = data.toLocaleString('pt-BR')
console.log(dataBR)