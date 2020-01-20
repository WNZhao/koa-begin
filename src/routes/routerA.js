const koaRouter = require('koa-router')
const router = new koaRouter()
const {a} = require('../api/a')
router.prefix('/api')
router.get('/a', a)
module.exports = router
