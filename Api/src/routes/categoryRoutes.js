const router = require('express').Router()
const {check} = require('express-validator')
const { verifyToken } = require('../middleware/userValidator')
const categoryControllers = require('../controllers/categoryControllers')
const {validarCampos} = require('../middleware/validarCampos');
const validations = require('../middleware/validations')

router.get('/', verifyToken , categoryControllers.allCategories)

router.delete('/:id',(req,res)=>{
    res.json("Borrar pregunta")
})

router.post('/',[verifyToken, validations.category, validarCampos], categoryControllers.createCategory)

module.exports= router