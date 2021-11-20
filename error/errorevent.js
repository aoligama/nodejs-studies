const { EventEmitter } = require('events')
const { type } = require('os')
const { emit } = require('process')
const emitter = new EventEmitter()

const validObj = (a) => {
    if(typeof a !== 'object') {
        emitter.emit('error', new Error('tipo inválido'))
    }
    console.log('obj válido')
}

emitter.addListener('error', (err) => {
    console.log('evento: ' + err.message)
})

let dados = {
    name: 'Amanda Gama',
    company: 'Keycash'
}

validObj(dados)