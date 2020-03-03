const express = require("express");
const router = express.Router();
const cors = require("cors"); 
const nextVidsData = __dirname + "/../../data/nextVids.json";
const mainVideoData = __dirname + "/../../data/mainVideo.json"; 
const helper = require("../../helper/helper");

let nextVids = require(nextVidsData);
let mainVideo = require(mainVideoData);

router.use(cors()); 

router.get("/", (req, res) => {
    res.json(nextVids); 
});

router.get("/:id", (req, res) => {
    const found = mainVideo.some(video => video.id === req.params.id);
    if (found) {
        res.json(mainVideo.filter(video => video.id === req.params.id))
    } else {
        res.status(400).json({
            errorMessage: `Video with id ${req.params.id} not found`
        })
    }
});

module.exports = router; 