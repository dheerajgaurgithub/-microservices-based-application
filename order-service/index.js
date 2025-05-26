const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const app = express()
app.use(bodyParser.json())

let orders = []

app.get('/orders', (req, res) => res.json(orders))
app.post('/orders', (req, res) => {
    orders.push(req.body)
    res.status(201).json(req.body)
})
app.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === req.params.id)
    res.json(order)
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(3003)
