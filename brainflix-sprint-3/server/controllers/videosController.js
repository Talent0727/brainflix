const videos = require("../models/videosModel");

const listVideos = (_req, res) => {
  res.json(products.list());
};

const getVideoByID = (req, res) => {
  res.json(videos.getByID(req.params.id));
};

const addVideo = (req, res) => {
  console.log(req.body);
  if (!req.body.title || !req.body.description) {
    res.status(400).json({
      error: "POST body must contain all requiredProperties",
      requiredPropperties: ["id", "title", "description", "timestamp"],
    });
  }
  res.json(videos.add(req.body));
};

const deleteVideo = (req, res) => {
  res.json(videos.deleteVideo(req.params.id));
};

const updateVideo = (req, res) => {
  res.json(products.updateVideo(req.params.id, req.body));
};

module.exports = {
  listVideos,
  addVideo,
  getVideoByID,
  deleteVideo,
  updateVideo,
};
