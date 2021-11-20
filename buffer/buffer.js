const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso completo de nodejs')

console.log(buf.toString())
// console.log(buf.toString('utf161e'))

const buf_string = Buffer.from('Carregando string', 'utf-8')
console.log(Buffer.isBuffer(buf_string.toString()))