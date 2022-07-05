console.log('Before setTimeout');

setTimeout(() => {
  console.log('Hello World');
}, 5000);

console.log('After setTimeout');

/*
Callback
Promise
Async...Await
*/

const a = [1, 2, 3, 4];
const b = a.map((x) => x * x);
