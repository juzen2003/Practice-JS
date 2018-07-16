class TreeNode {
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }
}

// find the node that exists in most of the level
//   a
//  a    b b c
// a c  d
// --> a is the one that exists in every level

// level 2
let a2 = new TreeNode("a", null);
let c2 = new TreeNode("c", null);
let d2 = new TreeNode("d", null);
// level 1
let b1 = new TreeNode("b", [d2]);
let b12 = new TreeNode("b", null);
let c1 = new TreeNode("c", null);
let a1 = new TreeNode("a", [a2, c2]);
// root
let a0 = new TreeNode("a", [a1, b1, b12, c1]);

// const bfs_count_by_level = function(treeNode) {
//   if(treeNode.children === null) return treeNode.val;
//
//   let queue = [];
//   let currentNode;
//   let count = {};
//
//   let levelSize = 1;
//   let levelCount = 0;
//   // let nextlevelSize = treeNode.children.length;
//   let nextlevelSize = 0;
//   let visited = [];
//
//   // let visited = [];
//   queue.push(treeNode);
//
//   while(queue.length !== 0) {
//     currentNode = queue.shift();
//     // callback is normally here
//     levelCount++;
//
//     if(!visited.includes(currentNode.val)) {
//       count[currentNode.val] = count[currentNode.val] === undefined ? 1 : count[currentNode.val] += 1;
//
//       visited.push(currentNode.val);
//     }
//
//     console.log(currentNode.val);
//
//     if(currentNode.children !== null) {
//       nextlevelSize += currentNode.children.length;
//
//       for(let i = 0; i < currentNode.children.length; i++) {
//         queue.push(currentNode.children[i]);
//       }
//     }
//     // console.log(`nextlevelSize: ${nextlevelSize}`);
//     // console.log(`levelCount: ${levelCount}`);
//     // console.log(`levelSize: ${levelSize}`);
//     // console.log(`visited: ${visited}`);
//     console.log(count);
//     // reset when finishing searching through one level
//     if(levelCount === levelSize) {
//       levelCount = 0;
//       levelSize = nextlevelSize;
//       visited = [];
//       nextlevelSize = 0;
//     }
//
//   }
// };
const bfs_count_by_level = function(treeNode) {
  if(treeNode.children === null) return treeNode.val;
  let queue = [];
  let count = {};
  queue.push(treeNode);

  while(queue.length !== 0) {
    // reset after looping through each level
    let size = queue.length;
    let currentNode;
    let visited = [];

    // loop through each level (BFS)
    for(let i = 0; i < size; i++) {
      currentNode = queue.shift();
      if(!visited.includes(currentNode.val)) {
        count[currentNode.val] = count[currentNode.val] === undefined ? 1 : count[currentNode.val] += 1;
        visited.push(currentNode.val);
      }
      console.log(currentNode.val);
      console.log(count);
      if(currentNode.children !== null) {
        for(let j = 0; j < currentNode.children.length; j++) {
          queue.push(currentNode.children[j]);
        }
      }
    }
  }

  let max = 0;
  let res;
  for(let el in count) {
    if(count[el] > max) {
      max = count[el];
      res = el;
    }
  }
  console.log(`Node that exists in most levels: ${res}`);
  return res;
};

const bfs = function(treeNode) {
  if(treeNode.children === null) return treeNode.val;

  let queue = [];
  let currentNode;
  let count = {};

  queue.push(treeNode);

  while(queue.length !== 0) {
    currentNode = queue.shift();
    // callback is normally here

    count[currentNode.val] = count[currentNode.val] === undefined ? 1 : count[currentNode.val] += 1;

    console.log(currentNode.val);
    // console.log(count);

    if(currentNode.children !== null) {
      for(let i = 0; i < currentNode.children.length; i++) {
        queue.push(currentNode.children[i]);
      }
    }

  }
};

const dfs = function(treeNode) {
  let stack = [];
  let currentNode;
  let count = {};

  stack.push(treeNode);

  while(stack.length !== 0) {
    currentNode = stack.pop();

    // callback
    count[currentNode.val] = count[currentNode.val] === undefined ? 1 : count[currentNode.val] += 1;

    console.log(currentNode.val);
    // console.log(count);

    if(currentNode.children !== null) {
      for(let i = currentNode.children.length - 1; i >= 0; i--) {
        stack.push(currentNode.children[i]);
      }
    }
  }
};

console.log("===== bfs count by level =====");
bfs_count_by_level(a0);
console.log("===== bfs =====");
bfs(a0);
console.log("===== dfs =====");
dfs(a0);
