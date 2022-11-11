const dotenv = require('dotenv').config();

const express = require("express");

const { Router } = express;

const routerProductos = require('./routes/productos.route.js');
const routerCarrito = require('./routes/carrito.route.js');

const app = express();


app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

const PORT = process.env.PORT
app.listen(PORT, err => {
	if (err) throw err;
	console.log(`Server running on port ${PORT}`);
});