// ************ Require's ************
const express = require('express');
const mainRouter = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

mainRouter.get('/', mainController.index); 
mainRouter.get('/search', mainController.search); 

/*** LOGIN & REGISTER ***/ 
mainRouter.get('/login', mainController.login); 
mainRouter.get('/register', mainController.register); 

/*** PODUCTCART ***/ 
mainRouter.get('/productCart', mainController.productCart); 

module.exports = mainRouter;
