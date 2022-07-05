function shower(callback) {
  console.log('Start showering');
  setTimeout(() => {
    console.log('Finish showering');
    if (callback) {
      callback();
    }
  }, 500);
}

function brushTeeth(callback) {
  console.log('Start brushing teeth');
  setTimeout(() => {
    console.log('Finish brushing teeth');
    if (callback) {
      callback();
    }
  }, 200);
}

function eatBreakfast(callback) {
  console.log('Start eating breakfast');
  setTimeout(() => {
    console.log('Finish eating breakfast');
    if (callback) {
      callback();
    }
  }, 700);
}

function getDress(callback) {
  console.log('Start getting dress');
  setTimeout(() => {
    console.log('Finish getting dress');
    if (callback) {
      callback();
    }
  }, 700);
}

console.log('Wake up');

// shower(function () {
//   brushTeeth(eatBreakfast);
// });

shower(function () {
  getDress(function () {
    eatBreakfast(function () {
      brushTeeth();
    });
  });
});
