let num = 1
let a = setInterval(() => {
    console.log(num++)
    if (num > 10) {
        clearInterval(a)
    }
}, 1000)