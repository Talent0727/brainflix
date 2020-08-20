const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    welcome: "Welcome to my API",
  });
});

app.get("/videos", (req, res) => {
  loadVideoData((videos) => {
    const sideBarVideos = videos.map((video) => {
      return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
      };
    });
    res.json(sideBarVideos);
  });
});

app.get("/videos/:id", (req, res) => {
  const vidId = req.params.id;
  loadVideoData((videos) => {
    const vidIndex = videos.findIndex((vidObj) => vidObj.id === vidId);
    if (vidIndex !== -1) {
      res.json(videos[vidIndex]);
    } else {
      res.status(404).json({ message: `Video with the id ${vidId} not found` });
    }
  });
});

const loadVideoData = (callback) => {
  fs.readFile("./db/videos.json", (err, data) => {
    if (err) throw err;
    const videos = JSON.parse(data);
    callback(videos);
  });
};

app.listen(5000, console.log("http://localhost:5000"));
