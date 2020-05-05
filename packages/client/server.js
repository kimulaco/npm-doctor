const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')
const PORT = 3000
const isDev = process.env.NODE_ENV !== 'production'

const app = next({
  dir: './src',
  dev: isDev,
})

const handle = app.getRequestHandler()
let server

app.prepare().then(() => {
  server = express()

  if (isDev) {
    server.use(createProxyMiddleware('/api', {
      target: 'http://localhost:3333',
      changeOrigin: true
    }))
  }

  server.all('*', (request, response) => {
    handle(request, response)
  })

  server.listen(PORT, (error) => {
    if (error) {
      throw error
    }
    console.log(`> Ready on port ${PORT} [${process.env.NODE_ENV}]`)
  })
}).catch((error) => {
  console.log('An error occurred, unable to start the server')
  console.log(error)
})
