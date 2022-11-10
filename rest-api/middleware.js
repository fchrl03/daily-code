const User = require('./user');

function setUser(req, res, next) {
  const user = User.find(req.params.id);
  if (!user) {
    res.status(404).json({
      error: 'User not found!',
    });

    return;
  }

  req.user = user;
  next();
}

module.exports = {
  setUser,
};
