"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TagCategorySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    desc: String //分类描述
});
const TagCategory = mongoose.model('TagCategory', TagCategorySchema);
exports.default = TagCategory;
//# sourceMappingURL=TagCategory.js.map