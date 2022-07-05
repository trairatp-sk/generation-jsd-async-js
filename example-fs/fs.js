const fs = require('fs');
// file system

console.time('Reading file');

fs.read;

fs.readFileSync('./file1.csv').toString('utf8');
console.log('file1 finished');
fs.readFileSync('./file2.csv').toString('utf8');
console.log('file2 finished');
fs.readFileSync('./file3.csv').toString('utf8');
console.log('file3 finished');
fs.readFileSync('./file4.csv').toString('utf8');
console.log('file4 finished');
fs.readFileSync('./file5.csv').toString('utf8');
console.log('file5 finished');

console.timeEnd('Reading file');
