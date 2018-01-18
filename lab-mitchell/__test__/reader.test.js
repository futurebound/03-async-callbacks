'use strict';

const reader = require('../lib/reader');

describe('reader module', function() {
  test('valid data should reject no error and have a data set containting the same order or data found in the file paths', function(done) {
    reader.reader([`${__dirname}/data/one.html`, `${__dirname}/data/two.html`, `${__dirname}/data/three.html`], function(err, data) {
      expect(err).toBe(null);
      expect(data).toEqual(['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. ', 'Leverage agile frameworks to provide a robust synopsis for high level overviews.']);
      done();
    }); 
  });

  test('invalid file path should reject an error', function (done) {
    reader.reader([`${__dirname}/data/one.html`, `${__dirname}/data/two.html`, `${__dirname}/data/three.htmlooo`], function(err, data) {
      expect(err).not.toBe(null);
      expect(data).toBeUndefined();
      done();
    });
  });
});