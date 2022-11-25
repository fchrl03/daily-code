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

  static async getAll() {
    try {
      const getAllProduct = await productRepository.getAll();
      return {
        status: true,
        status_code: 200,
        message: 'Find all product successfully',
        data: getAllProduct,
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

  static async getById({ id }) {
    try {
      const getDetailProduct = await productRepository.getByID({ id });
      return {
        status: true,
        status_code: 200,
        message: 'Get product by ID successfully',
        data: getDetailProduct,
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

  static async update({ name, price, stock, id }) {
    try {
      const updatedPost = await productRepository.updateByID({
        id,
        name,
        price,
        stock,
      });
      return {
        status: true,
        status_code: 200,
        message: 'Update product successfully',
        data: updatedPost,
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

  static async deleteById({ id }) {
    try {
      const deleteProduct = await productRepository.deleteById({ id });
      return {
        status: true,
        status_code: 200,
        message: 'Delete product successfully',
        data: deleteProduct,
      };
    } catch {
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
