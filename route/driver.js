const express=require('express');
const router=express.Router();

const {getorders,getorder,createbid}= require('../controller/drivercontrol');


//for orders received by the driver
router.route('/')
.get(getorders)




//for orders with id received by the driver
router.route('/:id')
.get(getorder)

module.exports=router;