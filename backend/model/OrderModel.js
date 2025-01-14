const mongoose = require('mongoose');
const ordenSchema = new mongoose.Schema({
	orden:{type:String},
	cantidad:{type:Number}
})

const OrderModel = mongoose.model("miOrden",ordenSchema)

module.exports = OrderModel;