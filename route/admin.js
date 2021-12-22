const express=require('express');
const router=express.Router();
const {getadmins,getadmin,createadmin,updateadmin,deleteadmin}
=require('../controller/adminsignup.js');


//get all data and post by admins
router.route('/')
.get(getadmins)
.post(createadmin)




//route using id
router
.route('/:id')
.get(getadmin)
.put(updateadmin)
.delete(deleteadmin)


module.exports=router;