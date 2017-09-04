import * as Router from 'koa-router'

let users = new Router({
  prefix: '/users'
})

users.get('list', '/list/:id', (ctx, next) => {
  ctx.body = `List`
})


export default users