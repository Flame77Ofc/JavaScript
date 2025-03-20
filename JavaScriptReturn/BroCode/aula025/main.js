// Resto de parâmetros (...rest)
function openFridge(...foods) {
    console.log(foods)
}

const food1 = 'pizza'
const food2 = 'hamburguer'
const food3 = 'queijos'
const food4 = 'hotdog'

openFridge(food1, food2, food3, food4)