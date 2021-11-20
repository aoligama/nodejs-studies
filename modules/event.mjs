import { EventEmitter } from 'events'

class Event extends EventEmitter {} // herdando informações
const myEvent = new Event()

// on cria o evento (subscriber - assinate)
myEvent.on('security', (x, y) => {
    console.log(`running event security: ${x} ${y}`)
})

// emite o evento (publisher - emissor)
myEvent.emit('security', 'userName', 'changed some field')

myEvent.on('close', (data) => {
    console.log(`subscriber: ${data}`)
})

myEvent.emit('close', 'closing connection')


// node --experimental-modules event.mjs