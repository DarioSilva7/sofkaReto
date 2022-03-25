const Category = require("./src/models/Category")

module.exports.loadCategories= async (data)=>{
    const qty= await Category.countDocuments({ estado: true})
    if(qty == 0){
        await Category.insertMany(data)
    }
    return 
}