const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

// 1. Write to a file
fs.writeFile(filePath, 'Hello, this is a sample text file.', (err) => {
  if (err) throw err;
  console.log('✅ File created and written successfully.');
});