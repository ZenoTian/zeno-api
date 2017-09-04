import *  as Router from 'koa-router'

import tagController from './tag.controller'

let tag = new Router({
  prefix: '/tag'
})

tag.get('/list', tagController.getTagCategory)


export default tag