const express = require('express');
const router = express.Router();
const {createOrden,getAllOrden,getOrdenById,updateOrdenById,deleteOrdenById} = require('../controllers/ordenController')
const {ordenValidar} = require('../validators/validarOrden')
const validar = require('../middleware/validar')


router.get('/',getAllOrden);
router.get('/:id',getOrdenById);
router.post('/',ordenValidar,validar,createOrden);
router.put('/:id',ordenValidar,validar,updateOrdenById);
router.delete('/:id',deleteOrdenById)


module.exports =  router