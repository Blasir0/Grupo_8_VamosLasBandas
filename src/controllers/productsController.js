const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const bcrypt = require('bcryptjs')

const productsController = {
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
			'description': req.body.description,
			'category': req.body.category,
			'colors': req.body.category,
			'price': req.body.price,
			'image': req.field.filename
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

	//--------------------USER------------------------//

	//login
	login: (req, res) => {
		res.render('login')
	},

	//register
	register: (req, res) => {
		res.render('register')
	},

	//cargar usuario
	charge: (req, res) => {
		let image

		if(req.file == undefined){
			image = "default-profile.jpg"
		} else {
			image = req.file.filename
		}

		let user = {
			'id': users[users.length-1]['id']+1,
			'firstName': req.body.name,
			'lastName': req.body.last_name,
			'email': req.body.email,
			'category': req.body.category,
			'password': req.body.password,
			'image':image
		}	

		users.push(user);

		fs.writeFileSync(usersFilePath, JSON.stringify(users, null,'\t'));
		
		res.render('detailUser',{user});
	},

	// Update - Form to edit User
	editUser: (req, res) => {
		let user = users.find(user=>user.id == req.params.id)
	
		res.render('editUser',{user})
	},
	// Update - Method to update User
	updateUser: (req, res) => {
		let user = users.find(user=>user.id == req.params.id);
	
		let newUser = {
			'id': user.id,
			'firstName': req.body.firstName,
			'lastName': req.body.lastName,
			'email': req.body.email,
			'category': req.body.category,
			'password': req.body.password,
		};
	
		let userToEdit = users.map(user => {
			if(newUser.id == user.id){
				return user = newUser
			}
			return user
		})
	
		fs.writeFileSync(usersFilePath, JSON.stringify(userToEdit, null,'\t'));
	
		res.render('editUser',{user})
	},

	// Detail User - Edit one user from DB

	detailUser: (req, res) => {
		let user = users.find(user=>user.id == req.params.id)

		res.render('detailUser',{user})
	},

	// Delete - Delete one user from DB
	destroyUser : (req, res) => {
		let userId = req.params.id;

		let userDelete=users.filter(user=>user.id != userId)

		fs.writeFileSync(usersFilePath, JSON.stringify(userDelete, null,'\t'));

    	res.redirect('/')

	},

	//carrito
	productCart: (req, res) => {
		res.render('productCart')
	},
}

module.exports=productsController