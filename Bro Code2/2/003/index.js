function hello() {
    setTimeout(() => {
        console.log('Hello')
    }, 1500);
}
hello()


function sum(callback, x, y) {
    let result = x + y
    callback(result)
}
function displayConsole(result) {
    console.log(result)
}
sum(displayConsole, 1, 2)



function soma(x, y) {
    console.log(x + y)
}
soma(3, 5)