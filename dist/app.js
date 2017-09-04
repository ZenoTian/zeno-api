"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const chalk = require("chalk");
const mongoose = require("mongoose");
const config_1 = require("./config/config");
const routes_1 = require("./routes");
const app = new Koa();
let router = new Router();
mongoose.connect(config_1.default.mongodb);
mongoose.connection.on("open", () => {
    console.log(chalk.cyan("MongoDB connection success."));
});
mongoose.connection.on("error", (error) => {
    console.log(chalk.red(error));
    process.exit();
});
// DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
mongoose.Promise = Promise;
routes_1.default(app);
app.on('error', (err, ctx) => {
    console.error('koa-error', err);
});
app.listen(3001, () => {
    console.log(chalk.cyan(`App started, at http://localhost:${3001}`));
});
exports.default = app;
//# sourceMappingURL=app.js.map