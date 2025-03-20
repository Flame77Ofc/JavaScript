// Callbacks: É uma função que é passada como um parâmetro para outra função

hello(goodbye)

function hello(Callback) {
    console.log('Hello, World!')
    Callback()
}

function goodbye() {
    console.log('Goodbye, World!')
}
