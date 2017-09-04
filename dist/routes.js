"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./api/users/users");
const tag_1 = require("./api/tag/tag");
let routes = (app) => {
    app.use(tag_1.default.routes());
    app.use(users_1.default.routes());
};
exports.default = routes;
//# sourceMappingURL=routes.js.map