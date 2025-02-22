function task1(callback) {
    setTimeout(() => {
        console.log('Task1 Completado')
        callback()
    }, 2000)
}
function task2(callback) {
    setTimeout(() => {
        console.log('Task2 Completado')
        callback()
    }, 1000)
}
function task3(callback) {
    setTimeout(() => {
        console.log('Task3 Completado')
        callback()
    }, 3000);
}
function task4(callback) {
    setTimeout(() => {
        console.log('Task4 Completado')
        callback()
    }, 1500);
}

//Fazer com que todas sejam executadas pela sua ordem correta:
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log('Todas as tarefas concluídas')
            })
        })
    })
})