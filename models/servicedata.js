const mongoose=require('mongoose');


const serviceSchema= new mongoose.Schema({

    servicetype:{
        type:String,
        required:true

    },
    location: {
     type:String
    },
    serviceprice:{
        type:String,
        
    },

    additionaldetail:{
        type:String
    }



})

module.exports=mongoose.model('servicedata', serviceSchema);