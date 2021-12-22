const mongoose=require("mongoose");
const dotenv= require('dotenv').config();

const connectDB=async()=>{
    mongoose.connect(process.env.db_url || 'mongodb+srv://new1:new12@cluster0.uyoov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
    })
    console.log("mongodb connected");
}

module.exports=connectDB;