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


/*** REGISTER ***/ 
productsRouter.get('/register', productsController.register); 
productsRouter.post('/register', productsController.charge)

/*** LOGIN ***/ 
productsRouter.get('/login', productsController.login);

/*** DETAIL USER ***/ 
productsRouter.get('/detailUser/:id/', productsController.detailUser);

/*** EDIT ONE USER ***/ 
productsRouter.get('/editUser/:id/', productsController.editUser); 
productsRouter.put('/editUser/:id/', productsController.updateUser); 

/*** DELETE ONE USER***/ 
productsRouter.post('/delete/:id',productsController.destroyUser);


/*** PODUCTCART ***/ 
productsRouter.get('/productCart', productsController.productCart); 

module.exports=productsRouter