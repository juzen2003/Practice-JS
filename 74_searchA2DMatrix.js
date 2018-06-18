// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:
//
// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:
//
// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// check first element in each row first and do bsearch in the targeted row
var searchMatrix = function(matrix, target) {
  let rowNum = 0;
  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i][0] > target) {
      rowNum = i - 1;
      break;
    } else if (matrix[i][0] === target) {
      return true;
    } else if (i === matrix.length - 1) {
      rowNum = i;
    }
  }

  if(matrix.length === 0 || rowNum < 0) return false;

  let arr = matrix[rowNum];
  let res = bsearch(arr, target);
  return res;
};

const bsearch = function(arr, target) {
  if(arr.length === 0) return false;

  let mid = Math.floor(arr.length / 2);
  if(arr[mid] === target) {
    return true;
  } else if (arr[mid] > target) {
    return bsearch(arr.slice(0, mid), target);
  } else if (arr[mid] < target) {
    return bsearch(arr.slice(mid+1), target);
  }
};
