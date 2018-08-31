/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 // BFS, topological sort
 // n: total courses you have to take, labeled from 0 to n-1.
 // check if it's possible to finish all courses and return the path
 // each pair: [ready, pre]
 // 1. check classes that is ready, no indegree (indegree[ready] = 0 => no prerequisite needed)
 // 2. put them in queue (can be taken right away)
 // 3. check each node in queue, if the node is prerequisite for other classes, indegree[otherClass]--
 // 4. queue in any node that can be taken now (no more indegree after step 3)
 // return the order of classes to take
var findOrder = function(numCourses, prerequisites) {
  let indegree = {};
  let pairs = prerequisites.length;

  for(let i = 0; i < pairs; i++) {
    let ready = prerequisites[i][0];
    indegree[ready] = indegree[ready] === undefined ? 1 : 1 + indegree[ready];
  }

  let queue = [];
  for(let j = 0; j < numCourses; j++) {
    if(indegree[j] === undefined) queue.push(j);
  }

  let res = [];

  while(queue.length !== 0) {
    let currentNode = queue.shift();

    // put the class that can be taken into final result
    res.push(currentNode);

    if(res.length === numCourses) return res;

    for(let k = 0; k < pairs; k++) {
      let otherClass = prerequisites[k][0];
      let otherClassPre = prerequisites[k][1];

      if(otherClassPre === currentNode) {
        indegree[otherClass]--;
        if(indegree[otherClass] === 0) {
          queue.push(otherClass);
        }
      }
    }
  }

  return [];
};
