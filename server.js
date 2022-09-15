const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (Date.now() % 2) {
    res.end('<html><body><p>Hello World</p></body></html>');
  } else {
    res.write('<html><body><p>Hello W');
    res.socket.destroy();
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});