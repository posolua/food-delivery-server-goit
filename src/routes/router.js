const mainRoute = require("./main/main");
const productsRoute = require("./products/products");
const signUpRoute = require("./users/signUp");

const router = {
  "/products": productsRoute,
  "/signup": signUpRoute,
  "/": mainRoute,
  default: mainRoute
};

module.exports = router;
