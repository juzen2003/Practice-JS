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
