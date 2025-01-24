const { log } = require('console');
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  // Build the file path based on the URL
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  console.log('Request URL:', req.url);
  console.log('Resolved file path:', filePath);

  // Get the file extension
  const extName = String(path.extname(filePath)).toLowerCase();

  console.log('File Extension:', extName);

  // Define MIME types for different file extensions
  const mimeType = {
    '.html': 'text/html',
    '.css': 'text/css', // Corrected 'text/ss' to 'text/css'
    '.js': 'text/javascript', // Corrected 'text/javaScript' to 'text/javascript'
    '.png': 'image/png', // Corrected mime type for PNG
  };

  // Assign content type from mimeType object, or default to 'application/octet-stream'
  const contentType = mimeType[extName] || 'application/octet-stream';
  console.log('Content-Type:', contentType);

  // Read the file and serve it
  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.error('Error reading file:', err);
      // Handle file not found (404 error)
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        // Handle other errors (e.g., permission issues) (500 error)
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 Internal Server Error</h1>');
      }
    } else {
      // Serve the file with the correct MIME type
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
