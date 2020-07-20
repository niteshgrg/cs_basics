/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let node = head;
  let prevNode = new ListNode(0, head);
  let prevNodeIterator = prevNode;
  while (node !== null) {
    if (node.val === val) {
      prevNodeIterator.next = node.next;
      node = node.next;
      continue;
    }
    node = node.next;
    prevNodeIterator = prevNodeIterator.next;
  }

  return prevNode.next;
};
