const express=require('express');
const usersAPIRouter = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController')

usersAPIRouter.get('/list', usersAPIController.listUsers)
usersAPIRouter.get('/list/:id', usersAPIController.showUser)

module.exports = usersAPIRouter