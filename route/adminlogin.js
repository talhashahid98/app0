const express=require('express');
const router=express.Router();
const {adminlogin}= require('../controller/loginadmincontrol')

router.route('/').post(adminlogin)

module.exports=router;