const { users } = require('../models');

class UserRepository {
  static async getAll() {
    const getAllUser = await users.findAll();
    return getAllUser;
  }

  static async create({ name, email, password, role }) {
    const createdUser = await users.create({
      name,
      email,
      password,
      role,
    });
    return createdUser;
  }

  static async getByID({ id }) {
    const getUser = await users.findOne({ where: { id } });
    return getUser;
  }

  static async getByEmail({ email }) {
    const getUser = await users.findOne({ where: { email } });
    return getUser;
  }

  static async deleteById({ id }) {
    const deleteUser = await users.destroy({ where: { id } });
    return deleteUser;
  }

  static async updateByID({ name, email, password, role, id }) {
    const updatedUser = await users.update(
      {
        name,
        email,
        password,
        role,
      },
      { where: { id } }
    );
    return updatedUser;
  }
}

module.exports = UserRepository;
