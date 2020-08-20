const fs = require("fs");
const path = require("path");
const moment = require("moment");
moment().format();
const { v4: uuidv4 } = require("uuid");

const videosFile = path.join(__dirname, "../db/videos.json");
const date = new Date();
const formattedTime = moment(date).fromNow();

const Video = (title, description) => {
  this.id = uuidv4();
  this.title = title;
  this.description = description;
  this.timestamp = formattedTime;
};

const list = () => {
  const data = fs.readFileSync(videosFile);
  return JSON.parse(data);
};

const add = (data) => {
  const videosArr = list();
  const video = new Video(data.title, data.description);
  videosArr.push(video);
  fs.writeFileSync(videosFile, JSON.stringify(videosArr));
  return videosArr;
};

const getByID = (id) => {
  const videosArr = list();
  return videosArr.filter((video) => video.id === id);
};

const deleteVideo = (id) => {
  const videosArr = list();
  const videoIndex = videosArr.findIndex((video) => video.id === id);
  videosArr.splice(videoIndex, 1);
  fs.writeFileSync(videosFile, JSON.stringify(videosArr));
  return videosArr;
};

const updateVideo = (id, data) => {
  const videosArr = list();
  const videoIndex = videosArr.findIndex((video) => video.id === id);
  videosArr.splice(videoIndex, 1, {
    id: id,
    title: data.title,
    description: data.description,
    timestamp: data.timestamp,
  });
  fs.writeFileSync(videosFile, JSON.stringify(videosArr));
  return videosArr;
};

module.exports = { list, add, getByID, deleteVideo, updateVideo };
