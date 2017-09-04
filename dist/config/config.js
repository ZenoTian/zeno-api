"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = process.env.NODE_ENV || 'development';
let config = {
    development: {
        port: 3777,
        mongodb: `mongodb://localhost:27017`
    }
};
exports.default = config[env];
//# sourceMappingURL=config.js.map