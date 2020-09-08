function shift_count(A, B) {
  let count = 0,
    n = A.length;
  for (let x = 0; x < n; ++x) {
    for (let y = 0; y < n; ++y) {
      let temp = 0;
      for (let i = y; i < n; ++i) {
        for (let j = x; j < n; ++j) {
          if (A[i][j] === 1 && B[i - y][j - x] === 1) {
            temp++;
          }
        }
      }
      console.log(temp);
      count = Math.max(count, temp);
    }
  }
  console.log(count);
  return count;
}

var largestOverlap = function (A, B) {
  return Math.max(shift_count(A, B), shift_count(B, A));
};

console.log(
  largestOverlap(
    [
      [1, 0],
      [0, 0],
    ],
    [
      [0, 1],
      [1, 0],
    ]
  )
);
