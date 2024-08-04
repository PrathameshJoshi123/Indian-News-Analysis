const mongoose = require('mongoose')

const ChannelSchema = new mongoose.Schema({
    Channel: {
        type:String,
        required:true
    },
    Sentiment:{
        type:String,
        required:true
    },
    Views:{
        type: Number,
        required:true
    },
    Subscribers:{
        type:Number,
        required:true
    },
    Instagram:{
        type:String,
        required:true,
    },
    Youtube:{
        type:String,
        required:true,
    },
    Twitter:{
        type:String,
        required:true,
    },
    Whatsapp:{
        type:String,
        required:true,
    },
    Website:{
        type:String,
        required:true,
    },
    Image:{
        type:String,
        required:true,
    },

})

const ChannelModel = mongoose.model('ChannelModel', ChannelSchema, 'Channel')

module.exports = ChannelModel;