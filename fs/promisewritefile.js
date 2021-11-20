const { writeFile } = require('fs')

function createFile(name, content) {
    return new Promise((resolve, reject) => {
        writeFile(name, content, err => {
            if(err) return reject(err)

            resolve()
        })
    })
}

createFile('promiseFile.txt', 'criando arquivo com promises').then(() => {
    console.log('arquivo criado')
}).catch(err => console.log(`Error: ${err}`))