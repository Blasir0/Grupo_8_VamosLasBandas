const express=require('express');
const mainRouter = express.Router();
const mainController = require('../controllers/mainController')

//rutas

/*** GET ALL PRODUCTS ***/ 
router.get('/', mainController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', mainController.create); 
router.post('/create', mainController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', mainController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id/', mainController.edit); 
router.put('/edit/:id/', mainController.update); 

/*** DELETE ONE PRODUCT***/ 
router.post('/delete/:id', mainController.destroy); 

module.exports=mainRouter