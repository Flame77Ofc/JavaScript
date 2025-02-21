//Promises
const promise = new Promise((resolve, reject) => {

    let fileLoaded = true
    if (fileLoaded) {
        resolve('File loaded')
    } else
        reject('File Not loaded')
})