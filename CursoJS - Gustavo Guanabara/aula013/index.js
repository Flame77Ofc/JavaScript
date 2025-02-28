let num = [5, 8, 2, 9, 3]
num.sort()//Colocar em ordem crescente
num.push(1)//Adiciona um valor no final do vetor
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num)

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}