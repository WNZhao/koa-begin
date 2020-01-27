import svgCaptha from 'svg-captcha'

class PublicController {
  constructor() {
  }

  async getCaptcha(ctx) {
    const newCaptcha = svgCaptha.create({
      size:4,
      ignoreChars:'0oOi1l',
      color:true,
      noise:Math.floor(Math.random()*2),
      height:36,
      width:150
    })
    // console.log(newCaptcha)
    ctx.body = {
      code: 200,
      data: newCaptcha.data,
      'message': 'ok'
    }
  }
}

export default new PublicController()
