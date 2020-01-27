/*
*  路由汇总
* */

import publicRouter from './publicRouter'
import loginRouter from './loginRouter'
import combineRouters from 'koa-combine-routers'

module.exports = combineRouters(
  publicRouter,
  loginRouter
)
