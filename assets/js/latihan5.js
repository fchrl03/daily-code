const steamAccount = {
  email: 'fchrl@gmail.com',
  password: 'qwerty',
  isVerified: 'true',
  wallet: 100000,
  games: {
    name: 'SubwaySurfer',
    rank: '2',
  },
  friends: {
    email: 'fchrl@gmail.com',
    password: 'qwerty',
    isVerified: 'true',
    wallet: 100000,
    games: {
      name: 'SubwaySurfer',
      rank: '1',
    },
    email: 'fchrl@gmail.com',
    password: 'qwerty',
    isVerified: 'true',
    wallet: 100000,
    games: {
      name: 'SubwaySurfer',
      rank: '3',
    },
    email: 'fchrl@gmail.com',
    password: 'qwerty',
    isVerified: 'true',
    wallet: 100000,
    games: {
      name: 'SubwaySurfer',
      rank: '4',
    },
    email: 'fchrl@gmail.com',
    password: 'qwerty',
    isVerified: 'true',
    wallet: 100000,
    games: {
      name: 'SubwaySurfer',
      rank: '2',
    },
    email: 'fchrl@gmail.com',
    password: 'qwerty',
    isVerified: 'true',
    wallet: 100000,
    games: {
      name: 'SubwaySurfer',
      rank: '2',
    },
  },
};

console.log(steamAccount.friends.games[0].rank);

// let x = 10,
//   y = false;
// x++;
// console.log(x === 11 ? 'Sebelas' : 'Sepuluh');
// console.log(1 > 2 && 10 + 20);

// let i = 1;
// while (false) {
//   i++;
//   console.log('Muter');
//   if (i == 100) break;
// }

// const person = {
//   name: 'Sabrina',
//   dateOfBirth: '30-07-1999',
// };

// function getBirthMonth(person) {
//   const month = person.dateOfBirth;

//   switch (month) {
//     case '01':
//       return 'January';
//     case '07':
//       return 'July';
//     default:
//       return null;
//   }
// }

// console.log(getBirthMonth(person));

// function getSquareArea(size) {
//   size * size;
// }

// function getCubeVolume(size) {
//   return getSquareArea(size) * size;
// }

// const q = getCubeVolume(2);
// console.log(q);
