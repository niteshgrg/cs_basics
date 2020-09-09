/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1Arr = version1.split(".").map((num) => parseInt(num));
  let v2Arr = version2.split(".").map((num) => parseInt(num));

  if (v1Arr.length > v2Arr.length) {
    v2Arr = [...v2Arr, ...new Array(v1Arr.length - v2Arr.length).fill(0)];
  }

  if (v2Arr.length > v1Arr.length) {
    v1Arr = [...v1Arr, ...new Array(v2Arr.length - v1Arr.length).fill(0)];
  }

  let len = v1Arr.length;

  for (let i = 0; i < len; i++) {
    if (v1Arr[i] > v2Arr[i]) {
      return 1;
    } else if (v1Arr[i] < v2Arr[i]) {
      return -1;
    }
  }

  return 0;
};
