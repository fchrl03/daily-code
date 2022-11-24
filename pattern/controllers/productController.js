const { products } = require('../models');

async function productCreateHandler(req, res) {
  try {
    const post = await products.create({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
    });
    res.status(200).json({
      status: 'OK',
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: 'FAIL',
      message: err.message,
      data: null,
    });
  }
}

async function productGetAllHandler(req, res) {
  try {
    const post = await products.findAll();
    res.status(200).json({
      status: 'OK',
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: 'FAIL',
      message: err.message,
    });
  }
}

async function productGetDetailHandler(req, res) {
  try {
    const post = await products.findByPk(req.params.id);
    res.status(200).json({
      status: 'OK',
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: 'FAIL',
      message: err.message,
    });
  }
}

async function productUpdateHandler(req, res) {
  try {
    const post = await products.update(
      {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      status: 'OK',
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: 'FAIL',
      message: err.message,
    });
  }
}

async function productDeleteHandler(req, res) {
  try {
    const post = await products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: 'OK',
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: 'FAIL',
      message: err.message,
    });
  }
}

module.exports = { productCreateHandler, productGetAllHandler, productGetDetailHandler, productDeleteHandler, productUpdateHandler };
