const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    // Root - Show all products
	index: (req, res) => {
		res.render('users',{users})
	},
}

module.exports=usersController