const fs = require('fs');
const path = require('path');
const {validationResult}=require('express-validator')
const Usermodel = require('../models/Users')
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const User = db.User;
const Product = db.Product;
const Color = db.Color

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const bcryptjs = require('bcryptjs')

const usersController = {

	//register
	register: (req, res) => {
		let promUser = User.findAll();
        
        Promise
        .all([promUser])
        .then(([allUser]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'users/register'), {allUser})})
        .catch(error => res.send(error))
	},
	
	charge: (req, res) => {

		let image

		if(req.file == undefined){
			image = "default.jpg"
		} else {
			image = req.file.filename
		}
		
		User.create(
            {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				category: req.body.category,
				email: req.body.email,
				password: bcryptjs.hashSync(req.body.password,10),
				image: image
            }
        )
        .then(()=> {
            return res.redirect('/users/login')})            
        .catch(error => res.send(error))
	},
	
	//login
	login: (req, res) => {
		res.render('users/login')
	},

	//login charge
	loginCharge: (req, res) => {
		//let userToLogin = User.findByField('email',req.body.email);
		
		User.findOne({where: {email: req.body.email}})
		.then( userToLogin => {
		if(userToLogin){
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if(isOkThePassword){
				delete userToLogin.password
				req.session.userLogged = userToLogin;

				if(req.body.rememberUser){
					res.cookie('userEmail',req.body.email, {maxAge:(1000*60)*20})
				}

				return res.redirect('/users/detailUser')
			}
			res.render('users/login', {
				error:{
					email:{
						msg:'Las credenciales son invalidas'
					}
				}
			})
		}})
		
	},

	//logout
	logout: (req,res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		res.redirect('/')
	},

	// Update - Form to edit User
	editUser: (req, res) => {
        let idUser = req.session.userLogged.idUser;
        let promUser = User.findByPk(idUser);
        Promise
        .all([promUser])
        .then(([user]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'users/editUser'), {user})})
        .catch(error => res.send(error))
	},
	// Update - Method to update User
	updateUser: (req, res) => {
		let image

		if(req.file == undefined){
			image = User.image
		} else {
			image = req.file.filename
		}

		let idUser = req.params.id;

		let password

		let isOkThePassword = bcryptjs.compareSync(req.body.password, req.session.userLogged.password);
		if(isOkThePassword){
			password = req.session.userLogged.password
		}

        User.update(
            {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				category: req.body.category,
				email: req.session.userLogged.email,
				password: password,
				image: image
            },
            {
                where: {idUser: idUser}
            })
        .then(()=> {
            return res.redirect('/')})            
        .catch(error => res.send(error))
	},

	// Detail User - Edit one user from DB

	detailUser: (req, res) => {
		let sessionUser = req.session.userLogged
		User.findByPk(sessionUser.idUser) 
		.then(user=>res.render('users/detailUser',{user}))
	},

	// DeleteUser - Delete one user from DB
	destroyUser : (req, res) => {
        User.destroy({where: {idUser: req.session.userLogged.idUser}, force: true})
        .then(()=>{
			res.clearCookie('userEmail');
			req.session.destroy()
            return res.redirect('/')})
        .catch(error => res.send(error)) 
	},

	//carrito
	productCart: (req, res) => {
		res.render('users/productCart')
	},
}

module.exports=usersController