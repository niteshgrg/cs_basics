var canFinish = function (numCourses, prerequisites) {
  let graph = {};

  for (let i of prerequisites) {
    if (i[0] in graph) {
      graph[i[0]].push(i[1]);
    } else {
      graph[i[0]] = [i[1]];
    }
  }

  //   console.log(graph);

  for (let i = 0; i < numCourses; i++) {
    let visited = [];
    let recStack = [];

    if (isCyclic(visited, recStack, i, graph)) {
      return false;
    }
  }

  return true;
};

var isCyclic = function (visited, recStack, node, graph) {
  if (!visited[node]) {
    visited[node] = true;
    recStack[node] = true;
    let neighbours = graph[node];
    if (neighbours) {
      for (let i of neighbours) {
        if (isCyclic(visited, recStack, i, graph)) {
          return true;
        }
      }
    }
  } else if (recStack[node]) {
    return true;
  }

  recStack[node] = false;
  return false;
};

let a = {
  "1": [0],
  "0": [1],
};

//true
console.log(canFinish(2, [[1, 0]]));

//false
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);

//true
console.log(
  canFinish(3, [
    [2, 0],
    [2, 1],
  ])
);

//true
console.log(
  canFinish(3, [
    [0, 1],
    [0, 2],
    [1, 2],
  ])
);

//true
console.log(
  canFinish(8, [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
  ])
);
