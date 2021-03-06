const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const cookieParser = require('cookie-parser')

app.use('/static', express.static('public'))

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
    console.log('executando middleware em nivel de aplicação')
    return next()
})

app.get('/setcookie', (req, res) => {
    res.cookie('user', 'Amanda Gama', { maxAge: 900000, httpOnly: true })
    return res.send('cookie gravado com sucesso')
})

app.get('/getcookie', (req, res) => {
    let user = req.cookies['user']
    if(user) {
        return res.send(user)
    }
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/admin', adminRoutes)

app.get('*', (req, res, next) => {
    setImmediate(() => {
        next( new Error('Temos um problema') )
    })
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({message: err.message})
})

app.listen(3000, () => {
    console.log('Server running: http://localhost:3000')
})