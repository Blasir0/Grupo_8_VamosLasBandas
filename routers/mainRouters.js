const express=require('express');
const mainRouter = express.Router();
const mainController = require('../controllers/mainController')

//rutas

mainRouter.get('/', mainController.index);

mainRouter.get('/index', mainController.index);

mainRouter.get('/productDetail', mainController.productDetail);

mainRouter.get('/register', mainController.register);

mainRouter.get('/login', mainController.login);

mainRouter.get('/productCart', mainController.productCart);

mainRouter.get('/addProduct', mainController.addProduct);


module.exports=mainRouter