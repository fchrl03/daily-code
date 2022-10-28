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
