const {body} = require('express-validator')

const ordenValidar = [
	body('orden').notEmpty().withMessage("Orden obligatoria"),
	body('cantidad').notEmpty().withMessage("Cantidad obligatoria")
]

module.exports = {ordenValidar}