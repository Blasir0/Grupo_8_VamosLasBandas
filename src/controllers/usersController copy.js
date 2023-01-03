const fs = require('fs');
const path = require('path');
const {validationResult}=require('express-validator')
const User = require('../models/users')

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

		let image
		if(req.file == undefined){
			image = "default-profile.jpg"
		} else {
			image = req.file.filename
		}
		
		let password = bcryptjs.hashSync(req.body.password,10)
		
		let user = {
			'id': users[users.length-1]['id']+1,
			'firstName': req.body.firstName,
			'lastName': req.body.lastName,
			'email': req.body.email,
			'category': req.body.category,
			'password': password,
			'image':image
		}
		
		users.push(user);
		
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null,'\t'));
		
		res.render('detailUser',{user});
		
	},
	
	//login
	login: (req, res) => {
		res.render('login')
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
		let user = users.find(user=>user.id == req.params.id)

		res.render('detailUser',{user})
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