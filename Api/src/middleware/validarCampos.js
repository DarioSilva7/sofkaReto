const { validationResult } = require('express-validator')

const validarCampos = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        next() 
    }

    else res.status(400).json({ msg: errors.array() })
}

module.exports = {
    validarCampos
}