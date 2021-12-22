const express=require('express');
const router=express.Router();
const {userlogin}= require('../controller/loginusercontrol')

router.route('/').post(userlogin)

module.exports=router;