const { users } = require('./models');

users
  .findOne({
    where: { id: 1 },
  })
  .then((user) => {
    console.log(user);
  });
