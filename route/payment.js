const express=require('express');
const router=express.Router();
const {getpayments,getpayment,createpayment,updatepayment,deletepayment}
=require('../controller/paymentcontrol.js');



//get all data and post
router.route('/')
.get(getpayments)
.post(createpayment)



//route using id
router
.route('/:id')
.get(getpayment)
.put(updatepayment)
.delete(deletepayment)



module.exports=router; 