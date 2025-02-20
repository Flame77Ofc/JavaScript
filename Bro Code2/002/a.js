//Callbacks
function hello() {
    setTimeout(function () {
        console.log('Hello')
    }, 1200)
}

function goodbye(){
    console.log('Goodbye!')
}

hello(goodbye)