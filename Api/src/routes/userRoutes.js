const router = require('express').Router()
const { check } = require('express-validator');
const {validarCampos} = require('../middleware/validarCampos');
const userControllers = require('../controllers/userControllers')
const userValidator = require('../middleware/userValidator')

router.patch('/:id', [userValidator.verifyToken, 
    check('id', 'No es un id de Mongo válido').notEmpty().isMongoId(),
    validarCampos
], userControllers.updateUser)

module.exports= router