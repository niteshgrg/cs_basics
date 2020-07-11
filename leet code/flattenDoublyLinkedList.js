/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (head === null) {
    return null;
  }

  let initial = new Node(0, null, head, null);
  let previous = initial;

  let stack = [head];

  while (stack.length > 0) {
    let curr = stack.pop();

    previous.next = curr;
    curr.prev = previous;

    if (curr.next !== null) {
      stack.push(curr.next);
    }

    if (curr.child !== null) {
      stack.push(curr.child);
      curr.child = null;
    }

    previous = curr;
  }

  initial.next.prev = null;

  return initial.next;
};
