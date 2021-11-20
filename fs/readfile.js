const fs = require('fs')

// async (non-blocking)
fs.readFile('text.txt', (err, data) => {
    if(err) throw err

    console.log(data.toString())
})

// sync (blocking)
const text = fs.readFileSync('text.txt')
console.log(`Texto: ${text}`)