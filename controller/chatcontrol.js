const mongoose=require('mongoose');

const chatdata= require('../models/chatdata')

//creating chat
exports.createchat= async (req,res)=>{
    try{
        const chat = await chatdata.create({...req.body});
            
           res.status(200).json({
               success:true,
               data:chat
           })
         }catch(err){
             console.log("error",err)
             res.status(400).json({
                 success: false
             })
 
         
         }
}


//controller for getting chats from specific customer to driver id
exports.getuserchatbyid=async(req, res)=>{
    const allChat=await chatdata.find({from:req.params.firstid, to:req.params.secondid });
    if(req.params.firstid==allChat[0].from && req.params.secondid==allChat[0].to){
        
       
        res.status(200).json({
            success:true,
            data:allChat
        })
    }
    else if(req.params.secondid==allChat[0].from  && firstid==allChat[0].to ) {

        
        res.status(200).json({
            success:true,
            data:allChat
        })
    }
    else{
        res.status(400).json({success:false, msg:"not found chat"})
    }
    
}
 
/* exports.getuserchatbyid=async (req,res)=>{
try{
    const allChat=await chatdata.find({from:req.params.firstid, to:req.params.secid });
    if(allChat){
        res.status(200).json({
            success:true,
          data:allChat
    })

}
const driverchat=await chatdata.find({from:req.params.secid, to:req.params.firstid });
if(driverchat){
    res.status(200).json({
        success:true,
      data:allChat
})
}
else{
    console.log("not found")
}
}
catch(err){
    res.status(400).json({success:false})
}
}  */








/* 
//controller for getting chats of specific driver and customer id
exports.getdriverchatbyid= async(req,res)=>{
    try{
        
        const driverchat=await chatdata.find({from:req.params.secid, to:req.params.firstid });
        

        if(!driverchat ){
            res.status(400).json({success:false, message:"not found"})
        }
        else{
            res.status(200).json({
                success:true,
              data:driverchat
            })

        }
 
    }catch(err){
        res.status(400).json({success:false})
    }
       


}
 */
