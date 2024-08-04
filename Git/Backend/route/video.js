const express = require('express');
const VideoModel = require('../model/Videos')

const router = express.Router();

router.get('/getVideos/:channelName/:page', async(req, res)=>{
    // try{
    //     const Video = await VideoModel.find({ Channel: req.params.channelName});
    //     res.json(Video);
    // } catch(err){
    //     res.status(500).json({ message: err.message });
    // }
    const { channelName, page } = req.params;
    const pageSize = 10000; // Number of items per page
    const skip = (page - 1) * pageSize;

    try {
        const videos = await VideoModel.find({ Channel: channelName })
        .skip(skip)
        .limit(pageSize);

        const totalVideos = await VideoModel.countDocuments({ Channel: channelName });

        res.json({
        totalItems: totalVideos,
        totalPages: Math.ceil(totalVideos / pageSize),
        currentPage: parseInt(page, 10),
        pageSize,
        videos,
        });
    } catch (error) {
        console.error('Error fetching videos:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})


module.exports = router;