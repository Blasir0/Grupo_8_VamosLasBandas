const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		res.render('index',{products})
	},
	search: (req, res) => {
		res.render('search')
	},

	// //login
	// login: (req, res) => {
	// 	res.render('login')
	// },

	// //register
	// register: (req, res) => {
	// 	res.render('register')
	// },

	// //carrito
	// productCart: (req, res) => {
	// 	res.render('productCart')
	// },
};

module.exports = controller;
