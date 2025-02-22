//Formas de usar o setTimeOut
function sayHello() {
    console.log('Hello')
}

setTimeout(sayHello, 3000)

setTimeout(() => {
    function sayHello() {
        console.log('hello');
    }
    sayHello();
}, 3000);