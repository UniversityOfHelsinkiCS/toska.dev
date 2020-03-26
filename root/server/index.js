const express = require('express')
const proxy = require('express-http-proxy')
const app = express()
const PORT = 3000
const inProd = process.env.NODE_ENV === 'production'

const proxyReqPathResolver = inProd
  ? undefined
  : req => req.originalUrl

const services = {
  '/jami': 'jami-svc:3001',
  '/tuomo': 'tuomo-svc:3002',
  '/mikko': 'mikko-svc:3003',
  '/terho': 'terho-svc:3004',
}


app.use(express.static('jekyll/_site'))

Object.entries(services).forEach(([route, service]) => {
  app.use(route, proxy(service, { proxyReqPathResolver }))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))