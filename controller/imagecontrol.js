const mongoose=require('mongoose');
const multer = require('multer');
const imagedata = require('../models/imagedata');
const userdata = require('../models/userdata');


const uploads= multer({dest:'./uploads'})


exports.uploadimage = async (req, res, next) => {
    try{

        const file= req.file;
        console.log(file)
        res.status(201).json({messsage:"file uploaded successfully"})

    }catch(error){

        res.status(400).send(error.message)
    }
}