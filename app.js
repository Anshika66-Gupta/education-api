const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

//load env vars
dotenv.config({path:'./config.env'});

//connectDB
connectDB();

//routes
const videos = require("./routes/videos/video.router");

const app = express();

// body-parser

app.use(express.json());

//mount routes
app.use('/api/v1/videos',videos);

//Dev logging middleware

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//handle unhandled promise rejections

process.on('unhandledRejection',(err,promise) =>{
    console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(()=> process.exit(1));
});