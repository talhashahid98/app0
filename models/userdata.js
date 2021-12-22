const mongoose=require('mongoose');
const argon2= require('argon2');

const userSchema= new mongoose.Schema({

    
    
    fullname:{
        type:String,
        required:true,
        
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
     type:String,
     required:true,
    
     
    } ,
    cardnumber:{
        type:String,
        required:true,
        
    },
    expires:{
        type:String
    },
    Image:{
        type:String
    },
    type:{
        type:String,
        enum:['customer',"driver"]
        }

    
    })

    userSchema.pre('save', async function(next) {
        this.password = await argon2.hash(this.password);
        next();
      })
     
    
    module.exports=mongoose.model('userdata', userSchema);