/**
 * @param {string} s
 * @return {string[]}
 */
// BFS
// 1. check if s is valid by counting "(" & ")"
// 2. from current node, remove one "(" or remove one ")": generate all possible cases, and queue them in for checking
// 3. if valid string is founded, no need to generate all possible cases based on current node (because we only want to remove minimum parentheses), else continue step 2
var removeInvalidParentheses = function(s) {
  let queue = [];
  let res = [];
  let visited = new Set();

  queue.push(s);
  let found = false;

  while(queue.length !== 0) {
    let currentNode = queue.shift();

    if(isValid(currentNode)) {
      res.push(currentNode);
      found = true;
    }
    // this is to stop generating next level possible string if we already found the valid one
    if(found) continue;

    // if we can't find the valid string then we generate next level possible string based on currentNode
    for(let i = 0; i < currentNode.length; i++) {
      if(currentNode[i] !== "(" && currentNode[i] !== ")") continue;

      let newS = currentNode.slice(0, i) + currentNode.slice(i+1);
      if(!visited.has(newS)) {
        queue.push(newS);
        visited.add(newS);
      }
    }
  }

  return res;
};

// verify if s is valid
const isValid = function(s) {
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(") count++;
    if(s[i] === ")") count--;
    if(count < 0) return false;
  }

  return count === 0;
};
