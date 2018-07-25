/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if(!wordSet.has(endWord)) return [];

  let queue = [];
  queue.push([beginWord]);

  let res = [];
  let visited = new Set();
  let dst;

  while(queue.length !== 0) {
    let size = queue.length;
    let currentPath;
    let currentNode;

    for(let i = 0; i < size; i++) {
      currentPath = queue.shift();
      currentNode = currentPath[currentPath.length - 1];

      // this is to only record shortest distance
      if(currentPath.length === dst) continue;
      // if(currentPath.length === dst) break;

      for(let j = 0; j < currentNode.length; j++) {
        for(let k = 0; k < 26; k++) {
          let word = currentNode.slice(0,j) + String.fromCharCode(k + 97) + currentNode.slice(j+1);

          if(wordSet.has(word) && word !== currentNode) {
            if(!visited.has(word)) {
              queue.push(currentPath.concat(word));
              // queue.push([...currentPath, word]);
            }

            if(word === endWord) {
              dst = currentPath.length + 1;
              res.push(currentPath.concat(word));
              // res.push([...currentPath, word]);
            }
          }
        }
      }

      visited.add(currentNode);
    }
  }

  return res;
};
