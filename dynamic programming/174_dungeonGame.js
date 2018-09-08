/**
 * @param {number[][]} dungeon
 * @return {number}
 */
// dp: a 2D array to store the min init at location (i, j) in dp[i][j]

// It is easy to know that at grid P, since " at any point his health point drops to 0 or below, he dies immediately", the remaining health value should be at least 1, that is, initialHealth + dungeon >= 1, we have initialHealth = max(1, 1 - dungeon[i][j]). (Notice, at any grid, the initial health should be at least 1 (for example, test case [1,0,0] require initial health 1 even though it has positive remaining health at grid[0][1] and grid[0][2])

// Similarly, to satisfy the initial health of dungeon[i][j], the initial health of dungeon[i-1][j] (or dungeon[i][j-1]) should be at least initialHealth[i-1][j] + dungeon[i-1][j] = initialHealth[i][j], that is, initialHealth[i-1][j] = initialHealth[i][j] - dungeon[i-1][j] or initialHealth[i][j-1] = initialHealth[i][j] - dungeon[i][j-1].

// In addition, if grid[i][j] can go both grid[i+1][j] and grid[i][j+1] to P, we should choose a path with less initial health between grid[i+1][j] and grid[i][j+1] since it require less initial health of grid[i][j].

// starting from bottom-right to top-left

// Time: O(n)
// Space: O(n) 
var calculateMinimumHP = function(dungeon) {
  let m = dungeon.length;
  let n = dungeon[0].length;

  let dp = [...Array(m+1)].map(el => Array(n+1).fill(1));

  for(let i = m-1; i >= 0; i--) {
    for(let j = n-1; j >= 0; j--) {
      if(i === m-1) {
        dp[i][j] = Math.max(1, dp[i][j+1] - dungeon[i][j]);
      } else if( j === n-1) {
        dp[i][j] = Math.max(1, dp[i+1][j] - dungeon[i][j]);
      } else {
        let minInit = Math.min(dp[i+1][j], dp[i][j+1]);
        dp[i][j] = Math.max(1, minInit - dungeon[i][j]);
      }
    }
  }

  return dp[0][0];
};
