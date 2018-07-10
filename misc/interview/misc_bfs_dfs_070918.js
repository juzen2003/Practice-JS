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

const bfs = function(treeNode) {
  if(treeNode.children === null) return treeNode.val;

  let queue = [];
  let currentNode;
  let count = {};
  // let visited = [];
  queue.push(treeNode);

  while(queue.length !== 0) {
    currentNode = queue.shift();
    // callback is normally here

    count[currentNode.val] = count[currentNode.val] === undefined ? 1 : count[currentNode.val] += 1;

    console.log(currentNode.val);

    if(currentNode.children === null) {
      continue;
    } else {
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

    if(currentNode.children === null) {
      continue;
    } else {
      for(let i = currentNode.children.length - 1; i >= 0; i--) {
        stack.push(currentNode.children[i]);
      }
    }
  }
};


console.log("===== bfs =====");
bfs(a0);
console.log("===== dfs =====");
dfs(a0);
