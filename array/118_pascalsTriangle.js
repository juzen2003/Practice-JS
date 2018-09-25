/**
 * @param {number} numRows
 * @return {number[][]}
 */
// new row can be calculated from previous row
// ex:
//   1 3 3 1 0
// + 0 1 3 3 1
//   1 4 6 4 1
// Time: O(n ^ 2), loop through number of rows O(n) and each loop needs to loop through prev to calculate currentRow O(n)
var generate = function(numRows) {
  if(numRows === 0) return [];
  if(numRows === 1) return [[1]];

  let res = [[1]];

  for(let i = 1; i < numRows; i++) {
    let shifted = [...res[i-1], 0];
    let prev = [0, ...res[i-1]];
    let currentRow = prev.map((el, idx) => el + shifted[idx]);
    res.push(currentRow);
  }

  return res;
};
