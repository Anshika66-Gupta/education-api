const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    video_id:{
        type:Number,
        unique:true,
        required:true
    },
    subject:{
        type:String,
        unique:false,
        required:true
    },
    chapter:{
        type:String,
        unique:false,
        required:true
    },
    video_url:{
        type:String,
        unique:true,
        required:true
    },
});

module.exports = mongoose.model('videos',videoSchema);