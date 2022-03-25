const router = require('express').Router()
const authControllers = require('../controllers/authControllers')
const userValidator= require('../middleware/userValidator')
const validations = require('../middleware/validations')
const {validarCampos} = require('../middleware/validarCampos');

router.post('/signin', [ validations.signin, validarCampos ], authControllers.signin )

router.post('/signup', [ validations.signup , validarCampos, userValidator.checkEmailExisted] , authControllers.signup)

module.exports= router