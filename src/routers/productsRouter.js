const express=require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController')

const upload = require('../middlewares/multer')

//rutas

/*** GET ALL PRODUCTS ***/ 
productsRouter.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
productsRouter.get('/create', productsController.create); 
productsRouter.post('/create', upload.any(''), productsController.store); 

/*** GET ONE PRODUCT ***/ 
productsRouter.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
productsRouter.get('/edit/:id/', productsController.edit); 
productsRouter.put('/edit/:id/', upload.any(''), productsController.update); 

/*** DELETE ONE PRODUCT***/ 
productsRouter.post('/delete/:id',productsController.destroy); 

module.exports=productsRouter