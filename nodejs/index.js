// const os = require('os');
// const luasSegitiga = require('./function/index.js');

// console.log(luasSegitiga(4, 3));
// console.log('Free Memory:', os.freemem());

const http = require('http'),
  path = require('path'),
  fs = require('fs');
const PUBLIC_DIRECTORY = path.join(__dirname, 'public');

const getHTML = (filename) => {
  const htmlFileIndex = path.join(PUBLIC_DIRECTORY, filename);
  const htmlIndex = fs.readFileSync(htmlFileIndex, 'utf-8');

  return htmlIndex;
};

const onRequest = (req, res) => {
  switch (req.url) {
    case '/':
      const htmlIndex = getHTML('index.html');

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(htmlIndex);

      return;

    case '/about':
      const aboutIndex = getHTML('about.html');

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(aboutIndex);

      return;

    case '/login':
      const loginIndex = getHTML('login.html');

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(loginIndex);

      return;

    case '/users':
      const users = [
        {
          id: 1,
          email: 'example@mail.com',
          name: 'example',
          password: 'example',
        },
        {
          id: 2,
          email: 'example1@mail.com',
          name: 'example1',
          password: 'example1',
        },
      ];

      const usersJSON = JSON.stringify(users);

      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(usersJSON);

      return;

    case '/products':
      const product = [
        {
          id: 1,
          name: 'Apel',
          price: '7000',
          stock: '20',
        },
        {
          id: 2,
          name: 'Mangga',
          price: '7000',
          stock: '30',
        },
      ];

      const productJSON = JSON.stringify(product);

      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(productJSON);

      return;

    case '/transactions':
      const transaction = [
        {
          id: 1,
          user_id: 1,
          product_id: 1,
          total_price: 35000,
          total_product: 5,
        },
        {
          id: 2,
          user_id: 2,
          product_id: 1,
          total_price: 35000,
          total_product: 5,
        },
      ];

      const transactionJSON = JSON.stringify(transaction);

      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(transactionJSON);

      return;
    default:
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(404);
      res.end(getHTML('404.html'));
  }
};

const server = http.createServer(onRequest);

server.listen(2000, '127.0.0.1', () => {
  console.log('Server is Running, please open http://localhost:2000');
});
