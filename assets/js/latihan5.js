const steamAccount = {
  email: 'example@gmail.com',
  password: 'qwerty',
  isVerified: 'true',
  wallet: 100000,
  games: {
    name: 'SubwaySurfer',
    rank: '2',
  },
  friends: [
    {
      email: 'cok@gmail.com',
      password: 'qwerty',
      isVerified: 'true',
      wallet: 100000,
      games: {
        name: 'SubwaySurfer',
        rank: '1',
      },
    },
    {
      email: 'coki@gmail.com',
      password: 'qwerty',
      isVerified: 'true',
      wallet: 100000,
      games: {
        name: 'SubwaySurfer',
        rank: '3',
      },
    },
    {
      email: 'ucok@gmail.com',
      password: 'qwerty',
      isVerified: 'true',
      wallet: 100000,
      games: {
        name: 'SubwaySurfer',
        rank: '4',
      },
    },
  ],
};
console.log(steamAccount.friends[0].games.rank);
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

// let x = 6,
//   y = 10;
// let equals = x + y;
// console.log(equals > 0 ? (equals % 2 === 0 ? 'Angka lebih dari 0 dan habis dibagi 2' : 'Angka lebih dari 0 namun tidak habis dibagi 2') : 'Angka tidak lebih dari 0');

// Latihan 1
let x = 50,
  y = 150,
  jumlahPenarikan;
if (x % 5 === 0) {
  jumlahPenarikan = y - x - 0.5;
  console.log(jumlahPenarikan);
} else {
  console.log('Penarikan Hanya Berlaku Kelipatan 5');
}

// Latihan 2
testScores = 40;
if (testScores > 90) {
  console.log('A');
} else if (testScores > 80 && testScores <= 90) {
  console.log('B');
} else if (testScores > 70 && testScores <= 80) {
  console.log('C');
} else if (testScores > 60 && testScores <= 70) {
  console.log('D');
} else {
  console.log('E');
}

// Latihan 3
let ipAddress = '192.168.0.1';
let result = ipAddress.replaceAll('.', '()');
console.log(result);

// Latihan 4
