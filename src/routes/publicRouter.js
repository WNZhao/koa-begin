import koaRouter from 'koa-router'
import demoController from '../api/PublicController'

const router = new koaRouter()

router.prefix('/api')
router.get('/captcha', demoController.getCaptcha)

export default router
