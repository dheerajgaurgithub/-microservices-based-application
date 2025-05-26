const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()

app.use('/books', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }))
app.use('/users', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }))
app.use('/orders', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }))

app.listen(3000)
