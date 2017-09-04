"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const tag_controller_1 = require("./tag.controller");
let tag = new Router({
    prefix: '/tag'
});
tag.get('/list', tag_controller_1.default.getTagCategory);
exports.default = tag;
//# sourceMappingURL=tag.js.map