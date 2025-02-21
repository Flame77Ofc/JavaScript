//Callback


function hello(callback) {
    console.log('hello')
    callback()
}

function wait() {
    console.log('wait')
}

function leave() {
    console.log('leave')
}

function goodbye() {
    console.log('goodbye')
}
hello(wait)