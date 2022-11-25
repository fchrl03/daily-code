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

const getAllProduct = async (req, res) => {
  const { status, status_code, message, data } = await productService.getAll();
  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getDetailProduct = async (req, res) => {
  const { id } = req.params;
  const { status, status_code, message, data } = await productService.getById({ id });
  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const updatedProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  const { status, status_code, message, data } = await productService.update({
    id,
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

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const { status, status_code, message, data } = await productService.deleteById({ id });
  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = { create, getAllProduct, deleteProductById, getDetailProduct, updatedProduct };
