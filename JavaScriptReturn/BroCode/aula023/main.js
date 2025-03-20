// 2D Arrays: É um array multi-dimensional que armazena uma matrix de daddos em colunas e linhas
let matrix = [[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]];

// Alterando pelo índice
// Primeiro coluna, depois a linha
matrix[0][0] = 'x'
matrix[0][1] = 'z'
matrix[2][1] = 'abc'

for (let row of matrix) {
    const rowString = row.join(' ')
    console.log(rowString)
}