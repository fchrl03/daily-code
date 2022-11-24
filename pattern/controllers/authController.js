const { users } = require('../models');

function encryptPassword(password) {
  return password;
}

async function registerAuth(req, res) {
  try {
    const email = req.body.email;
    const encryptedPassword = await encryptPassword(req.body.password);
    const user = await users.create({
      email,
      encryptedPassword,
    });
    res.status(201).json({
      status: 'OK',
      data: {
        email: user.email,
        password: user.password,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: 'FAIL',
      message: err.message,
    });
  }
}

module.exports = { registerAuth };
