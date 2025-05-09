const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

//write to a file
fs.writeFile(filePath, 'Hello, this is a sample text file.', (err) => {
  if (err) throw err;
  console.log('File created and written successfully.');
});

//append text to file
fs.appendFile(filePath, '\nThis line is appended.', (err) => {
  if(err) throw err;
  console.log('Data is successfully appended'); 
})