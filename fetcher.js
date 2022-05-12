const url = process.argv[2];
const filePath = process.argv[3];
const fs = require('fs');

const request = require('request');
request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
    }
  });
});


// use fs to write pageContents to filePath