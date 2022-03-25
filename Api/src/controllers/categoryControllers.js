const Category = require("../models/Category")

module.exports.createCategory= async (req, res) => {
    req.body.nombre = req.body.nombre.toUpperCase()
    const {nombre, nivel} = req.body
    try {
        const byName = await Category.findOne({nombre})
        if(byName){
            return res.status(400).json({msg: `La categoria ${byName.nombre} ya existe`})
        }
        const byNivel = await Category.findOne({nivel})
        if(byNivel){
            return res.status(400).json({msg: `Ya existe categoria con nivel ${byNivel.nivel}`})
        }
        const  newC = new Category(req.body)
        await newC.save()

        return res.status(201).json({msg: "Category created successfully" , data: newC})
        
    } catch (error) {
        console.log(error);
    }
}

module.exports.allCategories= async(req,res)=>{
    try{
        const allCat= await Category.find().populate('preguntas', 'interrogante opc1 opc2 opc3 opc4')
        if(!allCat){
            return res.status(404).json({msg: "Not questions found"})
        }
        return res.json({msg:"Categories found", data: allCat})
    }catch(e){
        return res.status(400).json({msg: e}) 
    }
}

// module.exports.categoriesId= async()=>{
//     console.log("en el controller")
//     try{
//         const allCat= await Category.find()
//         console.log(idsCat)
//         if(!allCat){
//             return res.status(404).json({msg: "Not categories found"})
//         }
//         const idsCat = allCat.map(cat => cat._id)
//         return {msg:"Ids categories found", data: idsCat}
//     }catch(e){
//         return {msg: e} 
//     }   
// }