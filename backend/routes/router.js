const express = require('express');
const router = express.Router();
const {createOrden,getAllOrden,getOrdenById,updateOrdenById,deleteOrdenById} = require('../controllers/ordenController')

router.get('/',getAllOrden);
router.get('/:id',getOrdenById);
router.post('/',createOrden);
router.put('/:id',updateOrdenById);
router.delete('/:id',deleteOrdenById)


module.exports =  router