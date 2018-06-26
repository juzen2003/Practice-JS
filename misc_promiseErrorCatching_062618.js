// the execution: catch -> catch -> then
new Promise(function(resolve, reject) {

  throw new Error("Whoops!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // handle it
  } else {
    console.log("Can't handle such error");

    throw error; // throwing this or another error jumps to the next catch
  }

}).then(function() {
  /* never runs here */
}).catch(error => { // (**)

  console.log(`The unknown error has occurred: ${error}`);
  // don't return anything => execution goes the normal way

}).then(() => {
  console.log("error handled at outer catch");
});

// In case of an error, the promise state becomes “rejected”

// the execution: catch -> then
// new Promise(function(resolve, reject) {
//
//   throw new Error("Whoops!");
//
// }).catch(function(error) {
//
//   console.log("The error is handled, continue normally");
//
// }).then(() => console.log("Next successful handler runs"));

// To summarize, .then/catch(handler) returns a new promise that changes depending on what handler does:
//
// If it returns a value or finishes without a return (same as return undefined), then the new promise becomes resolved, and the closest resolve handler (the first argument of .then) is called with that value.

// If it throws an error, then the new promise becomes rejected, and the closest rejection handler (second argument of .then or .catch) is called with it.

// If it returns a promise, then JavaScript waits until it settles and then acts on its outcome the same way.

new Promise(function(resolve, reject) {
  // 1st error
  setTimeout(() => {
    throw new Error("This error will not be catched!");
  }, 1000);

  // 2nd error
  // setTimeout(() => {
  //   let err = new Error("This error will be catched!");
  //   reject(err);
  // }, 1000);

  // 3rd error
  // throw new Error("This error will be catched!");
}).catch((err) => {
  console.log(err.message);
});

// there’s an "implicit try..catch" around the function code. So all synchronous errors are handled.
// But here the error is generated not while the executor is running, but later. So the promise can’t handle it.
