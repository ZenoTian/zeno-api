"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
let users = new Router({
    prefix: '/users'
});
users.get('list', '/list/:id', (ctx, next) => {
    ctx.body = `List`;
});
exports.default = users;
//# sourceMappingURL=users.js.map