const router = require('express').Router()
const {check} = require('express-validator')
const { verifyToken } = require('../middleware/userValidator')
const questionControllers = require('../controllers/questionControllers')
const {validarCampos} = require('../middleware/validarCampos');
const validations = require('../middleware/validations')


router.get('/', verifyToken, questionControllers.allQuestions )

router.delete('/:id',(req,res)=>{
    res.json("Borrar pregunta")
})

router.post('/',[verifyToken, validations.question, validarCampos], questionControllers.createQuestion)

module.exports= router