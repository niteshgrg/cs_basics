/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let graphMap = {};
  let n = graph.length - 1;

  graph.forEach((nodes, index) => {
    graphMap[index] = nodes;
  });

  let iterator = [[0]];
  let output = [];

  while (iterator.length > 0) {
    let newIterator = [];
    iterator.forEach((arr) => {
      let neighbours = graphMap[arr[arr.length - 1]];
      if (neighbours !== null) {
        neighbours.forEach((neighbour) => {
          if (neighbour == n) {
            output.push([...arr, neighbour]);
          } else {
            newIterator.push([...arr, neighbour]);
          }
        });
      }
    });

    iterator = [...newIterator];
  }

  return output;
};
