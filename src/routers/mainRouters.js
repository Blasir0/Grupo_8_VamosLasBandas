const express=require('express');
const mainRouter = express.Router();
const mainController = require('../controllers/mainController')

//rutas

/*** GET ALL PRODUCTS ***/ 
mainRouter.get('/', mainController.index); 

/*** CREATE ONE PRODUCT ***/ 
mainRouter.get('/create', mainController.create); 
mainRouter.post('/create', mainController.store); 

/*** GET ONE PRODUCT ***/ 
mainRouter.get('/detail/:id/', mainController.detail); 

/*** EDIT ONE PRODUCT ***/ 
mainRouter.get('/edit/:id/', mainController.edit); 
mainRouter.put('/edit/:id/', mainController.update); 

/*** DELETE ONE PRODUCT***/ 
mainRouter.post('/delete/:id', mainController.destroy); 

/*** LOGIN & REGISTER ***/ 
mainRouter.get('/login', mainController.login); 
mainRouter.get('/register', mainController.register); 

/*** PODUCTCART ***/ 
mainRouter.get('/productCart', mainController.productCart); 

module.exports=mainRouter