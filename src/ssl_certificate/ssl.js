const fs = require("fs");
const path = require("path");

const ssl = {
  key: fs.readFileSync(path.join(__dirname, "./server.key")),
  cert: fs.readFileSync(path.join(__dirname, "./server.crt"))
};

module.exports = ssl;
