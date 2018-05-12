// You are given a file which looks like so:
//
// AA BB
// DD FF
// CC EE
// EE DD
// Each line of the file contains a pair of strings. Each string represents is the name of a vertex. The line represents an edge connecting two vertices.
//
// Your task is to find the connected components of the graph. A connected component is a subset of vertices all connected to each other. In this example, the connected components are [["AA", "BB"], ["CC", "DD", "EE", "FF"]].

// [ "AA BB", "DD FF", "CC EE", "EE DD",]
const connectComponent = function(arr) {
  let hsh = {};
  let queue = [];
  let res = [];

  arr.forEach(el => {
    let subEl = el.split(" ");
    hsh[subEl[0]] = hsh[subEl[0]] || [];
    hsh[subEl[0]] = hsh[subEl[0]].concat(subEl[1]);
    hsh[subEl[1]] = hsh[subEl[1]] || [];
    hsh[subEl[1]] = hsh[subEl[1]].concat(subEl[0]);
  });

  while (Object.keys(hsh).length !== 0) {
  
    let components = [];
    queue = queue.concat(Object.keys(hsh)[0]);
    // console.log(queue);
    while (queue.length !== 0) {
      let comp = queue.shift();
      if (hsh[comp] === undefined) continue;
      components = components.concat(comp);

      let connected = hsh[comp];

      queue = queue.concat(connected);
      delete hsh[comp];

    }
    res.push(components);
  }

  return res;
};

let arr = [ "AA BB", "DD FF", "CC EE", "EE DD",];
let res = connectComponent(arr);
console.log(res);
