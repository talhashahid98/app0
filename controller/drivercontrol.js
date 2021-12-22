const mongoose=require('mongoose');

//linking
const orderdata=require('../models/orderdata');
const driverdata=require('../models/driverdata')


//getting view of all the orders to driver
exports.getorders = async(req,res)=>{
    const order=await orderdata.find()
    if(!order) {
        return next(
          "No orders ", 404);
    
      }
    res.status(200).json({
        success:true,
        count:order.length,
        data:order
    })

}

//getting view of the order with id of order to the 

exports.getorder=async(req,res)=>{
    try{
        const order=await orderdata.findById(req.params.id);
    
        if(!order){
            res.status(400).json({success:false})
        }
        else{
            res.status(200).json({
                success:true,
                data:order
            })
    
        }

    }catch(err){
        res.status(400).json({success:false})
    }
}

//for bid by the driver
/* exports.createbid =async(req,res)=>{

const driver= await driverdata.create(req.body)
res.status(200).json({success:true, data:driver})
if(driver[0]){
    driver[0].bids.push(req.body.bids)
    const save = await driver.save()
    res.status(200).json({success:true, data:save})
}
} */

