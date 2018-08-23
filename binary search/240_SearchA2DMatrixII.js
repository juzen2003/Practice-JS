/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//  O(m + n)
// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while(col >= 0 && row <= matrix.length -1) {
    if(matrix[row][col] === target) {
      return true;
    } else if(matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
};

// O(logm) + O((m-k)*logn)
// var searchMatrix = function(matrix, target) {
//   if(matrix.length === 0) return false;
//
//   let m = matrix.length;
//   let n = matrix[0].length;
//
//   let lo = 0;
//   let hi = m - 1;
//   while(lo <= hi) {
//     let mid = parseInt((lo + hi)/2);
//     if(matrix[mid][0] === target) {
//       return true;
//     } else if(matrix[mid][0] > target) {
//       hi = mid - 1;
//     } else {
//       lo = mid + 1;
//     }
//   }
//
//   for(let i = 0; i < lo; i++) {
//     let row = matrix[i];
//     let colLo = 0;
//     let colHi = n - 1;
//
//     while(colLo <= colHi) {
//       let colMid = parseInt((colLo + colHi) / 2);
//
//       if(row[colMid] === target) {
//         return true;
//       } else if (row[colMid] > target) {
//         colHi = colMid - 1;
//       } else {
//         colLo = colMid + 1;
//       }
//     }
//   }
//
//   return false;
//
// };
