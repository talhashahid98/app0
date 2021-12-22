const mongoose=require('mongoose');

const orderdata=require('../models/orderdata');
const userdata=require('../models/userdata');




exports.createorder=async (req,res)=>{

    const order= await orderdata.create(req.body)
    /* console.log("order ==>",order) */
    res.status(200).json({success:true, data:order})


}



exports.createbids=async (req,res)=>{

    const bids= await orderdata.findById(orderdataId)
    if(bids[0]){
        bids[0].bids.push(driverdataId);
        const save = await bids.save()
        res.status(200).json({success:true, data:save})
    }
}