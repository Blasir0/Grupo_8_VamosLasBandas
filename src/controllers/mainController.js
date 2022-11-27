const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    // Root - Show all products
	index: (req, res) => {
		res.render('products',{products})
	},


	// Detail - Detail from one product
	detail: (req, res) => {
		let product = products.find(product=>product.id == req.params.id)

		res.render('detail',{product})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('create')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let product = {
			'id': products[products.length-1]['id']+1,
			'name': req.body.name,
			'price': req.body.price,
			'category': req.body.category,
			'description': req.body.description,
		}	

		products.push(product);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null,'\t'));
		
    	res.render('detail',{product});
	},

	// Update - Form to edit
	edit: (req, res) => {
		let product = products.find(product=>product.id == req.params.id)

		res.render('edit',{product})
	},
	// Update - Method to update
	update: (req, res) => {
		let product = products.find(product=>product.id == req.params.id);

		let newProduct = {
			'id': product.id,
			'name': req.body.name,
			'price': req.body.price,
			'category': req.body.category,
			'description': req.body.description,
		};

		let productToEdit = products.map(product => {
			if(newProduct.id == product.id){
				return product = newProduct
			}
			return product
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(productToEdit, null,'\t'));

    	res.render('detail',{product})
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let productId = req.params.id;

		let productDelete=products.filter(product=>product.id != productId)

		fs.writeFileSync(productsFilePath, JSON.stringify(productDelete, null,'\t'));

    	res.redirect('/')

	},

	//login
	login: (req, res) => {
		res.render('login')
	},

	//register
	register: (req, res) => {
		res.render('register')
	},

	//carrito
	productCart: (req, res) => {
		res.render('productCart')
	},
}

module.exports=mainController