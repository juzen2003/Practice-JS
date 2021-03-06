// 1 -> 2 -> 4
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  console.log(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  console.log(result); // 2
  return result * 2;

}).then(function(result) {

  console.log(result); // 4
  return result * 2;

});

// the value returned by .then is a promise
// the value returned by the resolved function in .then is the value set for resolved result and would be passed down

//  an asynchronous action should always return a promise.

// 1 -> 2 (1s delay) -> 4 (1s delay)
// new Promise(function(resolve, reject) {
//
//   setTimeout(() => resolve(1), 1000);
//
// }).then(function(result) {
//
//   console.log(result); // 1
//
//   return new Promise((resolve, reject) => { // (*)
//     setTimeout(() => resolve(result * 2), 1000);
//   });
//
// }).then(function(result) { // (**)
//
//   console.log(result); // 2
//
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   });
//
// }).then(function(result) {
//
//   console.log(result); // 4
//
// });
