const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    ID: {
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true
    },
    Channel:{
        type:String,
        required:true
    },
    Views:{
        type:Number,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Anchor:{
        type:String,
        required:true
    },

    
    
})

const VideoModel = mongoose.model('VideoModel', VideoSchema, 'Youtube')

module.exports = VideoModel;