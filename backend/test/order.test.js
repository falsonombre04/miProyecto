/*
	1. Instalamos los paquetes npm install --save-dev mocha chai supertest
	2. en el archivo package.json en test escribimos test:'mocha'
	3. creamos carpeta test
	4. creamos archivo order.test.js

*/
const  request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../app')

describe("Orden API ",()=>{
	it("Debe crear una nueva orden",async ()=>{
		const newOrder = {
			orden:'alimentos',
			cantidad:2
		};

	const response = await request(app)
	.post('/').send(newOrder);
	expect(response.status).to.equal(201);
	expect(response.body).to.have.property('orden',newOrder.orden);
	expect(response.body).to.have.property('cantidad',newOrder.cantidad);
	})

	it('Debe obtener todas las ordenes',async()=>{
		const response = await request(app)
	.get('/');

	expect(response.status).to.equal(200);
	expect(response.body).to.be.an('array')
	});

	it("Debe obtener una orden por su Id", async()=>{
		const newOrder = {
			orden:'chanclas',
			cantidad:6
		};

	const createdOrder = await request(app)
	.post('/')
	.send(newOrder);

	const response = await request(app)
	.get(`/${createdOrder.body._id}`)

	expect(response.status).to.equal(200);
	expect(response.body).to.have.property('orden',newOrder.orden)	

	});

	it('Debe actualizar una orden',async ()=>{
		const newOrder = {
			orden:'chanclas',
			cantidad:6
		};

		const createdOrder = await request(app)
		.post('/')
		.send(newOrder)

		const updatedOrder = {
			orden:'nuevo',
			cantidad:1
		};

		const response = await request(app)
		.put(`/${createdOrder.body._id}`)
		.send(updatedOrder);

		expect(response.status).to.equal(200);
		expect(response.body).to.have.property('orden',updatedOrder.orden);
		expect(response.body).to.have.property('cantidad',updatedOrder.cantidad);
	});

	it('Debe eliminar una orden',async()=>{
		const newOrder = {
			orden:'bebidas',
			cantidad:9,
		}
		const createdOrder = await request(app)
		.post('/')
		.send(newOrder);

		const response = await request(app)
		.delete(`/${createdOrder.body._id}`);

		expect(response.status).to.equal(200);
		expect(response.body).to.have.property('msg','Producto eliminado..')
	});

});