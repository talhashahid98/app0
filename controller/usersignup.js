const mongoose=require('mongoose');
const userdata = require('../models/userdata');



//for user profile
//editing user by /signup/user
exports.edituser=async(req,res)=>{
    const user=await userdata.updateOne({ "_id": req.params.id }, { ...req.body });
    
   if(!user.nModified>0){
       return res.status(200).json({
           success: true, message: "User Updated Successfully", data:user
       })

   }
   
   return res.status(400).json({
       success: false, message: "Error!  user Not-Updated Successfully"
   })
}




 
//creating by user
exports.creatinguser=async  (req,res,next) =>{
   
    
    try{
        const user = await userdata.create({...req.body});
           res.status(200).json({
               success:true,
               data:user
           })
         }catch(err){
             res.status(400).json({
                 success: false, message: "Error!  user Not Added Successfully"
             })
 
         
         }
 
         }