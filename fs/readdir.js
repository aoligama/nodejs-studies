const fs = require('fs')

// permite subir o nivel, substituindo __dirname por ../
fs.readdir(__dirname, (err, data) => {
    if(err) throw err

    data.forEach((files) => {
        console.log(__dirname + files)
    })
})