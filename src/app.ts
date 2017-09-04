import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as chalk from 'chalk'
import mongoose = require('mongoose')


import config from './config/config'
import routes from './routes'

const app = new Koa()
let router = new Router()

mongoose.connect(config.mongodb)
mongoose.connection.on("open", () => {
  console.log(chalk.cyan("MongoDB connection success."))
})

mongoose.connection.on("error", (error) => {
  console.log(chalk.red(error))
  process.exit()
})

// DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
mongoose.Promise = Promise

routes(app)

app.on('error', (err, ctx) => {
  console.error('koa-error', err)
})

app.listen(3001, () => {
  console.log(chalk.cyan(`App started, at http://localhost:${3001}`))
})

export default  app