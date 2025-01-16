const express = require('express');
const app = express();
const router = require("./routes/router");
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');


const PORT = process.env.PORT;
const URI = process.env.URI

app.use(express.json())

app.use('/',router)


const run = async()=>{
	try{
		await connectDB(URI);
		console.log("Conexion con la BBDD...")
		app.listen(PORT,()=>{
		console.log(`Ejecutando en el servidor ${PORT}`)
	})

	}
	catch(error){
		console.error(error);
	}
}

run();

module.exports = app;