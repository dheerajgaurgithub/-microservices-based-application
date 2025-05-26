const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const app = express()
app.use(bodyParser.json())

let books = []

app.get('/books', (req, res) => res.json(books))
app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
})
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === req.params.id)
    res.json(book)
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(3001)
