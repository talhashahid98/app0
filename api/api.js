const express = require('express');
const router = express.Router();

//Required api's 

const User = require('./Routes/User')
const twilio = require('./Routes/twilio')
const Message = require('./Routes/Message')


/*********Main Api**********/
router.use('/user',User);
router.use('/auth', twilio );
router.use('/Message', Message );

module.exports = router;