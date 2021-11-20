const http = require('http') // traz o módulo nativo http
const host = '127.0.0.1'
const port = 3000

//  criação do servidor
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
})