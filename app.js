const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
var bodyParser = require('body-parser')
// const userRoutes = require('./route');
 const globalErrHandler = require('./utils/errorController');
 const AppError = require('./utils/appError');
const app = express();
//swagger
// const swaggerUi = require('swagger-ui-express');
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./swagger/swagger.yaml');

//multer
const upload = require('./utils/multer')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/apis', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '15kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// //swaggerDocument
// app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//routes URL
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



// Routes
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



// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;