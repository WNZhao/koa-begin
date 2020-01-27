/*
*  路由汇总
* */

import publicRouter from './publicRouter'
import combineRouters from 'koa-combine-routers'

module.exports = combineRouters(
  publicRouter
)
