/**
 * @param {number} n
 * @return {number[][]}
 */
// Time: O(n);
// Space: O(n ^ 2)
var generateMatrix = function(n) {
  let res = [...Array(n)].map(el => Array(n));

  let top = 0;
  let bottom = n-1;
  let left = 0;
  let right = n-1;
  let num = 1;

  while(true) {
    // move right
    for(let i = left; i <= right; i++) {
      res[top][i] = num;
      num++;
    }
    top++;
    if(top > bottom || left > right) break;

    // move down
    for(let i = top; i <= bottom; i++) {
      res[i][right] = num;
      num++;
    }
    right--;
    if(top > bottom || left > right) break;

    // move left
    for(let i = right; i >= left; i--) {
      res[bottom][i] = num;
      num++;
    }
    bottom--;
    if(top > bottom || left > right) break;

    // move up
    for(let i = bottom; i >= top; i--) {
      res[i][left] = num;
      num++;
    }
    left++;
    if(top > bottom || left > right) break;
  }

  return res;
};
