/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// Use same trick as 118
// Time: O(n ^ 2)
var getRow = function(rowIndex) {
  let res = [[1]];

  for(let i = 1; i <= rowIndex; i++) {
    let prev = [...res[i-1], 0];
    let shifted = [0, ...res[i-1]];
    let currentRow = prev.map((el, idx) => el + shifted[idx]);
    res.push(currentRow);
  }

  return res[rowIndex];
};
