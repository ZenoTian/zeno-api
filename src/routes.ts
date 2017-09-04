import * as Router from 'koa-router'

import users from './api/users/users'
import tag from './api/tag/tag'

let routes = (app) => {
  app.use(tag.routes())
  app.use(users.routes())
}

export default routes