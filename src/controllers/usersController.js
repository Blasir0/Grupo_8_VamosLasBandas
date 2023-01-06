const fs = require('fs');
const path = require('path');
const {validationResult}=require('express-validator')
const User = require('../models/Users')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const bcryptjs = require('bcryptjs')

const usersController = {

	//register
	register: (req, res) => {
		res.render('register')
	},
	
	charge: (req, res) => {
		const resultValidation = validationResult(req)

		if(resultValidation.errors.length>0){
			res.render('register', {
				error: resultValidation.mapped(),
				oldData: req.body
			})
		}

		let userInDB = User.findByField('email', req.body.email);

		if(userInDB){
			res.render('register',{
				errors: {
					email: {
						msg: 'Este email ya esta registrado'
					}
				},
				oldData: req.body
			})
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password,10),
			image: req.file.filename
		}

		let UserCreated = User.create(userToCreate);

		res.redirect('/users/login');
	},
	
	//login
	login: (req, res) => {
		res.render('login')
	},

	//login charge
	loginCharge: (req, res) => {
		let userToLogin = User.findByField('email',req.body.email);
		
		if(userToLogin){
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if(isOkThePassword){
				delete userToLogin.password
				req.session.userLogged = userToLogin;

				if(req.body.rememberUser){
					res.cookie('userEmail',req.body.email, {maxAge:(1000*60)*5})
				}

				res.redirect('/users/detailUsers')
			}
			res.render('login', {
				error:{
					email:{
						msg:'Las credenciales son invalidas'
					}
				}
			})
		}
	},

	//logout
	logout: (req,res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		redirect('/')
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
			// 'image':req.field.filename
		};
		
		let userToEdit = users.map(user => {
			if(newUser.id == user.id){
				return user = newUser
			}
			return user
		})
	
		fs.writeFileSync(usersFilePath, JSON.stringify(userToEdit, null,'\t'));
	
		res.render('detailUser',{user})
	},

	// Detail User - Edit one user from DB

	detailUser: (req, res) => {
		res.render('detailUser',{
			user: req.session.userLogged
		})
	},

	// DeleteUser - Delete one user from DB
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

module.exports=usersController