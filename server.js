var express=require('express');
var bodyParser=require('body-parser')
var dotenv=require('dotenv')

//link
const connectDB=require("./config/db");
const admin=require('./route/admin');
const user=require('./route/user');
const payment=require('./route/payment');
const service=require('./route/service');
const uploadroute=require('./route/upload');
const adminlogin= require('./route/adminlogin');
const userlogin= require('./route/userlogin');
const order= require('./route/order');
const driver=require('./route/driver')
const chat=require('./route/chat');
const app=express();



//bodyparser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//routing admin and user signup
app.use('/signup/admin', admin);
app.use('/signup/user', user);


//routing for admin and user login
app.use('/signin/admin', adminlogin)
app.use('/signin/user', userlogin)



//routing for image
app.use('/upload', uploadroute)



//routing for payment and services
app.use('/payment', payment);
app.use('/service', service);



//routing for order
app.use('/order', order);

//routing for driver
app.use('/driver', driver)


//chat api using socketio
app.use('/chat', chat)


let port = process.env.port || 8080
//db connected and port
connectDB();
app.listen(port,()=>{
    console.log(`server started at ${port}`);
})