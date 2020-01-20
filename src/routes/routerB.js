const koaRouter = require('koa-router')
const router = new koaRouter()
const {b} = require('../api/b')
router.prefix('/api')
router.get('/b', b)
module.exports = router
