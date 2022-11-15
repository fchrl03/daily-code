const { users } = require('./models');

const query = {
  where: { id: 1 },
};

users
  .update(
    {
      address: 'PSG',
    },
    query
  )
  .then(() => {
    console.log('User berhasil di update');
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });
