const { users } = require('./models');

users
  .destroy({
    where: { address: 'PSG' },
  })
  .then(() => {
    console.log('Berhasil menghapus data');
  });
