'use strict';

const fs = require('fs');
let reader = module.exports = {};

reader.reader = (filePaths, callback) => {
  let results = [];
  for (i in arr) {
    fs.readFile(filePaths[i], (err, data) => {
      if (err) return console.error(err)
      let dataText = data.toString();
      results.push(dataText);
    });
  }
};





//ensure that 