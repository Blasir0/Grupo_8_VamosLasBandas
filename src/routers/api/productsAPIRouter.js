const express=require('express');
const productsAPIRouter = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController')

productsAPIRouter.get('/list', productsAPIController.listProducts)
productsAPIRouter.get('/list/:id', productsAPIController.showProduct)

module.exports = productsAPIRouter