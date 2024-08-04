const mongoose = require('mongoose')

const AnchorSchema = new mongoose.Schema({
    Anchor: {
        type:String,
        required:true
    },
    Channel:{
        type:String,
        required:true
    },
    Views:{
        type: Number,
        required:true
    },
    Positive:{
        type:Number,
        required:true
    },
    Negative:{
        type:Number,
        required:true
    },
    Image:{
        type:String,
        required:true,
    },
    Instagram:{
        type:String,
        required:true,
    },
    Twitter:{
        type:String,
        required:true,
    },
    Education:{
        type:String,
        required:true,
    }
})

const AnchorModel = mongoose.model('AnchorModel', AnchorSchema, 'Anchor')

module.exports = AnchorModel;