//make a file and append some text in it, then make a another file and copy the text of another file and delete the first file.

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file-1.txt');
const filePath2 = path.join(__dirname, 'file-2.txt');

//append the text in the file 
fs.appendFile(filePath, 'sample text', (err) => {
  if(err) throw err;
  console.log('Text is successfully appended in the file');
});


try {
  fs.copyFileSync(filePath, filePath2);
  console.log('File copied successfully.');
  fs.unlinkSync(filePath);
  console.log('File 1 is deleted');
} catch (err) {
  console.error('Error copying file:', err);
}