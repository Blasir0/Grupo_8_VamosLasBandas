const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Product;
const Color = db.Color

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    // Root - Show all products
	index: (req, res) => {
		db.Product.findAll({
		include:['color']
		})
		.then(products => {
		res.render('products/products',{products})
		})
	},


	// Detail - Detail from one product
	detail: (req, res) => {
		db.Product.findByPk(req.params.id,
            {
                include : ['color']
            })
            .then(product => {
                res.render('products/detail', {product});
            });
	},

	// Create - Form to create
	create: (req, res) => {
		let promProduct = Product.findAll();
        let promColor = Color.findAll();
        
        Promise
        .all([promProduct, promColor])
        .then(([allProduct, allColor]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'products/create'), {allProduct,allColor})})
        .catch(error => res.send(error))
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let image

		if(req.file == undefined){
			image = "default.jpg"
		} else {
			image = req.file.filename
		}
		
		Product.create(
            {
				idProduct: products[products.length-1]['id']+1,
				name: req.body.name,
				description: req.body.description,
				category: req.body.category,
				idColors: req.body.colors,
				price: req.body.price,
				image: image
            }
        )
        .then(()=> {
            return res.redirect('products/products')})            
        .catch(error => res.send(error))
	},

	// Update - Form to edit
	edit: (req, res) => {
        let idProduct = req.params.id;
        let promProduct = Product.findByPk(idProduct,{include: ['color']});
        let promColor = Color.findAll();
        Promise
        .all([promProduct, promColor])
        .then(([product, allColor]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'products/edit'), {product,allColor})})
        .catch(error => res.send(error))
	},
	// Update - Method to update
	update: (req, res) => {
		let image

		if(req.file == undefined){
			image = "default.jpg"
		} else {
			image = req.file.filename
		}

        let idProduct = req.params.id;
        Product.update(
            {
				name: req.body.name,
				description: req.body.description,
				category: req.body.category,
				idColors: req.body.category,
				price: req.body.price,
				image: image,
            },
            {
                where: {idProduct: idProduct}
            })
        .then(()=> {
            return res.redirect('products/products')})            
        .catch(error => res.send(error))
	},

	// Delete - Delete one product from DB
    destroy: function (req,res) {
        let idProduct = req.params.id;
        Product.destroy({where: {idProduct: idProduct}, force: true})
        .then(()=>{
            return res.redirect('/')})
        .catch(error => res.send(error)) 
    }

}

module.exports=productsController