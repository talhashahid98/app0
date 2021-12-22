const mongoose=require('mongoose');

//linking
const servicedata=require('../models/servicedata');


//controller for getting all the services
exports.getservices= async (req,res) =>{

    const service=await servicedata.find()
    if(!service) {
        return next(
          "No services", 404);
    
      }
       
    
    res.status(200).json({
        success:true,
        count:service.length,
        data:service
    })

} 

//creating service
exports.createservice=async(req,res)=>{

    const service = await servicedata.create(req.body);

    res.status(201).json({
      success: true,
      data: service
    });
  

}

//get service by id
exports.getservice=async (req,res)=>{
    try{
        const service=await servicedata.findById(req.params.id);

        if(!service){
            res.status(400).json({success:false})
        }
        else{
            res.status(200).json({
                success:true,
                data:service
            })

        }

    }catch(err){
        res.status(400).json({success:false})
    }

}

//update service
exports.updateservice=async (req,res)=>{
    const service=await servicedata.findByIdAndUpdate(req.params.id,req.body,{
        new :true
    });
    if(!service){
        res.status(400).json({success:false})
    }
    
    res.status(200).json({
        success:true,
        data:service
    })
 
}

//delete service by id
exports.deleteservice=async (req,res)=>{
    
    const service=await servicedata.findByIdAndDelete(req.params.id);

    if(!service){
        res.status(400).json({success:false})
    }
    
    res.status(200).json({
        success:true,
        
    })
}
    