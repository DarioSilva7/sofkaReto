// const Category = require('./src/models/Category')

// module.exports.loadQuestions= async (req,res)=>{
//     try{
//         const allCat= await Category.find()
//         console.log(allCat)
//         if(!allCat){
//             return {msg: "Not categories found"}
//         }
//         const idsCat = allCat.map(cat => cat._id)
//         return {msg:"Ids categories found", data: idsCat}
//     }catch(e){
//         return {msg: e} 
//     }   
// }