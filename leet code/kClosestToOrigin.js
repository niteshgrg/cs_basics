/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  let distanceIndex = [];

  for (let i = 0; i < points.length; i++) {
    console.log(points[i][0]);
    let distance = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2);
    if (distanceIndex.length < K) {
      distanceIndex.push([distance, i]);
      distanceIndex.sort((a, b) => a[0] - b[0]);
    } else {
      if (distanceIndex[distanceIndex.length - 1][0] > distance) {
        distanceIndex.push([distance, i]);
        distanceIndex.sort((a, b) => a[0] - b[0]);
        distanceIndex.pop();
      }
    }
  }

  console.log(distanceIndex);

  return distanceIndex.map((x) => points[x[1]]);
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);

console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);
