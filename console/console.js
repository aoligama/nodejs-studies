// common
console.log('exibindo msg no console')

// error
console.error(new Error('Exibindo um erro'))

// table
const carros = ['GM', 'FIAT', 'FORD', 'VW', 'RENAULT']
console.table(carros)

const dados = {
    name: 'Amanda Gama',
    company: 'Keycash'
}
console.table(dados)

// count
console.count('process')
console.count('process')
console.count('process')

// reset count
console.countReset('process')
console.count('process')

// time
console.time('counter')
for(let index = 0; index < 100; index++){
    console.log('-')
}
console.timeEnd('counter')

// test condition
console.assert(true, 'Do something')
console.assert(false, 'Error')

// clear all
// console.clear()