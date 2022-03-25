const jwt  = require('jsonwebtoken');
const User = require('../models/User');

module.exports.verifyToken = async( req, res,next)=>{
  try{
    const token = req.headers['access-token']
    if(!token) return res.status(403).json({msg: "No token provided"})

    const decoded= jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id
    
    const  user = await User.findById(req.userId, {password:0})

    if( !user ) { return res.status(404).json({msg: "User not found"}) }
    
    else{ next() }
  }
  catch(e){
    return res.status(500).json({msg: "Not authorized"})
  }
}

module.exports.checkEmailExisted = async (req, res, next) => {
  const {email}= req.body
  const existEmail = await User.findOne({email})
  if(existEmail){
    return res.status(400).json({msg: `Email '${email}' already exists.`})
  }
  next();
}