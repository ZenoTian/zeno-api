import { default as TagCategory, TagCategoryModel } from '../../model/TagCategory'

let tagController = {
  getTagCategory: async(ctx, next) =>{ 
    let res = await TagCategory.find()
    ctx.body = res
  }
}

export default tagController