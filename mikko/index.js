const Koa = require('koa')
const app = new Koa()
const PORT = 3003
const serve = require('koa-static')

app.use(serve('public'))

app.listen(PORT)
