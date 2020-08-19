const express = require("express");
const router = express.Router();
const videosController = require("../controllers/videosController");

// videos routes
router.get("/videos", videosController.listVideos);
router.post("/videos", videosController.addVideo);
router.get("/videos/:id", videosController.getVideoByID);
router.put("/videos:id", videosController.updateVideo);
router.delete("/videos/:id", videosController.deleteVideo);

// export routes
module.exportes = router;
