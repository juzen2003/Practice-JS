/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// BFS
// 1. check boarder and if it's "O", change it to "N", visit its neighbor and do the same thing
// 2. check all board and change "O" to "X"
// 3. check all board and change "N" to "O"
var solve = function(board) {
  if(board.length === 0) return;

  let queue = [];
  let row = board.length;
  let col = board[0].length;
  let visited = new Set();

  for(let i = 0; i < row; i++) {
    check(i, 0, queue, board);
    check(i, col-1, queue, board);
  }

  for(let j = 0; j < col; j++) {
    check(0, j, queue, board);
    check(row-1, j, queue, board);
  }

  while(queue.length !== 0) {
    let currentNode = queue.shift();
    let r = currentNode[0];
    let c = currentNode[1];

    if(!visited.has(currentNode)) {
      if(r-1 >= 0) check(r-1, c, queue, board);
      if(r+1 < row) check(r+1, c, queue, board);
      if(c-1 >= 0) check(r, c-1, queue, board);
      if(c+1 < col) check(r, c+1, queue, board);
    }

    visited.add(currentNode);
  }

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(board[i][j] === "O") board[i][j] = "X";
      if(board[i][j] === "N") board[i][j] = "O";
    }
  }

};

const check = function(row, col, queue, board) {
  if(board[row][col] === "O") {
    board[row][col] = "N";
    queue.push([row, col]);
  }
};
