const express = require("express");
const app = express();
const fs = require("fs").promises;
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let db;

const loadVideoData = async () => {
  try {
    const data = await fs.readFile("./db/videos.json", "utf-8");
    db = JSON.parse(data);
  } catch (err) {
    throw err;
  }
};

loadVideoData();

app.get("/", (req, res) => {
  res.json({
    welcome: "Welcome to my API",
  });
});

app.get("/videos", (req, res) => {
  const sideBarVideos = db.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
      numberOfComments: video.comments.length,
    };
  });
  res.json(sideBarVideos);
});

app.post("/videos", (req, res) => {
  const { title, description } = req.body;
  if (title.trim(" ") === "" && description.trim(" ") === "") {
    res.status(400).json({ message: `Title and Description cannot be empty` });
    return;
  }
  const newVideo = {
    id: uuidv4(),
    title,
    channel: "Mohan Muruge",
    image:
      "https://images.unsplash.com/photo-1497015289639-54688650d173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
    description,
    views: "0",
    likes: "0",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: new Date().getTime(),
    comments: [],
  };
  db = [newVideo, ...db];
  res.status(201).json({ id: newVideo.id });
});

app.get("/videos/:id", (req, res) => {
  const vidId = req.params.id;
  const video = db.find((vidObj) => vidObj.id === vidId);
  if (!video) {
    res.status(404).json({ message: `Video with the id ${vidId} not found` });
    return;
  }

  res.json(video);
});

app.post("/videos/:id/comments", (req, res) => {
  const vidId = req.params.id;
  const videoIndex = db.findIndex((vidObj) => vidObj.id === vidId);
  if (videoIndex === -1) {
    res.status(404).json({ message: `Video with the id ${vidId} not found` });
    return;
  }

  const video = db[videoIndex];
  const { comment, name } = req.body;
  const newComment = {
    name,
    comment,
    id: uuidv4(),
    likes: 0,
    timestamp: new Date().getTime(),
  };
  const videoComments = video.comments;
  video.comments = [newComment, ...videoComments];
  db[videoIndex] = video;
  res.json(newComment);
});

app.put("/videos/:id/likes", (req, res) => {
  const vidId = req.params.id;
  const videoIndex = db.findIndex((vidObj) => vidObj.id === vidId);
  if (videoIndex === -1) {
    res.status(404).json({ message: `Video with the id ${vidId} not found` });
    return;
  }
  const video = db[videoIndex];
  video.likes = +video.likes + 1;
  db[videoIndex] = video;
  res.status(200).json({ likes_count: video.likes });
});

app.listen(5000, console.log("http://localhost:5000"));
