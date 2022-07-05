// มี code ที่เป็น callback อยู่ แต่อยากเขียนเป็น Promise

function onSuccess(resolvedValue) {
  console.log('resolved value = ', resolvedValue);
}

function onFail(rejectedValue) {
  console.log(rejectedValue);
}

function shower() {
  return new Promise((resolve, reject) => {
    console.log('Start showering');
    setTimeout(() => {
      // console.log('Finish showering');
      resolve('Finish showering');
    }, 500);
    console.log('Start showering 2');
  });
}

function brushTeeth() {
  return new Promise((resolve, reject) => {
    console.log('Start brushing teeth');
    setTimeout(() => {
      // console.log('Finish brushing teeth');
      resolve('Finish brushing teeth');
    }, 200);
  });
}

function eatBreakfast() {
  return new Promise((resolve, reject) => {
    console.log('Start eating breakfast');
    setTimeout(() => {
      // console.log('Finish eating breakfast');
      resolve('Finish eating breakfast');
    }, 700);
  });
}

function getDress() {
  return new Promise((resolve, reject) => {
    console.log('Start getting dress');
    setTimeout(() => {
      // console.log('Finish getting dress');
      resolve('Finish getting dress');
    }, 700);
  });
}

new Promise((resolve, reject) => {
  console.log('Hi');
  resolve(true);
});

const showerPromise = shower();
console.log('wake up');
showerPromise.then((value) => {
  console.log(value);
});

/*
A
wake up
start showering
finish showering
*/

/*
B
start showering
wake up
finish showering
*/

// const promises = [shower(), brushTeeth()];
// Promise.all(promises)
//   .then(function (resolvedValues) {
//     console.log(resolvedValues);
//   })
//   .then(function (resolvedValue) {
//     console.log(resolvedValue);
//     return eatBreakfast();
//   })
//   .then(function (resolvedValue) {
//     console.log(resolvedValue);
//     return getDress();
//   })
//   .then(function (resolvedValue) {
//     console.log(resolvedValue);
//     return 'All done. I am ready to go to work';
//   })
//   .then(function (resolvedValue) {
//     console.log(resolvedValue);
//   })
//   .catch(onFail);

// const showerPromise = shower();

// console.log(showerPromise);
// console.log('typeof shower() = ', typeof showerPromise);

// showerPromise
//   .then(function (resolvedValue) {
//     console.log(resolvedValue);
//     return brushTeeth();
//   })
//   .then(function (resolvedValue) {
//     console.log(resolvedValue);
//     return eatBreakfast();
//   })
//   .then(function (resolvedValue) {
//     console.log(resolvedValue);
//     return getDress();
//   })
//   .then(function (resolvedValue) {
//     console.log(resolvedValue);
//     return 'All done. I am ready to go to work';
//   })
//   .then(function (resolvedValue) {
//     console.log(resolvedValue);
//   })
//   .catch(onFail);

// let x;

// new Promise((resolve, reject) => {
//   resolve(10);
// })
//   .then(function (a) {
//     console.log(`a = ${a}`);
//     return a + 2;
//   })
//   .then(function (b) {
//     console.log(`b = ${b}`);
//     x = b;
//     return b * 3;
//   })
//   .then(function (c) {
//     console.log(`c = ${c}`);
//     return c + 5;
//   })
//   .then(function (d) {
//     console.log(`d = ${d}`);
//     console.log(`x = ${x}`);
//   });

// console.log(`outside x = ${x}`);
