/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// BFS
// perform word transformation at each level and see if it reach to endWord
// elements in wordList are unique
// to perform fast look up in wordList, we can use set of wordList to have much faster operations
var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if(!wordSet.has(endWord)) return 0;

  let queue = [];
  queue.push(beginWord);
  // wordSet.delete(beginWord);

  let dst = 0;
  // store visited node
  let visited = new Set();

  while(queue.length !== 0) {
    let size = queue.length;
    let currentNode;
    dst++;

    for(let i = 0; i < size; i++) {
      currentNode = queue.shift();
      if(currentNode === endWord) return dst;

      // check for next possible transformed words, and make sure we don't revisit them again to get the short path
      for(let j = 0; j < currentNode.length; j++) {
        for(let k = 0; k < 26; k++) {
          let word = currentNode.slice(0, j) + String.fromCharCode(k + 97) + currentNode.slice(j+1);

          if(wordSet.has(word) && word !== currentNode) {
            // make sure we don't revisit the same word 
            if(!visited.has(word)) {
              queue.push(word);
            }
            // queue.push(word);
            // wordSet.delete(word);
          }
        }
      }
      visited.add(currentNode);
    }
  }

  return 0;
};
