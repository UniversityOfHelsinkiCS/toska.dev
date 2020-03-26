const express = require('express')
const proxy = require('express-http-proxy')
const app = express()
const PORT = 3000
const inProd = process.env.NODE_ENV === 'production'

const proxyReqPathResolver = inProd
  ? undefined
  : req => req.originalUrl

app.use(express.static('jekyll/_site'))

app.use('/jami', proxy('jami-svc:3001', { proxyReqPathResolver }))

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))