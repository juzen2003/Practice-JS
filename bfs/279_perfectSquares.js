/**
 * @param {number} n
 * @return {number}
 */
// BFS, each level is perfect square numbers
// see how many level of (least number) perfect square numbers we need to sum up to n
// use dp[i] to keep track of the least number of perfect square numbers that sum to i
var numSquares = function(n) {
  let queue = [];
  let sqrNums = [];
  let dp = new Array(n+1);
  dp[0] = 0;

  for(let i = 1; i*i <= n; i++) {
    // return 1 if n is a perfect square number
    if(i*i === n) return 1;
    queue.push(i*i);
    sqrNums.push(i*i);
  }

  let count = 1;

  while(queue.length !== 0) {
    let size = queue.length;
    let currentNode;
    count++;

    for(let j = 0; j < size; j++) {
      currentNode = queue.shift();

      for(let k = 0; k < sqrNums.length; k++) {
        let currentNum = currentNode + sqrNums[k];
        if(currentNum === n) {
          return count;
        } else if(currentNum < n && !dp[currentNum]) {
          dp[currentNum] = count;
          queue.push(currentNum);
        } else if(currentNum > n) {
          break;
        }
      }
    }
  }

  return 0;
};


// dynamic programming
// dp[i] would store the least number of perfect square numbers that sum to i
// var numSquares = function(n) {
//   let max = Number.MAX_SAFE_INTEGER;
//   let dp = new Array(n+1).fill(max);
//   dp[0] = 0;
//
//   for(let i = 1; i <= n; i++){
//     for(let j = 1; j*j <= i; j++){
//       dp[i] = Math.min(dp[i], dp[i-j*j]+1);
//     }
//   }
//
//   return dp[n];
// };
