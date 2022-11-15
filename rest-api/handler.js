const User = require('./user');

function handleCreateUser(req, res) {
  const user = User.create(req.body);

  res.status(200).json(user);
}

function handleListUser(req, res) {
  const user = User.list();

  res.status(200).json(user);
}

function handleGetUser(req, res) {
  const user = req.user;

  res.status(200).json(user);
}

function handleUpdateUser(req, res) {
  // const user = req.user;

  User.update(req.body, req.params);
  const user = User.list();
  res.status(200).json(user);
}

function handleDeleteUser(req, res) {
  // const user = req.user;

  User.delete(req.params.id);

  res.status(200).send('Berhasil Hapus Data');
}

module.exports = {
  handleCreateUser,
  handleDeleteUser,
  handleGetUser,
  handleListUser,
  handleUpdateUser,
};
