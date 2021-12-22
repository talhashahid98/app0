const mongoose=require('mongoose');

const orderSchema= new mongoose.Schema({

servicetype:[{
    type:mongoose.Schema.ObjectId,
    ref:'servicedata',
    
}],
user:[{
    type:mongoose.Schema.ObjectId,
    ref:'userdata', 
}],

bids:[{
    type:String

}],

status:{
type:String,
enum:['Pending',"Approved","Canceled"]
}


})

module.exports=mongoose.model('orderdata', orderSchema);