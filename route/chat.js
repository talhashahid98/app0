const express=require('express');
const router = express.Router()

const {createchat, getuserchatbyid, getdriverchatbyid}=require('../controller/chatcontrol')


router.route('/')
.post(createchat)



router.route('/:firstid/:secondid')
//for getting data by id from specific customer to driver
.get(getuserchatbyid)
/* //for getting data by id from specific driver to customer
router.route("/:driverid/:userid")
.get(getdriverchatbyid) */

module.exports=router; 