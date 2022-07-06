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
    reject('No soap');
    setTimeout(() => {
      // console.log('Finish showering');
      resolve('Finish showering');
    }, 5000);
  });
}

function brushTeeth() {
  return new Promise((resolve, reject) => {
    console.log('Start brushing teeth');
    setTimeout(() => {
      // console.log('Finish brushing teeth');
      resolve('Finish brushing teeth');
    }, 2000);
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

// const showerPromise = shower();
// console.log('wake up');
// showerPromise.then((value) => {
//   console.log(value);
// });

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

async function morningRoutine() {
  // const showerResult = await shower();
  // const brushTeethResult = await brushTeeth();
  // console.log(brushTeethResult);
  try {
    const [showerResult, brushTeethResult] = await Promise.all([shower(), brushTeeth()]);
    console.log(showerResult);
    console.log(brushTeethResult);
    const eatBreakfastResult = await eatBreakfast();
    console.log(eatBreakfastResult);
    const getDressResult = await getDress();
    console.log(getDressResult);
  } catch (e) {
    console.log('Something bad happened in the morning');
    onFail(e);
  }
  return 'Finish morning routine';
}

// console.log('wake up');
// const morningResult = morningRoutine();
// console.log(morningResult);

// async function myDay() {
//   try {
//     const morningResult = await morningRoutine();
//     console.log(morningResult);
//   } catch (e) {
//     console.log('Something bad happened in the my day');
//     onFail(e);
//   }
//   // await eveningRoutine();
// }
// myDay();

function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    // do something ให้คนใช้รู้
    throw new Error('Input is not a number');
  }
  return x + y;
}

try {
  console.log(add({}, null));
} catch (e) {
  console.error(e);
}

// function run() {
//   console.log('Before try...catch');
//   try {
//     console.log('Hello world');
//     throw 'Something bad happened';
//     console.log('Hi Generation');
//   } catch (error) {
//     console.log('After try...catch');
//     console.log(error);
//   }
// }

// run();
