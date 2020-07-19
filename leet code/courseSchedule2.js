/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let graph = {};
  let inDegree = {};
  let queue = [];

  for (let i of prerequisites) {
    if (i[1] in graph) {
      graph[i[1]].push(i[0]);
    } else {
      graph[i[1]] = [i[0]];
    }

    if (i[0] in inDegree) {
      inDegree[i[0]]++;
    } else {
      inDegree[i[0]] = 1;
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (!(i in inDegree)) {
      inDegree[i] = 0;
    }
  }

  console.log(inDegree);

  let flag = true;
  let output = [];

  while (flag) {
    for (let key in inDegree) {
      if (inDegree[key] === 0) {
        delete inDegree[key];
        queue.push(key);
      }
    }
    if (queue.length === 0) {
      flag = false;
      continue;
    }
    let element = queue.shift();
    output.push(element);
    let neighbours = graph[element];

    for (let i in neighbours) {
      inDegree[neighbours[i]]--;
    }
  }
  console.log(output);
  return output.length === numCourses ? output : [];
};

console.log(findOrder(2, [[1, 0]]));

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
