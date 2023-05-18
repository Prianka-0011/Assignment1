const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const filePath = 'path/to/your/file.pdf';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/pdf' });
      res.end(data);
    }
  });
});

const port = 3000; // Replace with your desired port number
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});