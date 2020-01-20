// koa开发目录结构分配及相关中间件的使用
// const Koa = require('koa')
// const helmet = require('koa-helmet')
// const statics = require('koa-static')
// const path = require('path')


import Koa from 'koa'
import statics from 'koa-static'
import path from 'path'
import helmet from 'koa-helmet'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose';
import routers from './routes/routes'

const app = new Koa()
// const routers = require('./routes/routes')
// console.log(routers)
// app.use ... 可以使用koa-compose(整合koa中间件）
// app.use(helmet())
// app.use(statics(path.join(__dirname, '../public')))
// app.use(routers())
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonutil({pretty: false, param: 'pretty'}),
  helmet()
])

app.use(middleware)
app.use(routers())

app.listen(3000, () => {
  console.log('web serve started at port: ' + 3000)
})
