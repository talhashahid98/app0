const express=require('express');
const router=express.Router();
const {createorder}= require('../controller/ordercontrol.js')

router.route('/')
.post(createorder)



 
module.exports=router;