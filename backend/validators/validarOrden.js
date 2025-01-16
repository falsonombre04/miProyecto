const {body} = require('express-validator');

const ordenValidar = [
	body('orden')
	.notEmpty().withMessage("Orden obligatoria")
	.isString().withMessage("El valor debe ser texto"),

	body('cantidad')
	.notEmpty().withMessage("Cantidad obligatoria")
	.isNumeric().withMessage("El dato debe ser un numero")
];

module.exports = {ordenValidar}