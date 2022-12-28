const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    // Root - Show all products
	index: (req, res) => {
		res.render('users',{users})
	},

		// Create - Form to create
		// register: (req, res) => {
		// 	res.render('register')
		// },
		
		// Create -  Method to store
		// charge: (req, res) => {
		// 	let user = {
		// 		'id': users[users.length-1]['id']+1,
		// 		'firstName': req.body.name,
		// 		'lastName': req.body.last_name,
		// 		'email': req.body.email,
		// 		'category': req.body.category,
		// 		'instrument': req.body.instrument,
		// 		'password': req.body.password,
		// 	}	
	
		// 	users.push(user);
	
		// 	fs.writeFileSync(usersFilePath, JSON.stringify(users, null,'\t'));
			
		// 	res.render('login',{user});
		// },
}

module.exports=usersController