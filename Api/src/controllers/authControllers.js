const User = require('../models/User')
const jwt = require('jsonwebtoken')

module.exports.signin= async(req, res)=>{
    // LOGIN
    console.log(req.body)
    const { email, password } = req.body;
    const userFound = await User.findOne({email})
    console.log(userFound,"===> USER FOUND")
    if(!userFound) return res.status(400).json({msg: "User not found", data: email})
        
    const matchpassword = await User.comparePassword(password, userFound.password)
    if(!matchpassword) return res.status(401).json({msg: "Invalid password", data: email})

    const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET, {
        expiresIn: 7200
    })

    return res.status(200).json({msg:"User login successfully", data: token}) 
}

module.exports.signup= async(req, res)=>{

    const { firstName, lastName, email, password } = req.body;

    const newUser = new User({
        firstName,
        lastName,
        email,
        password: await User.encryptPassword(password),
    })
    const savedUser = await newUser.save()

    const token = jwt.sign({id: savedUser._id}, process.env.JWT_SECRET,{
        expiresIn: 7200
    })

    return res.status(200).json({msg:"User singup successfully", data: token})
}