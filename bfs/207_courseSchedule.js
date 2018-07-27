/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// BFS, topological sort
// n: total courses you have to take, labeled from 0 to n-1.
// check to see if it's possible to finish all courses
// each pair: [ready, pre]
// 1. check classes that is ready, no indegree (indegree[ready] = 0 => no prerequisite needed)
// 2. put them in queue (can be taken right away)
// 3. check each node in queue, if the node is prerequisite for other classes, indegree[otherClass]--
// 4. queue in any node that can be taken now (no more indegree after step 3)
var canFinish = function(numCourses, prerequisites) {
  let indegree = {};
  let pairs = prerequisites.length;

  for(let i = 0; i < pairs; i++) {
    let ready = prerequisites[i][0];
    indegree[ready] = indegree[ready] === undefined ? 1 : indegree[ready] + 1;
  }

  // classes that don't need prerequisites.
  let queue = [];
  for(let j = 0; j < numCourses; j++) {
    if(!indegree[j]) queue.push(j);
  }

  // classes that can be taken right now (no prerequisites)
  let count = queue.length;

  while(queue.length !== 0) {
    let currentNode = queue.shift();

    for(let k = 0; k < pairs; k++) {
      let otherClass = prerequisites[k][0];
      let otherClassPre = prerequisites[k][1];
      // if currentNode is the prerequisite of other classes
      // update indegree counter
      // queue in classes that can be taken
      if(otherClassPre === currentNode) {
        indegree[otherClass]--;

        if(indegree[otherClass] === 0) {
          queue.push(otherClass);
          count++;
        }
      }
    }
  }

  return count === numCourses;
};
