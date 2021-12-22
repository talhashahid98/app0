const express = require('express');
const route = express.Router();
const UserServices = require('../../Services/userService')
const middleware = require('../../utils/Middleware_validation')

const { authenticate } = require('../Middleware/auth')
/***************Routes************/


route.post('/signup', UserServices.SignUp);
route.post('/login',UserServices.Login);
route.post('/update',UserServices.Update);

module.exports = route;