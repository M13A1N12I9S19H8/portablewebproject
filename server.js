const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to serve static files from the 'src' directory
app.use('/src', express.static(path.join(__dirname, 'src')));

// Root route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to list files in the specified directory
app.get('/list/:type', (req, res) => {
  const type = req.params.type;
  const directoryPath = path.join(__dirname, 'src', type);
  
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Failed to list files:', err);
      return res.status(500).send('Server Error');
    }
    
    // Send file names as plain text separated by newlines
    res.send(files.join('\n'));
  });
});

// Catch-all route for handling other requests
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
