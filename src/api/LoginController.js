import send from '../config/MailConfig';
import moment from 'moment'

class LoginController {
  constructor() {
  }

  async forget(ctx) {
    const {body} = ctx.request
    try {
      //body.username --> database --> email
      let result = await send({
        code: body.code,
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD'),
        email: body.username,
        user: 'WillZhao'
      })
      ctx.body = {
        code: 200,
        data: result,
        message: '邮件发送成功'
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export default new LoginController()
