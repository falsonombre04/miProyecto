const OrderModel = require('../model/OrderModel')


const createOrden = async (req,res)=>{
	try{
		const datos = await OrderModel.create(req.body);
		res.status(201).json(datos);
	}
	catch(error){
		res.status(500).json(`Error en la creación de la orden:${error}`);
	}
}

const getAllOrden = async(req,res)=>{
	try{
		const datos = await OrderModel.find();
		res.status(200).json(datos);
	}
	catch(error){
		res.status(500).json(error);
	}
}

const getOrdenById = async(req,res)=>{
	try{
		const {id} = req.params
		const datos = await OrderModel.findById(id);
		res.status(200).json(datos);
	}
	catch(error){
		res.status(500).json(error);
	}
}

const updateOrdenById = async(req,res)=>{
	try{
		const {id} = req.params
		const datos = await OrderModel.findByIdAndUpdate(id,req.body,{new:true});
		res.status(200).json(datos);
	}
	catch(error){
		res.status(500).json(error);
	}
}

const deleteOrdenById = async(req,res)=>{
	try{
		const {id} = req.params
		const datos = await OrderModel.findByIdAndDelete(id);
		res.status(200).json({msg:'Producto eliminado..'});
	}
	catch(error){
		res.status(500).json(error);
	}
}


module.exports = {createOrden,getAllOrden,getOrdenById,updateOrdenById,deleteOrdenById}