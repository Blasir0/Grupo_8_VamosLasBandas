const express=require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController')

const uploadProduct = require('../middlewares/multerProductMiddleware')

//rutas

/*** GET ALL PRODUCTS ***/ 
productsRouter.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
productsRouter.get('/create', productsController.create); 
productsRouter.post('/create', uploadProduct.single('image'), productsController.store); 

/*** GET ONE PRODUCT ***/ 
productsRouter.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
productsRouter.get('/edit/:id/', productsController.edit); 
productsRouter.put('/edit/:id/', uploadProduct.single('image'), productsController.update); 

/*** DELETE ONE PRODUCT***/ 
productsRouter.post('/delete/:id',productsController.destroy); 

module.exports=productsRouter