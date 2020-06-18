/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  let length = citations.length;
  let low = 0;
  let high = length - 1;

  while (low <= high) {
    let mid = Math.ceil((low + high) / 2);

    if (citations[mid] >= length - mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return length - low;
};

console.log(hIndex([5, 5, 5, 5, 6]));
console.log(hIndex([0, 1, 3, 5, 6]));
