const a = 1;
const b = 2;

if (a === 1) {
  console.log('a equal to 1');
}

const add = (x, y) => {
  return x + y;
};

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
  console.log(i);
}

console.log(`Sum is ${sum}`);
