const express=require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController')

//rutas

/*** GET ALL PRODUCTS ***/ 
productsRouter.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
productsRouter.get('/create', productsController.create); 
productsRouter.post('/create', productsController.store); 

/*** GET ONE PRODUCT ***/ 
productsRouter.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
productsRouter.get('/edit/:id/', productsController.edit); 
productsRouter.put('/edit/:id/', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
productsRouter.post('/delete/:id', productsController.destroy); 

/*** LOGIN & REGISTER ***/ 
productsRouter.get('/login', productsController.login); 
productsRouter.get('/register', productsController.register); 

/*** PODUCTCART ***/ 
productsRouter.get('/productCart', productsController.productCart); 

module.exports=productsRouter