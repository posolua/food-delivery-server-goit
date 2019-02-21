const https = require("https");
const url = require("url");

const morgan = require("morgan");
const router = require("./routes/router");

const logger = morgan("combined");
const ssl = require("./ssl_certificate/ssl");

const startServer = port => {
  const server = https.createServer(ssl, (request, response) => {
    const parsedUrl = url.parse(request.url);
    const pathName = "/" + parsedUrl.pathname.split("/")[1] || "/";
    const func = router[pathName] || router.default;

    logger(request, response, () => func(request, response));
  });

  server.listen(port);
  console.log(`server started at port - ${port}`);
};

module.exports = startServer;
