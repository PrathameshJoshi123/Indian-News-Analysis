const express = require('express');
const AnchorModel = require('../model/Anchor')

const router = express.Router();

router.get('/getAnchors', async(req, res)=>{
    try{
        const anchor = await AnchorModel.find();
        res.json(anchor);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.get('/getAnchor/:anchorName', async(req,res)=>{
    try{
        const anchor = await AnchorModel.find({Anchor: req.params.anchorName})
        res.json(anchor);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
})
module.exports = router;