import * as crypto from "crypto"
import * as mongoose from "mongoose"
const Schema = mongoose.Schema

//const model = mongoose.model  It's doesn't work

export type TagCategoryModel = mongoose.Document & {
	name:{
		type:String
	},	          
	desc:String
}

const TagCategorySchema = new Schema({
	name:{
		type:String,
		unique: true
	},	          //分类名称
	desc:String		//分类描述
})

const TagCategory = mongoose.model('TagCategory', TagCategorySchema)

export default TagCategory