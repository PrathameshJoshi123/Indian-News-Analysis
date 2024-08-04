const express = require('express')
const cors = require('cors')
const { connectDb } = require('./connectDb/connectDb')
const AnchorRouter = require('../src/route/anchor')
const ChannelRouter = require('../src/route/channel')
const VideoRouter = require('../src/route/video')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/anchor', AnchorRouter)
app.use('/channel', ChannelRouter)
app.use('/videos', VideoRouter)

connectDb().then(()=>{
    try{
        app.listen(4000, ()=>{
            console.log("Server connected successfully")
        })
    } catch(err){
        console.log("Server connection error", err)
    }
})