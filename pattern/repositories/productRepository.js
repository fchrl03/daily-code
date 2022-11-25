const { products } = require('../models');

class ProductRepository {
  static async create({ name, price, stock }) {
    const createdProduct = await products.create({
      name,
      price,
      stock,
    });
    return createdProduct;
  }

  static async getAll() {
    const getAllProduct = await products.findAll();
    return getAllProduct;
  }

  static async getByID({ id }) {
    const getProduct = await products.findOne({ where: { id } });
    return getProduct;
  }

  static async deleteById({ id }) {
    const deleteProduct = await products.destroy({ where: { id } });
    return deleteProduct;
  }

  static async updateByID({ name, price, stock, id }) {
    const updatedProduct = await products.update(
      {
        name,
        price,
        stock,
      },
      { where: { id } }
    );
    return updatedProduct;
  }
}

module.exports = ProductRepository;
