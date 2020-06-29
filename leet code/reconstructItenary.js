/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let graph = {};
  let result = [];
  for (let i of tickets) {
    if (i[0] in graph) {
      graph[i[0]].push(i[1]);
    } else {
      graph[i[0]] = [i[1]];
    }
  }

  for (let i in graph) {
    graph[i].sort();
    graph[i].reverse();
  }

  function dfs(key) {
    const tos = graph[key];
    while (tos && tos.length > 0) {
      dfs(tos.pop());
    }
    result.push(key);
  }
  dfs("JFK");

  return result.reverse();
};
