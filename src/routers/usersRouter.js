const express=require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController')

const uploadUser = require('../middlewares/multerUserMiddleware')
const validations = require('../middlewares/validateRegisterMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

//rutas

/*** REGISTER ***/ 
usersRouter.get('/register', guestMiddleware,usersController.register); 
usersRouter.post('/register', uploadUser.single('image'), validations, usersController.charge)

/*** LOGIN ***/ 
usersRouter.get('/login', guestMiddleware, usersController.login);
usersRouter.get('/login', usersController.loginCharge);

/*** LOGOUT ***/ 
usersRouter.get('/logout', usersController.logout);

/*** DETAIL USER ***/ 
usersRouter.get('/detailUser/:id/', authMiddleware,usersController.detailUser);

/*** EDIT ONE USER ***/ 
usersRouter.get('/editUser/:id/', usersController.editUser); 
usersRouter.put('/editUser/:id/', uploadUser.single('image'), validations,usersController.updateUser); 

/*** DELETE ONE USER***/ 
usersRouter.post('/deleteUser/:id',usersController.destroyUser);


/*** PODUCTCART ***/ 
usersRouter.get('/productCart', usersController.productCart); 

module.exports=usersRouter