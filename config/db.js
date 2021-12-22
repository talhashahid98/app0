const mongoose=require("mongoose");
const dotenv= require('dotenv').config();

const connectDB=async()=>{
    mongoose.connect(process.env.db_url,
    {
        useNewUrlParser:true,
    })
    console.log("mongodb connected");
}

module.exports=connectDB;