let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// whatever run in .then or .catch is async
promise.then(
  result => {
    console.log("promise resolved");
  }
);

// .catch(f) is the same as promise.then(null, f)
promise2.catch(error => {
  console.log(error.message);
}); // shows "Error: Whoops!" after 1 second

console.log("This would run before resolved function in then");
