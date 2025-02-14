function avisar() {
    alert('sei lá.')
}

function escuro() {
    document.body.style.background = 'black'
    document.body.style.color = 'white'
}

function claro() {
    document.body.style.background = 'white'
    document.body.style.color = 'black'
}

//Ou: (sem onclick, apenas definindo o id)
let botao = document.querySelector('#exemplo')

botao.addEventListener('mouseover', () => {
    avisar()
})