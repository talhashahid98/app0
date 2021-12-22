const express=require('express');
const router=express.Router();

const {edituser,creatinguser}
=require('../controller/usersignup.js');
//for editing by user
router
.route('/:id')
.put(edituser)


//for creating by user
router.route('/')
.post(creatinguser)



module.exports=router;