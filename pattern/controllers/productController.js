const productService = require('../services/productService');

const create = async (req, res) => {
  const { name, price, stock } = req.body;

  const { status, status_code, message, data } = await productService.create({
    name,
    price,
    stock,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = { create };
