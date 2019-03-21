const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = require("./modules/app");
const morgan = require("morgan");
const router = require("./routes/router");
const errorHandler = (req, res, next) => {
  res.status(500).send("No such page");
  next();
};

const staticPath = path.join(__dirname, "..", "assets");

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use(express.static(staticPath))
    .use("/", router)
    .use(errorHandler);

  app.listen(port);

  console.log("Server was started at http://localhost:" + port);
};

module.exports = startServer;
