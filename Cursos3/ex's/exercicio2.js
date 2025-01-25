//Coloque sua média, se for maior que 7 aprovado, se não, reprovado.
let prompt1 = Number(prompt("Primeira Nota"))
let prompt2 = Number(prompt("Segunda Nota"))
let prompt3 = Number(prompt("Terceira Nota"))

let media = (prompt1 + prompt2 + prompt3) / 3
alert(media)

if (media >= 7) {
    alert("Aprovado!")
} else {
    alert("Recuperação")
}