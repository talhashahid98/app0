const express = require('express');
const route = express.Router();
const userService = require('../../Services/userService')
const MiddleWare = require('../../utils/Middleware_validation')

/***************Routes************/


route.post('/msg', async (req, res) => {
    console.log("Twillio Hit")

    const client = require('twilio')( 'AC6ecc676e6fe394e1317ea59f481275be','64fd9ffbee767970c27be13fa6a0e204');

    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER || '+447488881193',
        to: process.env.CELL_PHONE_NUMBER || '+923155591241',
        body: "You just sent an SMS from Node.js using Twilio!"
    }).then((messages) => console.log("messsage", messages)).catch((error) => console.log("error", error));
   

    return res.status(200).json({
        success: true, message: "Twillio Hit"
    })

});



module.exports = route;