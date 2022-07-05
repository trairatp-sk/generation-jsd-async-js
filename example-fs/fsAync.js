const fs = require('fs');

fs.readFile('./file1.csv', (err, buff) => {
  console.log('file1 finished');
});
fs.readFile('./file2.csv', (err, buff) => {
  console.log('file2 finished');
});
fs.readFile('./file3.csv', (err, buff) => {
  console.log('file3 finished');
});
fs.readFile('./file4.csv', (err, buff) => {
  console.log('file4 finished');
});
fs.readFile('./file5.csv', (err, buff) => {
  console.log('file5 finished');
});
