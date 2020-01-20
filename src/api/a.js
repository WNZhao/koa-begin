function a(ctx) {
  console.log(ctx)
  ctx.body = {
    'message': 'hello from a'
  }
}

module.exports = {
  a
}
