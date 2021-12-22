const express = require('express');
const route = express.Router();
const MessageServices = require('../../Services/MessageServices')
const middleware = require('../../utils/Middleware_validation')

const { authenticate } = require('../Middleware/auth')
/***************Routes************/


route.post('/add', MessageServices.Add);
route.post('/GetAllMessages', MessageServices.GetAllMessages);
route.post('/GetAllConversations', MessageServices.GetAllConversations);

module.exports = route;