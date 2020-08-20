const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const videosRoute = require("./routes/videosRoute");

// add middleware to help work with req.body
app.use(express.json());
// app.use(cors());
app.use(express.static("public"));

// root url of server
app.get("/videos", (req, res) => {
  loadVideoData((videos) => {
    const sideBarVideos = videos.map((video) => {
      return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
        description: video.description,
      };
    });
    res.json(sideBarVideos);
  });
});

app.get("/videos/:id", (req, res) => {
  const vidId = req.params.id;
  loadVideoData((videos) => {
    const vidIndex = videos.findIndex((vidObj) => vidObj.id === vidId);
    if (vidIndiex !== -1) {
      res.json(videos[vidIndex]);
    } else {
      res.status(404).json({ message: `Video with the id ${vidId} not found` });
    }
  });
});

// products endpoint, setup using express.Router()
app.use("/videos", videosRoute);

// listen, start the application
app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));
