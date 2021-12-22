const mongoose=require('mongoose');


//linking
const paymentdata=require('../models/paymentdata');




//for getting all the payments
exports.getpayments= async (req,res) =>{

    
 
    const payment=await paymentdata.find().populate({
        path: "fullname",
        select:" fullname email"
    })
    if(!payment) {
        return next(
          `No course with the id of ${req.params.id}`, 404);
    
      }
       
    
    res.status(200).json({
        success:true,
        count:payment.length,
        data:payment
    })

} 

//for create(post) the new user
exports.createpayment=async (req,res) =>{

const payment = await paymentdata.create(req.body)
res.status(200).json({success:true, data:payment})
/* console.log("payment",payment) */


if(payment[0])
{
    payment[0].fullname.push(req.body.userdataId)
    const save = await payment.save()
    /* console.log("save",save) */
    res.status(200).json({success:true, data:save})
    
}

}

//for getting payment by id
exports.getpayment=async (req,res)=>{
try{
    const payment=await paymentdata.findById(req.params.id);

    if(!payment){
        res.status(400).json({success:false})
    }
    else{
        res.status(200).json({
            success:true,
            data:payment
        })

    }
    
   

}catch(err){
    res.status(400).json({success:false})
}

}
//update user
exports.updatepayment=async (req,res)=>{
const payment=await paymentdata.findByIdAndUpdate(req.params.id,req.body,{
    
    new :true
});
if(!user){
    res.status(400).json({success:false})
}

res.status(200).json({
    success:true,
    data:payment
})

}

//delete user by id
exports.deletepayment=async (req,res)=>{

const payment=await paymentdata.findByIdAndDelete(req.params.id);

if(!payment){
    res.status(400).json({success:false})
}

res.status(200).json({
    success:true,
    
})
}