/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
// input is a UndirectedGraphNode
// output is a UndirectedGraphNode
// Nodes are labeled uniquely.
var cloneGraph = function(graph) {
  let map = {};
  return makeAnCopy(graph, map);
};

// each node would only have 1 copy instead of multiple copies, that's why we passed in map (for tracking) to avoid copying same node mutiple times
const makeAnCopy = function(node, map) {
  if(!node) return node;

  if(!map[node.label]) {
    map[node.label] = new UndirectedGraphNode(node.label);
    map[node.label].neighbors = node.neighbors.map(child => {
      return makeAnCopy(child, map);
    });
  }

  return map[node.label];
};
