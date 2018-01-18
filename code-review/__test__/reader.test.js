import { read } from '../lib/reader';

'use strict';

const reader = require('.../lib/reader');
require('jest');

describe('Reader Module', function () {
  describe('#reader', () => {
    let paths = [`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`];

    //NOTE THIS TEST REQUIRES DIFFERENT DATA THAN WHAT IS CURRENTLY IN DATA DIRECTORY, AS IN TXT FILES INSTEAD AND DIFFERENT FIRST THINGS
    describe('Valid results', () => {
      it('should return the file data in the same order it was passed', (done) => {
        let expected = 'Short.Long.Medium.'
        reader.read(paths, (err, results) => {
          let arr = [results[0].split(' ')[0], results[1].split(' ')[0], results[2].split(' ')[0]].join('');

          expect(expected).toEqual(arr);
          done();
        })
      })

      //   let arr = [];

      //   [...Array(10)].map(i => {
      //     reader.read(paths, (err, results) => {
      //       [results[0].split()[0], results[1].split()[0], results[2].split()[0]
      //     })
      //   })
      // })

      it('should accept an array of file paths and return a null argument for err', (done) => {
        reader.read(paths, (err, results) => {
          expect(err).toBeNull();
          done();
        })
      })

      it('should accept an array of file paths and return array of mapped results', (done) => {
        reader.read(paths, (err, results) => {
          expect(results).toBeInstanceOf(Array);
          done();
        })
      })

      it('should accept an array of file paths and return something', (done) => {
        reader.read(paths, (err, results) => {
          expect(results).not.toBeNull();
          done();
        })
      })
      
      it('should return an array with length of 3', (done) => {
        reader.read(paths, (err, results) => {
          expect(results.length).toBe(3);
          done();
        })
      })
    })

    describe('Invalid results', () => {
      it('should return an error given invalid file paths', () => {

      })
    })

})