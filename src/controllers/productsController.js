const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    // Root - Show all products
	index: (req, res) => {
		res.render('products/products',{products})
	},


	// Detail - Detail from one product
	detail: (req, res) => {
		let product = products.find(product=>product.id == req.params.id)

		res.render('products/detail',{product})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('products/create')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let image

		if(req.file == undefined){
			image = "default.jpg"
		} else {
			image = req.file.filename
		}

		let product = {
			'id': products[products.length-1]['id']+1,
			'name': req.body.name,
			'description': req.body.description,
			'category': req.body.category,
			'colors': req.body.colors,
			'price': req.body.price,
			'image': image
		}	

		products.push(product);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null,'\t'));
		
    	res.render('products/detail',{product});
	},

	// Update - Form to edit
	edit: (req, res) => {
		let product = products.find(product=>product.id == req.params.id)

		res.render('products/edit',{product})
	},
	// Update - Method to update
	update: (req, res) => {
		let product = products.find(product=>product.id == req.params.id);

		let newProduct = {
			'id': product.id,
			'name': req.body.name,
			'description': req.body.description,
			'category': req.body.category,
			'colors': req.body.category,
			'price': req.body.price,
			// 'image': req.field.filename
		};

		let productToEdit = products.map(product => {
			if(newProduct.id == product.id){
				return product = newProduct
			}
			return product
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(productToEdit, null,'\t'));

		res.render('products/detail',{product})
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let productId = req.params.id;

		let productDelete=products.filter(product=>product.id != productId)

		fs.writeFileSync(productsFilePath, JSON.stringify(productDelete, null,'\t'));

    	res.redirect('/')

	},

}

module.exports=productsController