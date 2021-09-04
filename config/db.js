const mongoose = require('mongoose');

const connectDB = async () => {
    const con = await mongoose.connect(process.env.MONGO_URI,err => {
        if(err) throw err;
        console.log("Connected");
    },{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    });

    console.log(`MongoDB connected: ${con.connection.host}`);
}

module.exports = connectDB;