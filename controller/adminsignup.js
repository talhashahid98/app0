const mongoose=require('mongoose');

//linking
const admindata = require('../models/admindata');





//for getting all the admin
exports.getadmins= async (req,res) =>{
try{
    const admin=await admindata.find();
    res.status(200).json({
        success:true,
        data:admin
    })
}catch(err){
    res.status(400).json({success:false , message:'not found'});

}
}

//for create(post) the new admin
exports.createadmin=async (req,res) =>{
   
    try{
        const admin = await admindata.create({...req.body});
            
           res.status(200).json({
               success:true,
               data:admin
           })
         }catch(err){
             console.log("error",err)
             res.status(400).json({
                 success: false, message: "Error!  admin Not Added "
             })
 
         
         }
} 
    
//for getting admin by id
exports.getadmin=async (req,res)=>{
    try{
        const admin=await admindata.findById(req.params.id);

        if(!admin){
            res.status(400).json({success:false})
        }
        else{
            res.status(200).json({
                success:true,
                data:admin
            })

        }
        
       

    }catch(err){
        res.status(400).json({success:false})
    }
       


}
//update admin
exports.updateadmin=async (req,res)=>{
    const admin=await admindata.findByIdAndUpdate(req.params.id,req.body,{
        new :true
    });
    if(!admin){
        res.status(400).json({success:false})
    }
    
    res.status(200).json({
        success:true,
        data:admin
    })
 
}

//delete admin by id
exports.deleteadmin=async (req,res)=>{
    
    const admin=await admindata.findByIdAndDelete(req.params.id);

    if(!admin){
        res.status(400).json({success:false})
    }
    
    res.status(200).json({
        success:true,
        
    })
}
