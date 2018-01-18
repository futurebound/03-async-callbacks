'use strict';

const fs = require('fs')
const reader = module.exports = {};

reader.read = function(paths, cb) {
  let [one, two, three] = paths; 
  //shorthand for
  // let one = paths[0]
  // let two = paths[1]
  // let three = paths[2]

  let results = [];

  //nesting of these forces them to push to array in order, so actually using blocking
  fs.readFile(one, (err, data) => {
    if(err) {
      console.error(err)
      return cb(err)
    }

    results.push(data.toString('uft-8', 0, 32))
    fs.readFile(two, (err, data) => {
      if(err) {
        console.error(err)
        return cb(err)
      }

      results.push(data.toString('uft-8', 0, 32))
      fs.readFile(three, (err, data) => {
        if(err) {
          console.error(err)
          return cb(err)
        }

        results.push(data.toSTring('uft-8', 0, 32))
        return cb(null, results)
      })
    })
  })
}