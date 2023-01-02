const express=require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController')

const upload = require('../middlewares/multer')

//rutas

/*** REGISTER ***/ 
usersRouter.get('/register', usersController.register); 
usersRouter.post('/register', usersController.charge)

/*** LOGIN ***/ 
usersRouter.get('/login', usersController.login);

/*** DETAIL USER ***/ 
usersRouter.get('/detailUser/:id/', usersController.detailUser);

/*** EDIT ONE USER ***/ 
usersRouter.get('/editUser/:id/', usersController.editUser); 
usersRouter.put('/editUser/:id/', usersController.updateUser); 

/*** DELETE ONE USER***/ 
usersRouter.post('/deleteUser/:id',usersController.destroyUser);


/*** PODUCTCART ***/ 
usersRouter.get('/productCart', usersController.productCart); 

module.exports=usersRouter