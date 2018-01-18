This lab was focused on exploring asynchronous callbacks, and how to organize them to produce structured results that are consistent/mapped with given datasets. 

The code written in reader.js, located in the lib/ directory, is exporting a single function to be utilized in the respective reader.test.js file located in the test/ directory. The function expects two parameters, the data in question in the form of filepaths in an array, and a callback function with two parameters, err and data. 

This module, in its current state, is designed specifically to take in an array of 3 file paths, read the files and deposit their contents as a string to another array in the order they were supplied. 