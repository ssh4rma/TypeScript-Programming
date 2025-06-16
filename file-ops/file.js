const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

// 1. Write to a file
fs.writeFile(filePath, 'Hello, this is a sample text file.', (err) => {
  if (err) throw err;
  console.log('File created and written successfully.');

  // 2. Append to the file
  fs.appendFile(filePath, '\nThis line is appended.', (err) => {
    if (err) throw err;
    console.log('Data appended successfully.');

    // 3. Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File Content:\n', data);

      // 4. Rename the file
      const newPath = path.join(__dirname, 'renamed_example.txt');
      fs.rename(filePath, newPath, (err) => {
        if (err) throw err;
        console.log('File renamed successfully.');

        // 5. Delete the file
        fs.unlink(newPath, (err) => {
          if (err) throw err;
          console.log('File deleted successfully.');
        });
      });
    });
  });
});
