const express = require("express");
const mainRoute = require("./main/main");
const getImageRoute = require("./images/get-image");
const getUser = require("./users/get-user");
const getSaveImageHandlers = require("./images/save-image-multipart");
const getProductById = require("./products/getProductById");
const getProducts = require("./products/getProducts");

const createOrders = require("./orders/create-orders");
const createUser = require("./users/create-user");

const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .get("/image", getImageRoute)
  .get("/users/:userId", getUser)
  .get("/products", getProducts)
  .get("/products/:id", getProductById)

  .post("/users", createUser)
  .post("/orders", createOrders)
  .post("/image", getSaveImageHandlers());

module.exports = apiRoutes;
