/**
 * @param {character[][]} grid
 * @return {number}
 */
// Both BFS fill or DFS fill would work
var numIslands = function(grid) {
  if(grid.length === 0) return 0;
  let count = 0;
  let rowL = grid.length;
  let colL = grid[0].length;

  for(let i = 0; i < rowL; i++) {
    for(let j = 0; j < colL; j++) {
      if(grid[i][j] === "1") {
        // dfsFill(i, j, grid);
        bfsFill(i, j, grid);
        count++;
      }
    }
  }

  return count;
};

const dfsFill = function(row, col, grid) {
  let rowL = grid.length;
  let colL = grid[0].length;

  if(row >= 0 && col >= 0 && row < rowL && col < colL && grid[row][col] === "1") {
    grid[row][col] = "0";
    dfsFill(row-1, col, grid);
    dfsFill(row+1, col, grid);
    dfsFill(row, col-1, grid);
    dfsFill(row, col+1, grid);
  }
};

const bfsFill = function(row, col, grid) {
  let queue = [];
  check(row, col, queue, grid);

  let rowL = grid.length;
  let colL = grid[0].length;

  // visisted is not necessary, but it would reduce number of operations
  let visited = new Set();

  while(queue.length !== 0) {
    let currentNode = queue.shift();
    let r = currentNode[0];
    let c = currentNode[1];

    if(!visited.has(currentNode)) {
      if(r-1 >= 0) check(r-1, c, queue, grid);
      if(r+1 < rowL) check(r+1, c, queue, grid);
      if(c-1 >= 0) check(r, c-1, queue, grid);
      if(c+1 < colL) check(r, c+1, queue, grid);
    }

    visited.add(currentNode);
  }
};

const check = function(row, col, queue, grid) {
  if(grid[row][col] === "1") {
    grid[row][col] = "0";
    queue.push([row, col]);
  }
};
