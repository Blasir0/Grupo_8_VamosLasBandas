const express=require('express');
const productsAPIRouter = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController')

productsAPIRouter.get('/list', productsAPIController.listProducts)
productsAPIRouter.get('/list/:id', productsAPIController.showProduct)
productsAPIRouter.get('/lastProduct', productsAPIController.lastProduct)

module.exports = productsAPIRouter