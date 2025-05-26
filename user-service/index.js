const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const app = express()
app.use(bodyParser.json())

let users = []

app.get('/users', (req, res) => res.json(users))
app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(201).json(req.body)
})
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id)
    res.json(user)
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(3002)
