'use strict';

const fs = require('fs');
let reader = module.exports = {};

reader.reader = (filePaths, callback) => {
  let results = [], i = 0;
  fs.readFile(filePaths[i], (err, data) => {
    if(err) return callback(err);
    results.push(data.toString());
    i++;
    fs.readFile(filePaths[i], (err, data) => {
      if (err) return callback(err);
      results.push(data.toString());
      i++;
      fs.readFile(filePaths[i], (err, data) => {
        if (err) return callback(err);
        results.push(data.toString());
        console.log(results);
        callback(err, results);
      });
    });
  });
};