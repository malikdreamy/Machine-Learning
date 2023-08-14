var fs = require('fs');

//writing a file
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  //appending to file
  fs.appendFile('mynewfile3.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

  const filePath = './mynewfile3.txt';

// Reading the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // File content is available in the 'data' variable
  console.log(data);
});