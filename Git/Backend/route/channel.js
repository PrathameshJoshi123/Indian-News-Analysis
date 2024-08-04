const express = require('express');
const ChannelModel = require('../model/Channel')

const router = express.Router();

router.get('/getChannels', async(req, res)=>{
    try{
        const Channel = await ChannelModel.find();
        res.json(Channel);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.get('/getChannel/:channelName', async(req,res)=>{
    try{
        const channel = await ChannelModel.find({Channel: req.params.channelName})
        res.json(channel);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
})
module.exports = router;