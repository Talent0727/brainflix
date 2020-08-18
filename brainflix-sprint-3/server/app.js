const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Brainflix Test</h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
