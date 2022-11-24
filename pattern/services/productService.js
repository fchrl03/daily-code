const productRepository = require('../repositories/productRepository');

class ProductService {
  static async create({ name, price, stock }) {
    try {
      if (!name) {
        return {
          status: false,
          status_code: 400,
          message: 'Nama Product harus di isi!',
          data: null,
        };
      }

      if (!price) {
        return {
          status: false,
          status_code: 400,
          message: 'Harga Product harus di isi!',
          data: null,
        };
      }

      if (!stock) {
        return {
          status: false,
          status_code: 400,
          message: 'Stok Product harus di isi!',
          data: null,
        };
      }

      const createdProduct = await productRepository.create({
        name,
        price,
        stock,
      });

      return {
        status: true,
        status_code: 201,
        message: 'Create Product successfully',
        data: {
          createdProduct,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: null,
      };
    }
  }
}

module.exports = ProductService;
