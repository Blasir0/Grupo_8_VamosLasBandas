const express=require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController')

/*** CREATE ONE USER ***/ 
// usersController.get('/register', usersController.register); 
// usersController.post('/register', usersController.charge); 

module.exports=usersRouter