const express=require('express');
const router=express.Router();
const {getservices,getservice,createservice,updateservice,deleteservice}
=require('../controller/servicecontrol.js');

//get all data and post
router.route('/')
.get(getservices)
.post(createservice)



//route using id
router
.route('/:id')
.get(getservice)
.put(updateservice)
.delete(deleteservice)


module.exports=router;