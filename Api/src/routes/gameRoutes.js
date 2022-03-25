const router = require('express').Router()
const { verifyToken } = require('../middleware/userValidator')
const gameControllers = require('../controllers/gameControllers')

router.get('/', verifyToken , gameControllers.allGames)

router.delete('/:id', verifyToken ,(req,res)=>{
    res.json("Borrar mi juego")
})

router.post('/', verifyToken , gameControllers.createGame)

module.exports= router