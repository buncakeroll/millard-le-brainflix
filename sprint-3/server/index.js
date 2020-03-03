const express = require("express");
const cors = require("cors"); 

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(express.static("public")); 

const videoRouter = require("./routes/api/videos");
const uploadRouter = require("./routes/api/upload"); 

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.json({
        msg: "You can perform these requests from this API: GET/videos ---> response = json, array of nextVideo objects || GET/videos/:id ---> response = json, object of detailed information corresponding to the :id || POST/upload ---> response = alert of success/failure of video upload"
    });
})

app.use("/videos", videoRouter);
app.use("/upload", uploadRouter); 

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
})