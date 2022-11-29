const authService = require('../services/authService');

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const { status, status_code, message, data } = await authService.register({
    name,
    email,
    password,
    role,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = { register };
