const mongoose=require('mongoose');
const argon2 = require('argon2');
const adminSchema= new mongoose.Schema({

    fullname:{
        type:String,
        required:true,
        
    },
    username:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,

    },
    phone:{
     type:String,
     required:true,
    
     
    }
  
})
adminSchema.pre('save', async function(next) {
    this.password = await argon2.hash(this.password);
    next();
  })

module.exports=mongoose.model('admindata', adminSchema);