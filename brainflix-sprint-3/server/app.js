const express = require("express");
const app = express();
const port = 5000;
const videosRoute = require("./routes/videosRoute");

// add middleware to help work with req.body
app.use(express.json());

// root url of server
app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

// products endpoint, setup using express.Router()
app.use("/videos", videosRoute);

// listen, start the application
app.listen(port, () => console.log(`listening at: http://localhost:${port}`));
