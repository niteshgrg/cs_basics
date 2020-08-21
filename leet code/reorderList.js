/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let preRoot = new ListNode(0, head);
  let slowNode = preRoot,
    fastNode = preRoot;
  let arr = [];
  let secondArr = [];

  if (head === null) {
    return head;
  } else if (head.next === null) {
    return head;
  }

  while (true) {
    slowNode = slowNode.next;
    arr.push(slowNode);
    fastNode = fastNode.next;
    if (fastNode.next !== null) {
      fastNode = fastNode.next;
    } else {
      break;
    }
    if (fastNode.next === null) {
      slowNode = slowNode.next;
      arr.push(slowNode);
      break;
    }
  }

  while (slowNode.next !== null) {
    slowNode = slowNode.next;
    secondArr.push(slowNode);
  }

  let i = 0,
    j = secondArr.length - 1;
  while (j >= 0) {
    arr[i].next = secondArr[j];
    secondArr[j].next = arr[i + 1];
    i++;
    j--;
  }

  arr[arr.length - 1].next = null;

  return arr[0];
};
