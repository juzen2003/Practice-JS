/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// backtracking
// Time: O(4 ^ n)
// go to four direction for each current visiting letter, like dfs fill
var exist = function(board, word) {
  let m = board.length;
  let n = board[0].length;
  let visited = [...Array(m)].map(el => Array(n).fill(false));
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(word[0] === board[i][j] && backtracking(visited, board, word, i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

const backtracking = function(visited, board, word, i, j, idx) {
  if(idx === word.length) return true;

  if(i < 0 || j < 0 || i >= board.length || j > board[0].length || word[idx] !== board[i][j] || visited[i][j]) {
    return false;
  } else {
    // i > 0 && j > 0 && i <  board.length && j < board[0].length && word[idx] === board[i][j] && !visited[i][j]
    visited[i][j] = true;
    let left = backtracking(visited, board, word, i, j-1, idx+1);
    let right = backtracking(visited, board, word, i, j+1, idx+1);
    let top = backtracking(visited, board, word, i-1, j, idx+1);
    let down = backtracking(visited, board, word, i+1, j, idx+1);
    if(left || right || top || down) return true;
    // else (backtracking)
    visited[i][j] = false;
  }

  return false;
};
