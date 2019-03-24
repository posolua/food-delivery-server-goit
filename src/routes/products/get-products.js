const Product = require("../../db/schemas/product");

const getAllProducts = (request, response) => {
  const query = request.query.categories;
  const category = query ? { categories: query } : {};
  const sendResponse = products => {
    response.set("Content-type", "application/json");
    response.status(200);
    products.length !== 0
      ? response.json({ status: "success", products })
      : response.json({ status: "No such products", products: [] });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: "product was not found"
    });
  };
  Product.find(category)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getAllProducts;
