const express = require("express");
const router = express.Router();
const cors = require("cors");
const nextVidsData = __dirname + "/../../data/nextVids.json";
const mainVideoData = __dirname + "/../../data/mainVideo.json";
const helper = require("../../helper/helper");

let nextVids = require(nextVidsData);
let mainVids = require(mainVideoData); 

router.use(cors());

router.post("/", (req, res) => {
    const postDate = Date.now(); 
    const newId = helper.getNewId();

    const newVideo = {
        id: newId,
        title: req.body.title,
        channel: "Mohan Murr",
        image: "http://localhost:8080/upload.jpg"
    }

    const newVideoDetails = {
        id: newId,
        title: req.body.title,
        channel: "Mohan Murr",
        image: "http://localhost:8080/upload.jpg", 
        description: req.body.description, 
        views: "0", 
        likes: "0", 
        duration: "0", 
        video: "", 
        timestamp: postDate, 
        comments: [
            {
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            }
        ]
    }

    if (!newVideoDetails.title || !newVideoDetails.channel || !newVideoDetails.image || !newVideoDetails.description) {
        return res.status(400).json({
            errorMsg: "Please provide all required info to upload a video."
        });
    }
    nextVids.push(newVideo);
    mainVids.push(newVideoDetails);

    helper.writeJSONFile(nextVidsData, nextVids);
    helper.writeJSONFile(mainVideoData, mainVids);

    res.status(201).json({msg: "Upload successful."}); 
});

module.exports = router; 