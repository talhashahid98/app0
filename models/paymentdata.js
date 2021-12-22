const mongoose=require('mongoose');

const paymentSchema = new mongoose.Schema({

fullname:[{
    type:mongoose.Schema.ObjectId ,
    ref: "userdata",
    required:true
    

}], 
    
cvc:{
    type:String
},

country:{
    type:String,
    required:true,
    
},
address:{
    type:String,
    
    
},

cardnumber:{
    type:String,
    required:true,
    unique:true
},
expires:{
    type:String
},



})



module.exports=mongoose.model('paymentdata', paymentSchema);