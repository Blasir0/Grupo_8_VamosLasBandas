const fs = require('fs');
const path = require('path');
const db = require('../../database/models');

const usersAPIController = {
	//list of users
	'listUsers': (req, res)=>{
		db.User
		.findAll()
		.then(users =>{
			return res.status(200).json({
				total: users.length,
				data: users,
				status:200
			})
		})
	},

    //show user
    'showUser': (req, res)=>{
        db.User
            .findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200
                })
            })
    }
}

module.exports = usersAPIController