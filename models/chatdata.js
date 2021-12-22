const mongoose = require('mongoose')


const chatSchema= new mongoose.Schema({

to:{
type:String
},

from:{
type:String
},

message:{
    type:String
}, 

created:{

    type:String,
    default:Date
}

})
module.exports=mongoose.model('chatdata', chatSchema);