const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8081;
const discoveryPath = path.resolve(__dirname, '../../../frontend-discovery.json');

const server = http.createServer((req, res) => {
  if (req.url === '/frontend-discovery.json') {
    fs.readFile(discoveryPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Failed to read frontend-discovery.json');
        return;
      }
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(data);
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`Discovery server running at http://localhost:${PORT}`);
});
