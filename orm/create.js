const { users } = require('./models');

users
  .create({
    name: 'Messi',
    email: 'messi@example.com',
    password: 'example',
    address: 'Argentina',
  })
  .then((user) => {
    console.log(user);
  });
