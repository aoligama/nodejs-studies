const express = require('express')
const router = express.Router()

function logReq(req, res, next) {
    console.log('executando middleware em nivel de rota(admin)')
    return next()
}

router.get('/', logReq, (req, res) => {
    res.send('Admin')
})

router.get('/:id', (req, res) => {
    res.send(`Accessing admin with id: ${req.params.id}`)
})

router.post('/', (req, res) => {
    const login = `login: ${req.body.login}`
    const pswrd = `password: ${req.body.password}`
    res.send(`Admin POST: \n ${login} | ${pswrd}`)
})

router.patch('/:id', (req, res) => {
    res.send('Admnin PATCH')
})

router.put('/:id', (req, res) => {
    res.send('Admnin PUT')
})

router.delete('/:id', (req, res) => {
    res.send('Admnin DELETE')
})

module.exports = router