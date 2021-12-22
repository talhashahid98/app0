const jwt=require('jsonwebtoken');
const argon2=require('argon2')

//linking
const userdata = require('../models/userdata');


exports.userlogin= async (req,res)=>{
    console.log("Req", req.body)
    const user=await userdata.find({ email: req.body.email });
    console.log("user=", user[0])
    if(user[0]){
        if (await argon2.verify(user[0].password, req.body.password)) {
            const token = signToken(user[0]);
            return res.status(200).json({
                success: true, message: "Login Successfully", token, user
            })
        }
        else {
            throw new Error('Error! Invalid Password');
        }

    }}
    
    const signToken = (user) => {
        const payload = {
            userdata: {
                id: user._id,
            },
        };
        return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "3hr",  
        });

}