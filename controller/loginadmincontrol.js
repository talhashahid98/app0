const jwt=require('jsonwebtoken');
const argon2=require('argon2')

//linking
const admindata = require('../models/admindata');

//login for the admin

exports.adminlogin= async (req,res)=>{
    console.log("Req", req.body)
    const admin=await admindata.find({ email: req.body.email });
    console.log("admin=", admin[0])
    if(admin[0]){
        if (await argon2.verify(admin[0].password, req.body.password)) {
            const token = signToken(admin[0]);
            return res.status(200).json({
                success: true, message: "Login Successfully", token, admin
            })
        }
        else {
            throw new Error('Error! Invalid Password');
        }

    }}
    
    const signToken = (admin) => {
        const payload = {
            admindata: {
                id: admin._id,
            },
        };
        return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "3hr",  
        });

}

