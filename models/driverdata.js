const mongoose=require('mongoose');



const driverSchema= new mongoose.Schema({
    
    bids:[{
        type: String
    }]

})

module.exports=mongoose.model('driverdata',driverSchema)