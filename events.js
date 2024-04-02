const EventEmitter = require('events')  //Modulo 'events' de js

const customEmitter = new EventEmitter()

//Acá se crea el evento
customEmitter.on('response', (data, secondData) => {    //Funcion de escucha
    console.log('received')
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('response', 'Hello World', [1, 2, 3])   //Con la función emit, emitimos el evento, lo ejecutamos
// customEmitter.emit('response', 'Fsjaimes')
// customEmitter.emit('response', 20)
// customEmitter.emit('response', [1, 2, 3])
// customEmitter.emit('response', {name: "Frank", lastname: "Jaimes"})