/*
*  路由汇总
* */
const combineRouters = require('koa-combine-routers')
const aroutes = require('./routerA')
const broutes = require('./routerB')
// console.log(aroutes)
// console.log(broutes)
// console.log(combineRouters)
module.exports = combineRouters(
  aroutes,
  broutes
)
