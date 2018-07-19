/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let low = 0;
  let high = Number.MAX_SAFE_INTEGER;

  while(low <= high) {
    let mid = parseInt((low + high) / 2);

    if(mid > x / mid) {
      high = mid - 1;
    } else {
      if((mid + 1) > x / (mid + 1)) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }
};

// var mySqrt = function(x) {
//   let num = 1;
//   let currentRoot = 0;
//
//   while(x >= Math.pow(num, 2)) {
//     currentRoot = num;
//     num += 1;
//
//   }
//
//   return currentRoot;
// };
