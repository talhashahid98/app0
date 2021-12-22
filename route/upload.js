const express=require('express');

//const {upload} = require('../middleware/imagemiddle');

const userdata = require('../models/userdata')

const router= express.Router();

const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
     
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, 'image-' + Date.now() + file.originalname)
    }
})
var upload = multer({ storage: storage })


router.route('/').post(upload.single('image'),async (req,res)=>{

    console.log("req.body :",req.body)
  
    const record = await userdata.findByIdAndUpdate(req.body.userId,{Image:req.file.path},{
        new :true
    });
    console.log("record",record)
})

module.exports=router;