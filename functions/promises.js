// Callback
const getDataCallback = callback => {
  setTimeout(() => {
    callback("Callback error", undefined);
    callback("Callback error", undefined);
  }, 2000);
};

getDataCallback((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Promise
const getdataPromise = data =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This is the success data: ${data}`);
      // reject("Promise error");
      // reject("Promise error");
    }, 2000);
  });

const myPromise = getdataPromise(123);

myPromise.then(
  data => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
);
