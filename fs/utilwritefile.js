const { promisify } = require('util')

const writeFile = promisify(require('fs').writeFile) // criando módulo que já vem como promise
const content = 'criando arquivo utilizando promisify do módulo nativo util'

writeFile('utilFile.txt', content).then(() => {
    console.log('arquivo criado com sucesso')
}).catch((err) => {
    console.log(`Error: ${err}`)
})

