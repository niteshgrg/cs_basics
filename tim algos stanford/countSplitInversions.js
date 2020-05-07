let inversions = 0;

function countSplitInversions(array) {
  return mergeSort(array);
}

function merge(left, right) {
  let i = 0,
    j = 0;
  let leftLength = left.length;
  let rightLength = right.length;
  let returnArray = [];

  while (!(i === leftLength && j === rightLength)) {
    if (i == leftLength) {
      returnArray.push(...right.splice(j, rightLength));
      j = rightLength;
      continue;
    }
    if (j == rightLength) {
      returnArray.push(...left.splice(i, leftLength));
      i = leftLength;
      continue;
    }
    if (left[i] <= right[j]) {
      returnArray.push(left[i]);
      i += 1;
    } else {
      returnArray.push(right[j]);
      inversions += (leftLength - i);
      j += 1;
    }
  }
  return returnArray;
}

function mergeSort(array) {
  let left = array.splice(0, array.length / 2);
  let right = array;
  if (left.length > 1) left = mergeSort(left);
  if (right.length > 1) right = mergeSort(right);
  return merge(left, right);
}

countSplitInversions([6, 5, 4, 3, 2, 1]);
console.log(inversions);
