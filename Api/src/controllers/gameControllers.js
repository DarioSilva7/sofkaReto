const Game = require('../models/Game')
const User = require('../models/User')

module.exports.createGame= async (req, res) => {
    const {userId} = req
    const { retiro, expulsado, ganaste, ...body } = req.body
    try {
        // los booleanos se modifican desde el front.
        // valido que el usuario haya ganado o se haya retirado voluntariamente
        // y me aseguro de que no llegue ningun expulsado
        if(retiro || ganaste && !expulsado){
            const  data = {
                ...body,
                jugador: userId
            }
            const gameCreated = await new Game(data)
            await gameCreated.save()

            let theUser= User.findById(req.userId).then(user=>{
                user.juegos.push(gameCreated._id)
                return user.save()
            }).catch(err=>{
                return res.status(500).json({msg: err})
            })
            return res.status(201).json({msg: "Game created successfully" , data})
        }

    } catch (error) {
        return res.json(error);
    }
}

module.exports.allGames= async(req,res)=>{
    try{
        const allG= await Game.find().populate('jugador','firstName acc nivel')
        if(!allG){
            return res.status(404).json({msg: "Not games found"})
        }
        return res.json({msg:"Games found successfully", data: allG})
    }catch(e){
        return 
    }
}