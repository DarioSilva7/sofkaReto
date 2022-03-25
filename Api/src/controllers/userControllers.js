const User = require('../models/User')

module.exports.updateUser = async(req, res)=>{
    const {id}= req.params
    try{
    if (id === req.userId) {
        const updatedUser = await User.findByIdAndUpdate(id, req.body,{
            new: true
        })
        const {firstName , lastName, acc, nivel } = updatedUser
        const data= {firstName , lastName, acc, nivel }
        return res.status(200).json({msg:"User update successfully ", data})
    }}
    catch(err){
        return res.status(500).json({msg: "Id enviado no coincide con el usuario logueado", data: err.stack})
    }
    
}