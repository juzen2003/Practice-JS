// refer to this: https://javascript.info/promise-basics
// resolve and reject are functions
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 1000);
  setTimeout(() => reject(new Error("NOOOOO!")), 1000); // this would get ignored cuz promise would only have one result or one error
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// whatever run in .then or .catch is async
// first functino for resolved, takes in result value
// second function for rejected, takes in error
promise.then(
  result => {
    console.log("promise resolved");
    console.log(`${result}`); // the value we passed in the resolve function, in this case "done!"
  },
  error => {
    console.log(error.message);
  }
);

// .catch(f) is the same as promise.then(null, f)
promise2.catch(error => {
  console.log(error.message);
}); // shows "Error: Whoops!" after 1 second

console.log("This would run before resolved function in then");


// async function f() {
//   let p =  Promise.resolve("async");
//   console.log("end");
//   return p;
// }
//
// // f();
// f().then(
//   result => {
//     console.log(result);
//   }
// );
// // console.log("end");
//
// async function f2() {
//   let p = await Promise.resolve("await async");
//   console.log(p);
//   console.log("end");
//   return p
// }
// f2();
