const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Product;
const Color = db.Color
const User = db.User;

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		db.Product.findAll({
			include:['color']
		})
		.then(products => {
			res.render('index',{products})
		})
	},
	
	// search: (req, res) => {
	// 	res.render('search')
	// },

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
