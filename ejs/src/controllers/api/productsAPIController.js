const fs = require('fs');
const path = require('path');
const db = require('../../database/models');

const productsAPIController = {
    //list of products
	'listProducts': (req, res) => {
		db.Product
			.findAll()
			.then(products =>{
				return res.status(200).json({
					total: products.length,
					data: products,
					status:200
				})
			})
	},
    //show product
    'showProduct': (req, res)=>{
        db.Product
            .findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                    data: product,
                    status: 200
                })
            })
    },
    'lastProduct': (req, res)=>{
        db.Product
        .findAll({
            order: [['idProduct', 'DESC']],
            limit: 1
        })
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200
            })
        })
    },
    'color': (req, res)=>{
		db.Color
			.findAll()
			.then(products =>{
				return res.status(200).json({
					total: products.length,
					data: products,
					status:200
				})
			})
    }
}

module.exports = productsAPIController