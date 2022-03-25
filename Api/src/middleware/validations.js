const { body, check } = require('express-validator');

module.exports.signup = [
    body('email').isEmail(),
    body('firstName').notEmpty().isString(),
    body('lastName').notEmpty().isString(),
    body('password').notEmpty().isString().isLength({min:6}),
    check('passwordConfirmation').custom( (passwordConfirmation, { req }) => {
        if (passwordConfirmation !== req.body.password) {
        throw new Error('Password not equal');
        }
        return true;
    }),
];

module.exports.signin = [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty().isString(),
    check('passwordConfirmation').custom( (passwordConfirmation, { req }) => {
    if (passwordConfirmation !== req.body.password) {
    throw new Error('Password not equal');
    }
    return true;
    })
];

module.exports.question = [
    body('interrogante').notEmpty().isString(),
    body('opc1').notEmpty().isString(),
    body('opc2').notEmpty().isString(),
    body('opc3').notEmpty().isString(),
    body('opc4').notEmpty().isString(),
    check('categoria', 'No es un id de Mongo válido').isMongoId(),
    body('categoria').notEmpty()
];

module.exports.category = [
    body('nombre').notEmpty().isString(),
    body('nivel').notEmpty().isNumeric(),
    body('premio').notEmpty().isNumeric(),
];

